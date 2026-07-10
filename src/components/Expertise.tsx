import React from 'react';
import { motion } from 'framer-motion';
import { Search, Workflow, Bot, Plug, GraduationCap, ArrowRight } from 'lucide-react';

const expertiseBlocks = [
  {
    icon: Search,
    title: "Audit IA",
    description: "Identifier les processus où l'intelligence artificielle peut réellement créer de la valeur.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Workflow,
    title: "Automatisation intelligente",
    description: "Créer des workflows capables d'exécuter automatiquement des tâches répétitives.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Bot,
    title: "Agents IA",
    description: "Concevoir des assistants et agents capables d'interagir avec vos outils métiers.",
    color: "from-teal-500 to-emerald-500"
  },
  {
    icon: Plug,
    title: "Intégration système",
    description: "Connecter CRM, emails, bases de données et applications existantes.",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: GraduationCap,
    title: "Formation & adoption",
    description: "Permettre aux équipes d'utiliser efficacement les nouveaux outils.",
    color: "from-green-500 to-lime-500"
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 relative">
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
              <Workflow className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            De l'idée IA au <span className="gradient-text">déploiement opérationnel</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cinq étapes pour transformer l'intelligence artificielle en solutions concrètes, intégrées et adoptées par les équipes.
          </motion.p>
        </div>

        {/* Blocs d'expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`service-card p-8 rounded-xl hover:border-primary/30 transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${block.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-dark/80 flex items-center justify-center">
                    <block.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <div className="text-xs font-semibold text-primary mb-2">Étape {index + 1}</div>
              <h3 className="text-lg font-semibold mb-3">{block.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{block.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            <span>Découvrir comment cela s'applique à votre entreprise</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Expertise;
