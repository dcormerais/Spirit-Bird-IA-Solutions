import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Gestion de stock automatisée',
    type: 'automation',
    badge: '⭐ Workflow Complet',
    description:
      "Vérifier manuellement les niveaux de stock, identifier ce qui manque, rédiger les mêmes emails aux fournisseurs encore et encore... c'est du temps perdu et une source d'erreurs coûteuses. Ce workflow n8n surveille votre inventaire en continu, vous envoie un résumé avec bouton d'approbation, puis rédige et envoie automatiquement les emails aux bons fournisseurs. Vous gardez le contrôle, sans le travail répétitif.",
    image: '/Images/Workflow_N8N.png',
    technicalHighlights: [
      'Déclencheur planifié toutes les X heures',
      'Lecture Google Sheets en temps réel',
      'Filtrage automatique des stocks bas',
      'Agent IA pour rédaction des emails'
    ],
    userExperience: [
      "Étape d'approbation par email en 1 clic",
      'Emails fournisseurs personnalisés par IA',
      'Zéro saisie manuelle',
      'Historique des actions automatisé'
    ],
    technologies: ['n8n', 'OpenAI', 'Google Sheets', 'Gmail API']
  },
  {
    title: 'Rendez-vous Sans Frontières',
    type: 'web',
    badge: null,
    description:
      "Site web conçu pour une agence spécialisée dans les voyages immersifs au Maroc. L'enjeu : traduire l'authenticité des expériences proposées dans un design épuré et performant, qui donne envie de partir dès la première seconde.",
    image: '/Images/rdvsf3.jpg',
    link: 'https://rendez-vous-sans-frontieres.fr/',
    technicalHighlights: [
      'Temps de chargement inférieur à 1s',
      'Score mobile 98/100 Lighthouse',
      'Protection DDoS intégrée',
      'Déploiements Git automatisés'
    ],
    userExperience: [
      'Micro-animations fluides',
      'Navigation intuitive en 3 clics maximum',
      'Formulaire intelligent en temps réel',
      'Adaptation parfaite tous écrans'
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Netlify']
  },
  {
    title: 'MyMental',
    type: 'mobile',
    badge: null,
    description:
      "Application mobile pensée pour accompagner les utilisateurs dans un parcours de santé globale : méditation guidée, entraînements adaptés et interactions sociales. Un projet technique exigeant, mêlant synchronisation temps réel et expérience utilisateur soignée.",
    images: [
      '/Images/mymental.jpg',
      '/Images/mymental2.jpg'
    ],
    technicalHighlights: [
      'Architecture React Native optimisée',
      'Synchronisation temps réel',
      'Cache intelligent hors-ligne',
      'Performances natives iOS et Android'
    ],
    userExperience: [
      'Interface fluide et intuitive',
      'Transitions personnalisées',
      'Notifications contextuelles',
      "Gestion d'état avancée"
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
            Des projets concrets, des problèmes réels, des solutions qui fonctionnent.
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
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-4">Points techniques</h4>
                    <div className="space-y-2">
                      {project.technicalHighlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-4">Expérience utilisateur</h4>
                    <div className="space-y-2">
                      {project.userExperience.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 mt-8 border-t border-white/10">
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
            href="https://calendly.com/dorian-cormerais/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            <span>Réserver mon audit gratuit</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
