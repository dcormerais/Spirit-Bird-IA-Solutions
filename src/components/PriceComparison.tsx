import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Globe, ShoppingBag, Smartphone, Bot, Target, Zap, ArrowRight, CalendarCheck } from 'lucide-react';
import GradientButton from './GradientButton';

const services = [
  {
    icon: Bot,
    title: "Automatisation",
    description: "Workflows intelligents pour PME",
    color: "text-pink-400",
    highlight: true
  },
  {
    icon: Globe,
    title: "Sites Web",
    description: "Sites vitrines et applications web sur mesure",
    color: "text-blue-400"
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Solutions de vente en ligne performantes",
    color: "text-emerald-400"
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Applications iOS et Android natives",
    color: "text-purple-400"
  },
  {
    icon: Target,
    title: "Conseil Digital",
    description: "Accompagnement stratégique",
    color: "text-yellow-400"
  }
];

const automationPricing = [
  {
    title: 'Audit Gratuit',
    duration: '30 min',
    price: '0€',
    maintenance: null,
    highlight: false,
    features: [
      'Analyse de vos process',
      'Identification des opportunités',
      'Plan d\'action concret',
      'Sans engagement'
    ],
    cta: 'Réserver maintenant',
    ctaLink: 'https://calendly.com/dorian-cormerais/30min'
  },
  {
    title: 'Automatisation Simple',
    duration: '1 à 2 semaines',
    price: 'À partir de 999€',
    maintenance: '199€ HT/mois',
    highlight: true,
    features: [
      '1 workflow automatisé',
      'Intégration à vos outils existants',
      'Make / n8n / Zapier',
      'Formation incluse',
      'Support 30 jours'
    ],
    cta: 'Démarrer',
    ctaLink: 'https://calendly.com/dorian-cormerais/30min'
  },
  {
    title: 'Workflow Complet',
    duration: '2 à 4 semaines',
    price: 'À partir de 2999€',
    maintenance: '499€ HT/mois',
    highlight: false,
    features: [
      'Plusieurs workflows connectés',
      'Agents IA intégrés',
      'Dashboard de suivi',
      'Formation équipes',
      'Support continu'
    ],
    cta: 'Démarrer',
    ctaLink: 'https://calendly.com/dorian-cormerais/30min'
  }
];

const projectExamples = [
  {
    title: 'Site Vitrine',
    duration: '4-5 jours',
    price: '1200€ à 1500€',
    maintenance: '25€ HT/mois',
    features: [
      'Design sur mesure',
      'Responsive design',
      'Optimisation SEO',
      'Formulaires de contact',
      'Analytics'
    ]
  },
  {
    title: 'E-commerce',
    duration: '8-10 jours',
    price: '2400€ à 3000€',
    maintenance: '50€ HT/mois',
    features: [
      'Catalogue produits',
      'Paiement sécurisé',
      'Gestion des stocks',
      'Espace client',
      'Dashboard admin'
    ]
  },
  {
    title: 'Application Web',
    duration: '7-9 jours',
    price: '2100€ à 2700€',
    maintenance: '50€ HT/mois',
    features: [
      'Interface intuitive',
      'Base de données',
      'Authentification',
      'API REST',
      'Temps réel'
    ]
  },
  {
    title: 'Application Mobile',
    duration: '12-15 jours',
    price: '3600€ à 4500€',
    maintenance: '150€ HT/mois',
    features: [
      'iOS & Android',
      'UI/UX native',
      'Mode hors-ligne',
      'Push notifications',
      'Analytics'
    ]
  }
];

const PriceComparison: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="tarifs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">Tarification Transparente</motion.h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">Une offre complète adaptée à vos besoins — avec l'automatisation IA en priorité</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`service-card p-6 rounded-xl text-center min-h-[140px] flex flex-col items-center justify-center transition-colors ${
                  service.highlight
                    ? 'border-primary/40 bg-primary/5'
                    : 'hover:border-primary/50'
                }`}
              >
                <div className={`p-2 rounded-full mb-3 ${service.highlight ? 'bg-primary/20' : 'bg-primary/10'}`}>
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                </div>
                <h3 className="text-sm font-medium mb-2">{service.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-2">Tarif journalier</h3>
            <div className="text-4xl font-bold text-primary mb-4">300€ / jour</div>
            <p className="text-gray-400 mb-6">Inclut le développement, le conseil et l'accompagnement</p>
            <GradientButton href="#contact">Demander un devis</GradientButton>
          </div>
        </div>

        {/* Automatisation Pricing */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-center">Automatisation & IA</h3>
          </div>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Commencez par un audit gratuit, puis choisissez la formule adaptée à vos besoins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationPricing.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`service-card p-6 rounded-xl flex flex-col ${
                  plan.highlight
                    ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/30'
                    : ''
                }`}
              >
                {plan.highlight && (
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 self-start">
                    ⭐ Le plus populaire
                  </span>
                )}
                <h4 className="text-xl font-bold mb-1">{plan.title}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-400">{plan.duration}</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{plan.price}</div>
                {plan.maintenance && (
                  <p className="text-sm text-gray-400 mb-4">+ {plan.maintenance}/mois</p>
                )}
                <ul className="space-y-2 flex-grow mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'button-primary'
                      : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                  }`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dev Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Développement Web & Mobile</h3>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Besoin d'un site, d'une app ou d'une solution e-commerce ? Voici nos exemples de projets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectExamples.map((project, index) => (
              <motion.div
                key={project.title}
                className="service-card p-6 rounded-xl h-full flex flex-col"
              >
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-primary">{project.price}</span>
                      <span className="text-sm text-gray-400">+ {project.maintenance} maintenance</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PriceComparison;