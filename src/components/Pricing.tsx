import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    priceLabel: 'à partir de',
    price: '1 200€ HT',
    followUp: 'à partir de 250€ / mois',
    followUpDetail:
      'Hébergement, supervision, maintenance corrective, suivi et gestion des services IA utilisés',
    description:
      'Pour automatiser un premier processus métier et éliminer une friction opérationnelle identifiée.',
    features: [
      '1 processus métier automatisé sur mesure',
      '2 à 3 outils connectés',
      'Configuration et mise en production',
      'Documentation de prise en main incluse',
      'Suivi du fonctionnement de la solution',
      'Support par email sous 48h',
    ],
    highlight: false,
    cta: 'Démarrer mon projet'
  },

  {
    name: 'Growth',
    priceLabel: 'à partir de',
    price: '2 500€ HT',
    followUp: 'à partir de 500€ / mois',
    followUpDetail:
      'Suivi prioritaire, optimisations continues, supervision avancée et gestion des ressources IA',
    description:
      'Pour automatiser plusieurs processus et améliorer durablement l’efficacité opérationnelle.',
    features: [
      'Plusieurs workflows métier automatisés',
      'Intégrations avancées avec vos outils existants',
      'Dashboard de suivi automatisé',
      'Formation de vos équipes',
      'Optimisation continue des automatisations',
      'Gestion des services IA utilisés',
      'Support prioritaire sous 24h',
    ],
    highlight: true,
    cta: 'Démarrer mon projet'
  },

  {
    name: 'Scale',
    priceLabel: null,
    price: 'Sur devis',
    followUp: 'Sur devis',
    followUpDetail:
      'Accompagnement dédié, évolution continue et pilotage complet de votre environnement IA',
    description:
      'Pour les projets nécessitant une architecture sur mesure, des agents IA et un accompagnement stratégique.',
    features: [
      'Architecture complète sur mesure',
      'Agents IA et systèmes autonomes',
      'Intégrations multiples',
      'Dashboard et reporting avancés',
      'Formation et accompagnement des équipes',
      'Optimisations continues',
      'Pilotage global de la solution IA',
      'Accès direct et réactivité maximale',
    ],
    highlight: false,
    cta: 'Discutons de votre projet'
  }
];

const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            Chaque projet commence par un audit gratuit.
            J’analyse vos processus et vos outils pour identifier les automatisations
            réellement pertinentes.

            Après le déploiement, je peux assurer le suivi, la maintenance et
            l’évolution de votre solution pour garantir son bon fonctionnement dans le temps.
          </motion.p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`service-card rounded-xl p-8 flex flex-col ${
                plan.highlight
                  ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/30'
                  : ''
              }`}
            >

              <div className="h-8 mb-2">
                {plan.highlight && (
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    ⭐ Le plus demandé
                  </span>
                )}
              </div>


              <h3 className="text-xl font-bold mb-2">
                {plan.name}
              </h3>


              <p className="text-gray-400 text-sm mb-6">
                {plan.description}
              </p>


              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-1">
                  {plan.priceLabel}
                </p>

                <span className="text-3xl font-bold text-primary">
                  {plan.price}
                </span>
              </div>


              <div className="pb-6 mb-6 border-b border-white/5">

                <p className="text-xs text-gray-500 mb-2">
                  Suivi & optimisation continue
                </p>

                <p className="text-sm font-medium text-gray-300">
                  {plan.followUp}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {plan.followUpDetail}
                </p>

              </div>


              <div className="flex-grow space-y-3 mb-8">

                {plan.features.map((feature, i) => (

                  <div key={i} className="flex items-start gap-3">

                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />

                    <span className="text-sm text-gray-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>


              <a
                href="https://calendly.com/dorian-cormerais/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm ${
                  plan.highlight
                    ? 'button-primary text-dark'
                    : 'border border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >

                {plan.cta}

                <ArrowRight className="w-4 h-4" />

              </a>


              <p className="text-xs text-gray-500 text-center mt-3">
                Après audit gratuit, proposition adaptée à votre contexte.
              </p>


            </motion.div>

          ))}

        </div>


        <motion.div
          className="mt-16 service-card rounded-xl p-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <p className="text-white font-semibold text-lg mb-2">
            Une automatisation qui évolue avec votre activité.
          </p>

          <p className="text-gray-400 text-sm">
            Les outils évoluent, vos besoins changent et vos processus se transforment.
            L’accompagnement permet de maintenir vos automatisations fiables,
            optimisées et adaptées à votre organisation.
          </p>

        </motion.div>


        <p className="text-center text-gray-500 text-sm mt-8">
          Tous les tarifs sont indicatifs et hors taxes. Un devis personnalisé est établi après audit gratuit.
        </p>

      </div>
    </section>
  );
};

export default Pricing;