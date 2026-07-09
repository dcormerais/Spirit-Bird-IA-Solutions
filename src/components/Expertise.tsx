import React from 'react';
import { motion } from 'framer-motion';
import { Search, Workflow, Bot, Plug, GraduationCap, ArrowRight } from 'lucide-react';

const expertiseBlocks = [
  {
    icon: Search,
    title: 'Audit IA',
    description: "Identifier les processus où l'intelligence artificielle peut réellement créer de la valeur.",
    span: 'lg:col-span-2'
  },
  {
    icon: Workflow,
    title: 'Automatisation intelligente',
    description: "Créer des workflows capables d'exécuter automatiquement les tâches répétitives et de libérer du temps aux équipes."
  },
  {
    icon: Bot,
    title: 'Agents IA',
    description: "Concevoir des assistants capables d'interagir avec vos outils et de soutenir vos processus métier."
  },
  {
    icon: Plug,
    title: 'Intégration système',
    description: "Connecter CRM, emails, bases de données et applications existantes."
  },
  {
    icon: GraduationCap,
    title: 'Formation et adoption',
    description: "Accompagner les équipes pour intégrer durablement l'intelligence artificielle dans leur quotidien.",
    span: 'lg:col-span-2'
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre */}
        <div className="text-center mb-16">
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
            Une expertise complète, de l'identification des opportunités jusqu'à l'adoption par vos équipes.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {expertiseBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`service-card p-8 rounded-xl hover:border-primary/30 transition-all duration-300 flex flex-col ${block.span || ''}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <block.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{block.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{block.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Principe directeur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            <span className="text-white font-semibold">La technologie ne vaut que si elle résout un problème métier réel.</span>
          </p>
          <a
            href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2"
          >
            <span>Réserver un audit IA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Expertise;
