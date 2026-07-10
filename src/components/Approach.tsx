import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Search, FileSearch, Code, Lightbulb, Users } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Comprendre vos processus",
    description: "Analyse de votre fonctionnement actuel pour identifier les tâches chronophages et les points de friction.",
    details: [
      "Échange avec vos équipes",
      "Cartographie des processus",
      "Identification des gains possibles"
    ]
  },
  {
    icon: Search,
    title: "Identifier les opportunités",
    description: "Recherche des automatisations qui apportent une réelle valeur métier, sans ajouter de complexité inutile.",
    details: [
      "Analyse des tâches répétitives",
      "Évaluation des outils existants",
      "Priorisation des actions"
    ]
  },
  {
    icon: Lightbulb,
    title: "Concevoir la solution",
    description: "Création d'une approche adaptée à votre environnement, vos contraintes et vos objectifs.",
    details: [
      "Choix des technologies adaptées",
      "Définition du workflow",
      "Validation avec vos équipes"
    ]
  },
  {
    icon: Code,
    title: "Intégrer & automatiser",
    description: "Déploiement de solutions IA connectées à vos outils existants avec une supervision humaine.",
    details: [
      "Connexion des applications",
      "Création des automatisations",
      "Tests et sécurisation"
    ]
  },
  {
    icon: Users,
    title: "Accompagner vos équipes",
    description: "Transmission des connaissances pour garantir une adoption simple et durable.",
    details: [
      "Formation utilisateur",
      "Documentation claire",
      "Prise en main autonome"
    ]
  },
  {
    icon: FileSearch,
    title: "Mesurer & améliorer",
    description: "Suivi des résultats pour optimiser continuellement les processus automatisés.",
    details: [
      "Mesure des gains obtenus",
      "Améliorations continues",
      "Évolution selon vos besoins"
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
            Notre <span className="gradient-text">méthode</span>
          </motion.h2>

          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Une approche pragmatique pour identifier, automatiser et améliorer vos processus métiers.
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

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

              </div>


              <p className="text-gray-400 mb-6">
                {step.description}
              </p>


              <ul className="space-y-3">

                {step.details.map((detail, i) => (

                  <li key={i} className="flex items-center gap-2">

                    <div className="w-2 h-2 rounded-full bg-primary"></div>

                    <span className="text-sm text-gray-300">
                      {detail}
                    </span>

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