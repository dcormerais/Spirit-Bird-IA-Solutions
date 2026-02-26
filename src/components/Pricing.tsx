import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Check, TrendingUp } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    priceLabel: 'à partir de',
    price: '1 200€ HT',
    maintenance: 'à partir de 250€ / mois',
    maintenanceDetail: 'Infrastructure API et assistance technique',
    description: 'Pour tester l\'automatisation sur un process précis et mesurer concrètement ce que ça change.',
    metrics: [
      'Gain de temps estimé : 3 à 12h / mois',
      'ROI typique : 3 à 5 mois',
    ],
    features: [
      '1 workflow automatisé sur mesure',
      '2 à 3 outils connectés',
      'Documentation de prise en main incluse',
      'Mise en production en 2 à 4 semaines',
      'Support par email sous 48h',
    ],
    highlight: false,
    cta: 'Démarrer mon projet'
  },
  {
    name: 'Growth',
    priceLabel: 'à partir de',
    price: '2 500€ HT',
    maintenance: 'à partir de 500€ / mois',
    maintenanceDetail: 'Infrastructure API et assistance technique',
    description: 'Pour les entreprises qui veulent automatiser plusieurs process et gagner en efficacité opérationnelle.',
    metrics: [
      'Gain de temps estimé : 15 à 35h / mois',
      'Réduction des tâches répétitives : 60 à 80%',
      'ROI typique : 2 à 4 mois',
    ],
    features: [
      'Workflows multi-étapes sur mesure',
      'Intégrations multiples (CRM, email, Notion...)',
      'Dashboard de suivi automatisé',
      'Formation complète de votre équipe (jusqu\'à 5 personnes)',
      'Mise en production en 4 à 8 semaines',
      'Support prioritaire sous 24h',
    ],
    highlight: true,
    cta: 'Démarrer mon projet'
  },
  {
    name: 'Scale',
    priceLabel: null,
    price: 'Sur devis',
    maintenance: 'Sur devis',
    maintenanceDetail: 'Infrastructure API et assistance technique',
    description: 'Pour les projets ambitieux nécessitant une architecture sur mesure, des systèmes autonomes et un accompagnement de bout en bout.',
    metrics: [
      'Gain de temps estimé : 40h+ / mois',
      'Processus critiques audités avant mise en production',
      'ROI mesuré et suivi après déploiement',
    ],
    features: [
      'Architecture complète sur mesure',
      'Systèmes autonomes et décisionnels',
      'Intégrations illimitées',
      'Dashboard et reporting avancés',
      'Formation et montée en compétence de vos équipes',
      'Délai défini après audit',
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
            Chaque projet commence par un audit gratuit. Je prends le temps de comprendre
            vos process en profondeur pour ne vous proposer que ce qui est vraiment pertinent à automatiser.
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
                  : ''
              }`}
            >
              {/* Badge — hauteur fixe pour aligner le reste */}
              <div className="h-8 mb-2 flex items-center">
                {plan.highlight && (
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    ⭐ Le plus demandé
                  </span>
                )}
              </div>

              {/* Nom + description — hauteur fixe */}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-16 line-clamp-3">{plan.description}</p>

              {/* Prix — toujours 2 lignes, même pour "Sur devis" */}
              <div className="h-16 flex flex-col justify-end mb-1">
                <p className="text-xs text-gray-500 mb-1">
                  {plan.priceLabel ?? '\u00a0'}
                </p>
                <span className="text-3xl font-bold text-primary leading-none">{plan.price}</span>
              </div>

              {/* Maintenance */}
              <div className="mt-3 mb-6 pb-6 border-b border-white/5">
                <p className="text-xs text-gray-500 mb-0.5">maintenance</p>
                <p className="text-sm font-medium text-gray-300">{plan.maintenance}</p>
                <p className="text-xs text-gray-500 mt-0.5">{plan.maintenanceDetail}</p>
              </div>

              {/* Impact estimé */}
              <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-xs font-semibold text-primary flex items-center gap-1.5 mb-3">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Impact estimé
                </p>
                <div className="space-y-1.5">
                  {plan.metrics.map((metric, i) => (
                    <p key={i} className="text-xs text-gray-300">{metric}</p>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Estimations variables selon vos process et vos outils.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 flex-grow mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/dorian-cormerais/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'button-primary text-dark'
                    : 'border border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bloc différenciateur */}
        <motion.div
          className="mt-16 service-card rounded-xl p-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-white font-semibold text-lg mb-2">
            Pas d'automatisation inutile.
          </p>
          <p className="text-gray-400 text-sm mb-3">
            Avant de proposer quoi que ce soit, je cartographie vos process réels.
            Mon objectif n'est pas de tout automatiser : c'est d'identifier les actions
            qui représentent l'essentiel de votre charge inutile, et de les supprimer.
          </p>
          <p className="text-xs text-gray-500 italic">
            Les chiffres indiqués sur cette page sont des estimations basées sur des projets similaires.
            Ils peuvent varier selon vos process et votre organisation.
          </p>
        </motion.div>

        {/* Note bas */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Tous les tarifs sont indicatifs et hors taxes. Un devis personnalisé est établi après audit gratuit.
        </motion.p>

      </div>
    </section>
  );
};

export default Pricing;
