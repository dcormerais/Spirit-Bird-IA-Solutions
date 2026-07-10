import React from 'react';
import { motion } from 'framer-motion';
import { Search, Workflow, BrainCircuit, Plug, GraduationCap, ArrowRight } from 'lucide-react';

const expertiseBlocks = [
  {
    icon: Search,
    title: 'Audit IA',
    description: "Identifier les processus où l'intelligence artificielle peut réellement créer de la valeur.",
    detail: "Cartographie des processus, analyse des irritants et priorisation des cas d'usage IA."
  },
  {
    icon: Workflow,
    title: 'Automatisation intelligente',
    description: "Créer des workflows capables d'exécuter automatiquement des tâches répétitives.",
    detail: "Connexion des outils, orchestration des étapes et suppression des tâches sans valeur ajoutée."
  },
  {
    icon: BrainCircuit,
    title: 'Agents IA',
    description: "Concevoir des assistants et agents capables d'interagir avec vos outils métiers.",
    detail: "Agents autonomes pour le traitement des emails, la qualification de leads, le support et le reporting."
  },
  {
    icon: Plug,
    title: 'Intégration système',
    description: "Connecter CRM, emails, bases de données et applications existantes.",
    detail: "API, webhooks et intégrations sur-mesure pour faire communiquer toute votre stack."
  },
  {
    icon: GraduationCap,
    title: 'Formation & adoption',
    description: "Permettre aux équipes d'utiliser efficacement les nouveaux outils.",
    detail: "Documentation, formation et accompagnement pour garantir une adoption durable."
  },
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
              <BrainCircuit className="w-8 h-8 text-primary" />
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
            Une expertise complète, de l'identification des opportunités jusqu'à l'adoption par les équipes.
          </motion.p>
        </div>

        {/* Blocs d'expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {expertiseBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`service-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <block.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{block.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">{block.description}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{block.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Ligne de séparation - principe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-card rounded-xl p-8 max-w-3xl mx-auto text-center"
        >
          <p className="text-white font-semibold text-lg mb-2">
            La technologie ne vaut que si elle résout un problème métier réel.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            Chaque intervention commence par identifier ce problème. Le reste en découle naturellement.
          </p>
          <a
            href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-300"
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
