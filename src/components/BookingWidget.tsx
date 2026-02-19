import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { User, Mail, Phone, Building2, MessageSquare, Loader2, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { supabase } from '../lib/supabase';
import Calendar from './Calendar';
import TimeSlots from './TimeSlots';

interface BookingForm {
  clientName: string;
  clientEmail: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

const BookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSlots, setHasSlots] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<BookingForm>();

  // Vérifier si la date sélectionnée a des créneaux disponibles
  useEffect(() => {
    const checkAvailability = async () => {
      if (!selectedDate) {
        setHasSlots(false);
        return;
      }

      const startOfDay = new Date(selectedDate);
      startOfDay.setHours(9, 0, 0, 0);

      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(18, 30, 0, 0);

      const { data, error } = await supabase
        .from('time_slots')
        .select('id')
        .gte('start_time', startOfDay.toISOString())
        .lte('start_time', endOfDay.toISOString())
        .eq('is_available', true);

      if (error) {
        console.error('Error checking availability:', error);
        setHasSlots(false);
        return;
      }

      setHasSlots(data && data.length > 0);
    };

    checkAvailability();
  }, [selectedDate]);

  const onSubmit = async (data: BookingForm) => {
    if (!selectedSlot) return;

    setIsLoading(true);
    try {
      // Vérifier si le créneau est toujours disponible et récupérer ses informations
      const { data: slot, error: slotError } = await supabase
        .from('time_slots')
        .select('is_available, start_time, end_time')
        .eq('id', selectedSlot)
        .single();

      if (slotError || !slot?.is_available) {
        toast.error('Ce créneau n\'est plus disponible');
        return;
      }

      // Créer la réservation
      const { error: bookingError } = await supabase
        .from('bookings')
        .insert({
          client_name: data.clientName,
          client_email: data.clientEmail,
          phone_number: data.phoneNumber,
          company_name: data.companyName,
          message: data.message,
          time_slot_id: selectedSlot
        });

      if (bookingError) throw bookingError;

      // Mettre à jour la disponibilité du créneau
      const { error: updateError } = await supabase
        .from('time_slots')
        .update({ is_available: false })
        .eq('id', selectedSlot);

      if (updateError) throw updateError;

      toast.success('Votre rendez-vous a été enregistré avec succès !');

      // Envoi de l'email via EmailJS
      const templateParams = {
        to_name: 'Spirit Bird IA Solutions',
        from_name: data.clientName,
        message: data.message,
      };

      await emailjs.send(
        'service_4qjzqoo',
        'template_0kv502a',
        templateParams,
        'usuAHHrnwQPP_S7oi'
      );
      
      toast.success('Notification par email envoyée avec succès.');

      // Réinitialiser la sélection
      setSelectedDate(null);
      setSelectedSlot(null);
    } catch (error) {
      toast.error('Une erreur est survenue lors de la prise de rendez-vous.');
      console.error('Booking error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="service-card p-8 rounded-xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Rendez-vous téléphonique</h2>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>30 minutes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
          </div>

          <div className="space-y-6">
            {selectedDate && (
              <>
                <h3 className="text-lg font-semibold">Créneaux disponibles</h3>
                {hasSlots ? (
                  <TimeSlots
                    selectedDate={selectedDate}
                    selectedSlot={selectedSlot}
                    onSlotSelect={setSelectedSlot}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <p>Aucun créneau disponible pour cette date</p>
                  </div>
                )}
              </>
            )}

            {selectedSlot && hasSlots && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 pt-6 border-t border-white/10"
              >
                <h3 className="text-lg font-semibold">Vos informations</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          {...register('clientName', { required: true })}
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.clientName && (
                        <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          {...register('clientEmail', { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="john@example.com"
                          type="email"
                        />
                      </div>
                      {errors.clientEmail && (
                        <p className="text-red-500 text-sm mt-1">Email invalide</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          {...register('phoneNumber', { 
                            required: true,
                            pattern: /^(\+33|0)[1-9](\d{2}){4}$/
                          })}
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="+33 6 XX XX XX XX"
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">Numéro de téléphone invalide</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Entreprise
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          {...register('companyName')}
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="Nom de l'entreprise"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        {...register('message')}
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                        rows={4}
                        placeholder="Décrivez brièvement l'objet de votre rendez-vous..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="button-primary w-full py-3 rounded-lg flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" />
                        Traitement en cours...
                      </>
                    ) : (
                      'Confirmer le rendez-vous'
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;