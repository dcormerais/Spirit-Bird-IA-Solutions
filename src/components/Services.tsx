import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Bot,
  ArrowRight,
  Brain,
  ShoppingBag,
  Zap,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const services = [
  {
    icon: Bot,
    title: "Automatisation & IA",
    highlight: true,
    description: "Éliminez les tâches répétitives et libérez vos équipes pour ce qui crée vraiment de la valeur.",
    features: [
      "Automatisation de workflows métiers",
      "Intégration agents IA (CRM, ERP, email…)",
      "Connexion d'outils via Make, n8n, Zapier",
      "Dashboards et reporting automatisés",
      "Relances et onboarding automatiques",
      "Formation et accompagnement équipes",
      "Déploiement en 1 à 2 semaines",
      "Suivi et optimisation continue"
    ]
  },
  {
    icon: Globe,
    title: "Sites Web Sur Mesure",
    highlight: false,
    description: "Conception de sites web alliant esthétisme, fonctionnalité et performance pour renforcer votre présence en ligne.",
    features: [
      "Sites Vitrines",
      "Sites Institutionnels",
      "Landing Pages",
      "Portfolios",
      "Design Personnalisé",
      "Expérience Utilisateur",
      "SEO Intégré",
      "Support Technique"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Solutions E-commerce",
    highlight: false,
    description: "Développement de boutiques en ligne performantes pour maximiser vos ventes et fidéliser vos clients.",
    features: [
      "Catalogue Produits",
      "Paiement Sécurisé",
      "Gestion des Stocks",
      "Click & Collect",
      "Espace Client",
      "Recommandations IA",
      "Analytics Avancés",
      "Dashboard Admin"
    ]
  },
  {
    icon: Smartphone,
    title: "Apps Web & Mobile",
    highlight: false,
    description: "Création d'applications innovantes et performantes pour tous les supports et plateformes.",
    features: [
      "Apps iOS/Android",
      "Applications Web",
      "Progressive Web Apps",
      "Single Page Apps",
      "Mode Hors-ligne",
      "Push Notifications",
      "API REST/GraphQL",
      "WebSocket"
    ]
  }
];

const problems = [
  {
    icon: AlertTriangle,
    text: "Vos équipes passent du temps sur des tâches sans valeur ajoutée"
  },
  {
    icon: AlertTriangle,
    text: "Vos outils ne communiquent pas entre eux"
  },
  {
    icon: AlertTriangle,
    text: "Vos données sont dispersées et vos décisions manquent de fiabilité"
  }
];

const Services = () => {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Pourquoi automatiser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 p-8 rounded-2xl border border-primary/20 bg-primary/5"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Vous reconnaissez-vous dans ces situations ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
              >
                <problem.icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">{problem.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold gradient-text mb-8">
              On règle ça. En 1 à 2 semaines.
            </p>
            <a
              href="https://calendly.com/dorian-cormerais/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2"
            >
              <span>Réserver mon audit gratuit — 30 min</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-gray-500 text-sm mt-3">✓ Gratuit · ✓ Sans engagement · ✓ Diagnostic concret</p>
          </div>
        </motion.div>

        {/* Titre section services */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Brain className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Nos Services</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des solutions sur-mesure pour optimiser votre activité et libérer le potentiel de vos équipes
          </motion.p>
        </div>

        {/* Cards services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`service-card rounded-xl p-6 transition-all duration-300 flex flex-col ${
                service.highlight
                  ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/30'
                  : 'hover:border-primary/50'
              }`}
            >
              {service.highlight && (
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    ⭐ Service Principal
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${service.highlight ? 'bg-primary/20' : 'bg-primary/10'} text-primary`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>

              <p className="text-gray-400 mb-6 text-sm">{service.description}</p>

              <div className="space-y-3 flex-grow">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${service.highlight ? 'bg-primary' : 'bg-primary/60'}`}></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/dorian-cormerais/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                {service.highlight ? (
                  <>
                    <span>Réserver un audit gratuit</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                ) : (
                  <>
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Chaque projet est unique et mérite une attention particulière.
            Contactez-nous pour discuter de vos besoins et découvrir comment
            nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <a
            href="https://calendly.com/dorian-cormerais/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2"
          >
            <span>Réserver mon audit gratuit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;