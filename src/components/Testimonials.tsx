import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
    content: 'Spirit Bird IA Solutions a transformé notre approche business. Leur solution de CRM intelligent nous a permis d\'augmenter nos ventes de 40%.',
    rating: 5
  },
  {
    name: 'Thomas Dubois',
    role: 'Fondateur, EduTech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150',
    content: 'La plateforme e-learning développée par Spirit Bird IA Solutions a révolutionné notre façon d\'enseigner. Les résultats sont impressionnants.',
    rating: 5
  },
  {
    name: 'Marie Lambert',
    role: 'Directrice Marketing, HealthCare+',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
    content: 'Un accompagnement exceptionnel et des solutions vraiment innovantes. Notre application de santé connectée est un véritable succès.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Ils nous font <span className="gradient-text">Confiance</span>
          </h2>
          <p className="text-gray-400">
            Découvrez les retours de nos clients sur nos solutions IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="service-card p-6 rounded-xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}