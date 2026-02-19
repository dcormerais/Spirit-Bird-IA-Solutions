import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  isToday,
  startOfWeek,
  endOfWeek,
  addDays
} from 'date-fns';
import { fr } from 'date-fns/locale';

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  // Obtenir le premier jour du mois
  const monthStart = startOfMonth(currentMonth);
  // Obtenir le dernier jour du mois
  const monthEnd = endOfMonth(currentMonth);
  // Obtenir le premier jour de la première semaine
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  // Obtenir le dernier jour de la dernière semaine
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  // Générer tous les jours du calendrier
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  // Désactiver les dates passées
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="w-full bg-white/5 rounded-xl p-4">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-semibold capitalize">
          {format(currentMonth, 'MMMM yyyy', { locale: fr })}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-400 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, dayIdx) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isCurrentDay = isToday(day);
          const disabled = isDateDisabled(day);

          return (
            <motion.button
              key={day.toString()}
              whileHover={!disabled ? { scale: 1.1 } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
              onClick={() => !disabled && onDateSelect(day)}
              disabled={disabled}
              className={`
                relative p-2 rounded-lg text-center text-sm
                ${!isCurrentMonth && 'opacity-30'}
                ${isSelected ? 'bg-primary text-dark font-semibold' : ''}
                ${!isSelected && isCurrentMonth && !disabled ? 'hover:bg-white/5' : ''}
                ${isCurrentDay && !isSelected ? 'ring-2 ring-primary/30' : ''}
                ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span className="relative z-10">{format(day, 'd')}</span>
              {isCurrentDay && !isSelected && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;