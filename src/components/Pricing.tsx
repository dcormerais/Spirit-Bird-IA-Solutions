import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    priceRange: '700 à 1 200€',
    maintenance: '250€/mois',
    description: 'Pour automatiser un premier process et mesurer concrètement le gain de temps sur vos opérations.',
    features: [
      '1 workflow automatisé sur mesure',
      '2 à 3 outils connectés',
      'Formation et documentation incluses',
      'Mise en production en 1 à 2 semaines',
      'Maintenance minimum 3 mois'
    ],
    highlight: false,
    cta: 'Démarrer mon projet'
  },
  {
    name: 'Growth',
    priceRange: '2 000 à 4 000€',
    maintenance: '600€/mois',
    description: 'Le coeur de notre offre. Pour les entreprises qui veulent automatiser plusieurs process et gagner en efficacité opérationnelle.',
    features: [
      'Workflow avancé multi-étapes',
      'Intégrations multiples (CRM, email, Notion...)',
      'Dashboard de suivi automatisé',
      'Formation équipe incluse',
      'Mise en production en 2 à 4 semaines',
      'Maintenance minimum 3 mois'
    ],
    highlight: true,
    cta: 'Démarrer mon projet'
  },
  {
    name: 'Scale',
    priceRange: '5 000 à 12 000€',
    maintenance: '1 200€/mois',
    description: 'Pour les projets complexes nécessitant une architecture complète avec des systèmes autonomes et décisionnels.',
    features: [
      'Architecture complète sur mesure',
      'Systèmes autonomes et décisionnels',
      'Intégrations illimitées',
      'Dashboard et reporting avancés',
      'Formation et accompagnement complets',
      'Maintenance minimum 3 mois'
    ],
    highlight: false,
    cta: 'Discutons de votre projet'
  }
];

const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Tarifs</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des tarifs indicatifs selon la complexité de votre projet. Chaque mission fait l'objet d'un devis personnalisé après audit gratuit.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`service-card rounded-xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/30'
                  : 'hover:border-primary/30'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    ⭐ Le plus demandé
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-2">
                <span className="text-3xl font-bold text-primary">{plan.priceRange}</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">
                Maintenance : {plan.maintenance}
              </p>

              <div className="space-y-3 flex-grow mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/dorian-cormerais/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'button-primary'
                    : 'border border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note bas */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Tous les tarifs sont indicatifs et hors taxes. Chaque projet fait l'objet d'un devis personnalisé après audit gratuit.
        </motion.p>

      </div>
    </section>
  );
};

export default Pricing;
