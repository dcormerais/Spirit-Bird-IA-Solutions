import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  ArrowRight,
  Brain,
  Zap,
  Clock,
  BarChart2,
  Users,
  Search,
  Code,
  GraduationCap,
  X,
  Check,
  Workflow
} from 'lucide-react';

const problems = [
  {
    icon: Clock,
    text: "Vos équipes perdent du temps sur des tâches répétitives qui pourraient être automatisées"
  },
  {
    icon: Zap,
    text: "Vos outils métiers ne communiquent pas efficacement entre eux"
  },
  {
    icon: BarChart2,
    text: "Vos données sont dispersées et limitent vos prises de décision"
  }
];

const featuresIA = [
  "Automatisation de processus métiers",
  "Agents IA connectés à vos outils (CRM, ERP, email...)",
  "Workflows intelligents avec n8n, Make et Zapier",
  "Traitement automatisé de données et documents",
  "Reporting et tableaux de bord automatisés",
  "Assistants IA internes pour vos équipes",
  "Déploiement progressif sans rupture opérationnelle",
  "Suivi et amélioration continue"
];

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Audit IA & processus',
    description:
      "On identifie vos tâches chronophages, vos points de friction et les opportunités concrètes d'automatisation. L'objectif : trouver les cas d'usage avec le meilleur retour sur investissement."
  },
  {
    number: '2',
    icon: Workflow,
    title: 'Intégration & déploiement',
    description:
      "On connecte vos outils existants et on construit des automatisations adaptées à votre fonctionnement. Pas de transformation brutale : on améliore progressivement vos opérations."
  },
  {
    number: '3',
    icon: GraduationCap,
    title: 'Adoption & autonomie',
    description:
      "Vos équipes sont accompagnées pour utiliser efficacement les nouveaux outils. Documentation, formation et optimisation garantissent une adoption durable."
  }
];

const beforeAfter = {
  before: [
    "Tâches manuelles répétitives au quotidien",
    "Outils métiers isolés les uns des autres",
    "Process dépendants des connaissances individuelles",
    "Temps perdu en copier-coller et ressaisie",
    "Informations difficiles à exploiter",
    "Croissance limitée par les contraintes opérationnelles"
  ],
  after: [
    "Process automatisés et plus fiables",
    "Outils connectés dans un écosystème cohérent",
    "Connaissances accessibles aux équipes",
    "Temps libéré pour les missions à forte valeur",
    "Données mieux exploitées pour décider",
    "Entreprise capable de se développer plus efficacement"
  ]
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                <p className="text-gray-300 text-sm">
                  {problem.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold gradient-text mb-2">
              L'IA doit résoudre vos problèmes, pas en créer de nouveaux.
            </p>

            <p className="text-gray-400 text-sm mb-8">
              Nous identifions les automatisations qui apportent un réel gain opérationnel à votre entreprise.
            </p>

            <a
              href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2"
            >
              <span>Réserver mon audit gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-gray-500 text-sm mt-3">
              ✓ Gratuit · ✓ Sans engagement · ✓ Diagnostic concret
            </p>
          </div>
        </motion.div>
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
            <span className="gradient-text">
              Mes Services
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            J'accompagne les entreprises dans l'intégration de solutions IA
            concrètes pour automatiser leurs opérations et améliorer leur efficacité.
          </motion.p>
        </div>


        {/* Cartes services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">


          {/* Service principal IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 service-card rounded-xl p-8 border-primary/50 bg-primary/5 ring-1 ring-primary/30 flex flex-col"
          >

            <div className="mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                ⭐ Expertise principale
              </span>
            </div>


            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <Bot className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-semibold">
                Intégration IA & Automatisation
              </h3>
            </div>


            <p className="text-gray-400 mb-8">
              Je transforme vos processus métiers en workflows intelligents :
              automatisation des tâches répétitives, connexion de vos outils et
              déploiement d'assistants IA adaptés à vos besoins.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-grow">
              {featuresIA.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />

                  <span className="text-sm text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>


            <a
              href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 justify-center"
            >
              <span>
                Identifier mes opportunités IA
              </span>

              <ArrowRight className="w-4 h-4" />
            </a>

          </motion.div>



          {/* Service complémentaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="service-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col"
          >

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Code className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold">
                Développement sur mesure
              </h3>
            </div>


            <p className="text-gray-400 mb-6 text-sm flex-grow">
              Lorsque vos besoins nécessitent un outil spécifique,
              je développe des applications web adaptées à votre activité
              et pensées pour s'intégrer dans votre écosystème numérique.
            </p>


            <div className="flex items-center gap-2 mt-auto">
              <Users className="w-4 h-4 text-primary flex-shrink-0" />

              <p className="text-sm text-gray-500">
                Un complément technique au service de vos projets IA.
              </p>
            </div>


            <a
              href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
            >
              <span>
                Parlons de votre besoin
              </span>

              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

          </motion.div>

        </div>
                {/* Process d'accompagnement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Une approche orientée résultats
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="service-card p-8 rounded-xl hover:border-primary/30 transition-all duration-300 text-center"
              >

                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>


                <div className="text-xs font-semibold text-primary mb-2">
                  Étape {step.number}
                </div>


                <h3 className="text-lg font-semibold mb-4">
                  {step.title}
                </h3>


                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

              </motion.div>
            ))}

          </div>
        </motion.div>



        {/* Avant / Après */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Votre entreprise avant et après l'automatisation
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* Avant */}
            <div className="service-card p-8 rounded-xl border-red-500/20 bg-red-500/5">

              <h3 className="text-lg font-semibold text-red-400 mb-6">
                Avant l'intégration IA
              </h3>


              <div className="space-y-4">

                {beforeAfter.before.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >

                    <X
                      className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"
                    />

                    <span className="text-sm text-gray-300">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>



            {/* Après */}
            <div className="service-card p-8 rounded-xl border-primary/30 bg-primary/5">

              <h3 className="text-lg font-semibold text-primary mb-6">
                Après l'intégration IA
              </h3>


              <div className="space-y-4">

                {beforeAfter.after.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >

                    <Check
                      className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                    />

                    <span className="text-sm text-gray-300">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>


          </div>

        </motion.div>
              </div>
    </section>
  );
};

export default Services;