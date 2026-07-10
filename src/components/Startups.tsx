import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowRight } from 'lucide-react';

const startupServices = [
  "Cadrage des besoins clients",
  "Identification des cas d'usage",
  "Intégration dans les environnements existants",
  "Automatisation des processus",
  "Accompagnement utilisateurs",
];

const Startups = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-card rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">

            <div className="md:w-1/2">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20 inline-block mb-6">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vous développez une <span className="gradient-text">solution IA</span> ?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                J'accompagne également les entreprises spécialisées en IA dans le passage
                entre technologie et adoption terrain.
              </p>
              <a
                href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <span>Discutons de votre projet</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="md:w-1/2 space-y-3">
              {startupServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                  <span className="text-sm text-gray-300">{service}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Startups;
