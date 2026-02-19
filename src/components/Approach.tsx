import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Search, FileSearch, Code, Lightbulb, Users } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Écoute & Diagnostic",
    description: "Compréhension approfondie de vos besoins, objectifs et challenges actuels.",
    details: [
      "Analyse détaillée de vos besoins",
      "Identification des points d'amélioration",
      "Évaluation des solutions possibles"
    ]
  },
  {
    icon: Search,
    title: "Audit Technique",
    description: "Évaluation complète de votre infrastructure technique et identification des opportunités d'innovation.",
    details: [
      "Analyse de l'existant",
      "Évaluation des contraintes techniques",
      "Identification des opportunités"
    ]
  },
  {
    icon: FileSearch,
    title: "Identification Solutions IA",
    description: "Définition des solutions IA innovantes parfaitement adaptées à vos besoins.",
    details: [
      "Sélection des technologies IA",
      "Définition de l'architecture",
      "Plan d'implémentation détaillé"
    ]
  },
  {
    icon: Code,
    title: "Développement Expert",
    description: "Création de votre solution sur mesure avec les dernières technologies IA.",
    details: [
      "Développement haute qualité",
      "Tests approfondis",
      "Optimisation continue"
    ]
  },
  {
    icon: Users,
    title: "Formation & Support",
    description: "Accompagnement complet pour une adoption réussie de votre solution.",
    details: [
      "Formation personnalisée",
      "Support technique dédié",
      "Suivi régulier"
    ]
  },
  {
    icon: Lightbulb,
    title: "Conseil & Stratégie",
    description: "Optimisation continue et conseils stratégiques pour maximiser la valeur de votre solution.",
    details: [
      "Recommandations d'évolution",
      "Veille technologique",
      "Optimisation ROI"
    ]
  }
];

const Approach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="notre-approche" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Notre <span className="gradient-text">Approche</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Une méthodologie éprouvée pour créer des solutions IA innovantes et performantes
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>

              <p className="text-gray-400 mb-6">{step.description}</p>

              <ul className="space-y-3">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 h-1 bg-primary/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;