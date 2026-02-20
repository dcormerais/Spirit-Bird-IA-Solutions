import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, ArrowRight, Brain, Zap, Clock, BarChart2, Users } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    text: "Vos équipes passent du temps sur des tâches sans valeur ajoutée"
  },
  {
    icon: Zap,
    text: "Vos outils ne communiquent pas entre eux"
  },
  {
    icon: BarChart2,
    text: "Vos données sont dispersées et vos décisions manquent de fiabilité"
  }
];

const featuresIA = [
  "Automatisation de workflows métiers",
  "Intégration agents IA (CRM, ERP, email...)",
  "Connexion d'outils via Make, n8n, Zapier",
  "Dashboards et reporting automatisés",
  "Relances et onboarding automatiques",
  "Formation et accompagnement équipes",
  "Déploiement en quelques semaines",
  "Suivi et optimisation continue"
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Vous reconnaissez-vous */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
              >
                <problem.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">{problem.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold gradient-text mb-8">
              On règle ça. En quelques semaines seulement.
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
            <p className="text-gray-500 text-sm mt-3">✓ Gratuit · ✓ Sans engagement · ✓ Diagnostic concret</p>
          </div>
        </motion.div>

        {/* Titre section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Mes Services</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des solutions sur-mesure pour optimiser votre activité et libérer le potentiel de vos équipes
          </motion.p>
        </div>

        {/* Cards services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Card principale IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 service-card rounded-xl p-8 border-primary/50 bg-primary/5 ring-1 ring-primary/30 flex flex-col"
          >
            <div className="mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                ⭐ Service Principal
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Automatisation et IA</h3>
            </div>
            <p className="text-gray-400 mb-8">
              Éliminez les tâches répétitives et libérez vos équipes pour ce qui crée vraiment de la valeur.
            </p>
            <div className="grid grid-cols-2 gap-3 flex-grow">
              {featuresIA.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://calendly.com/dorian-cormerais/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 justify-center"
            >
              <span>Réserver un audit gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card secondaire Web */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="service-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Développement Web</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm flex-grow">
              Je réalise également des projets web et mobiles sur mesure : sites vitrines, 
              applications web, e-commerce. Des réalisations solides, pensées pour durer.
            </p>
            <div className="flex items-center gap-2 mt-auto">
              <Users className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-sm text-gray-500">
                Chaque projet web fait l'objet d'un devis personnalisé.
              </p>
            </div>
            <a
              href="https://calendly.com/dorian-cormerais/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
            >
              <span>Discutons de votre projet</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Services;
