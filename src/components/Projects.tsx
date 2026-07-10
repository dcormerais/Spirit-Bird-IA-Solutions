import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star, Zap, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Gestion de stock automatisée',
    type: 'automation',
    badge: '⭐ Workflow Complet',
    problem: "Vérifier manuellement les niveaux de stock, identifier ce qui manque, rédiger les mêmes emails aux fournisseurs encore et encore : du temps perdu et une source d'erreurs coûteuses.",
    solution: "Un workflow n8n surveille l'inventaire en continu, envoie un résumé avec bouton d'approbation, puis rédige et envoie automatiquement les emails aux bons fournisseurs. L'humain garde le contrôle, sans le travail répétitif.",
    result: "Suppression totale de la saisie manuelle. Les commandes de réapprovisionnement sont préparées et envoyées automatiquement, avec validation en un clic.",
    image: '/Images/Workflow_N8N.png',
    technologies: ['n8n', 'OpenAI', 'Google Sheets', 'Gmail API']
  },
  {
    title: 'Rendez-vous Sans Frontières',
    type: 'web',
    badge: null,
    problem: "Une agence de voyages immersifs au Maroc avait besoin d'un site qui traduisse l'authenticité des expériences proposées, avec des performances techniques irréprochables.",
    solution: "Site web conçu avec un design épuré et performant : temps de chargement inférieur à 1s, score mobile 98/100 Lighthouse, navigation intuitive en 3 clics maximum.",
    result: "Un site qui donne envie de partir dès la première seconde, avec une adaptation parfaite sur tous les écrans et des déploiements Git automatisés.",
    image: '/Images/rdvsf3.jpg',
    link: 'https://rendez-vous-sans-frontieres.fr/',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Netlify']
  },
  {
    title: 'MyMental',
    type: 'mobile',
    badge: null,
    problem: "Accompagner les utilisateurs dans un parcours de santé globale (méditation, entraînements, interactions sociales) avec une expérience technique fluide et fiable.",
    solution: "Application mobile React Native avec synchronisation temps réel, cache intelligent hors-ligne et transitions personnalisées pour une expérience native sur iOS et Android.",
    result: "Une interface fluide et intuitive, des notifications contextuelles et une gestion d'état avancée qui rendent le parcours utilisateur seamless.",
    images: [
      '/Images/mymental.jpg',
      '/Images/mymental2.jpg'
    ],
    technologies: ['React Native', 'Node.js', 'WebSocket']
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projets" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Star className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Mes <span className="gradient-text">Réalisations</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des problèmes métier réels, des solutions IA concrètes, des résultats mesurables.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`service-card rounded-xl bg-dark/40 flex flex-col hover:border-primary/20 transition-all duration-300 ${
                project.type === 'automation' ? 'border-primary/30 bg-primary/5' : ''
              }`}
            >
              {/* Image */}
              {'images' in project && project.images && project.images.length > 0 ? (
                <div className="relative bg-black rounded-t-xl overflow-hidden flex justify-center items-center gap-4 p-4 h-[400px]">
                  {project.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`${project.title} - Vue ${i + 1}`}
                      className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              ) : (
                <div className="relative h-[350px] bg-dark/60 rounded-t-xl overflow-hidden">
                  <img
                    src={'image' in project ? project.image : ''}
                    alt={project.title}
                    className="w-full h-full object-scale-down hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Contenu */}
              <div className="flex-grow flex flex-col p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      {project.badge && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    {'link' in project && project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors hover:scale-110 transform duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Problème / Solution / Résultat */}
                <div className="flex-grow space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Problème métier</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Solution IA</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">Résultat obtenu</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-white/10">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">
            Chaque projet commence par une conversation. Dites-moi ce qui vous prend du temps et on voit ce qu'on peut automatiser.
          </p>
          <a
            href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            <span>Réserver un audit IA</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
