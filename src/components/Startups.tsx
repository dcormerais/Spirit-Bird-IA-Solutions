import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

const startupServices = [
  "Cadrage des besoins clients",
  "Identification des cas d'usage",
  "Intégration dans les environnements existants",
  "Automatisation des processus",
  "Accompagnement utilisateurs"
];

const Startups = () => {
  return (
    <section id="startups-ia" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-card rounded-xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Gauche */}
            <div className="md:w-2/5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Section dédiée</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vous développez une{' '}
                <span className="gradient-text">solution IA ?</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                J'accompagne également les entreprises spécialisées en IA dans le passage entre technologie et adoption terrain.
              </p>
            </div>

            {/* Droite */}
            <div className="md:w-3/5 md:pl-8 md:border-l border-white/10">
              <div className="space-y-3">
                {startupServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Startups;
