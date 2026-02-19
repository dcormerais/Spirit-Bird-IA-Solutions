import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { supabase } from '../lib/supabase';

interface TimeSlotsProps {
  selectedDate: Date;
  selectedSlot: string | null;
  onSlotSelect: (slotId: string) => void;
}

interface TimeSlot {
  id: string;
  start_time: string;
  end_time: string;
  is_available: boolean;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  selectedSlot,
  onSlotSelect
}) => {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      setLoading(true);
      try {
        // Set the time range for the selected date (9h00 to 18h30)
        const startOfDay = new Date(selectedDate);
        startOfDay.setHours(9, 0, 0, 0);
        
        const endOfDay = new Date(selectedDate);
        endOfDay.setHours(18, 30, 0, 0);

        const { data, error } = await supabase
          .from('time_slots')
          .select('*')
          .gte('start_time', startOfDay.toISOString())
          .lte('start_time', endOfDay.toISOString())
          .eq('is_available', true)
          .order('start_time');

        if (error) throw error;
        setSlots(data || []);
      } catch (error) {
        console.error('Error fetching time slots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeSlots();
  }, [selectedDate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p>Aucun créneau disponible pour cette date</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {slots.map((slot) => {
        const startTime = new Date(slot.start_time);
        const formattedTime = format(startTime, 'HH:mm', { locale: fr });

        return (
          <motion.button
            key={slot.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSlotSelect(slot.id)}
            className={`
              p-4 rounded-lg text-center transition-colors
              ${selectedSlot === slot.id ? 'bg-primary text-dark' : 'bg-white/5 hover:bg-white/10'}
            `}
          >
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{formattedTime}</span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default TimeSlots;