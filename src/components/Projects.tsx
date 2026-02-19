import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star, Globe, Smartphone, Bot, Zap, BarChart2, Clock } from 'lucide-react';

const projects = [
  {
    title: 'Agent IA Polyvalent',
    type: 'automation',
    badge: '⭐ Workflow Complet',
    description:
      "Un agent IA central orchestre toutes les fonctions clés de l’entreprise — Sales, Marketing, RH, Finance, Support, Operations — en automatisant les tâches répétitives et en libérant jusqu’à 15h par semaine pour les équipes.",
    image: '/Images/n8n-agent-polyvalent.png',
    duration: '2 à 4 semaines',
    price: '2999€',
    maintenance: '499€ HT/mois',
    results: [
      { label: 'Temps récupéré', value: '15h/semaine' },
      { label: 'Relances automatisées', value: '100%' },
      { label: 'Reporting', value: '-90% manuel' },
      { label: 'ROI estimé', value: '+400%' }
    ],
    technicalHighlights: [
      'Agent IA central n8n + GPT-4o',
      'Gestion emails Gmail automatisée',
      'Calendrier Google synchronisé',
      'Base contacts Airtable connectée'
    ],
    userExperience: [
      'Interface Telegram pour l\'équipe',
      'Commandes en langage naturel',
      'Réponses instantanées 24/7',
      'Zéro formation technique requise'
    ],
    technologies: ['n8n', 'GPT-4o', 'Gmail API', 'Google Calendar', 'Airtable', 'Supabase'],
    infrastructure: [
      'Webhooks sécurisés',
      'Mémoire conversationnelle',
      'Gestion des erreurs auto',
      'Monitoring temps réel'
    ]
  },
  {
    title: 'Rendez-vous Sans Frontières',
    type: 'web',
    badge: null,
    description:
      "Un site web performant et élégant conçu pour une agence spécialisée dans les voyages immersifs au Maroc. Alliant rigueur technique et esthétique épurée, la plateforme reflète l'authenticité des expériences proposées : découvertes culturelles et rencontres locales.",
    image: '/Images/rdvsf3.jpg',
    link: 'https://rendez-vous-sans-frontieres.fr/',
    duration: '6 jours',
    price: '1800€',
    results: null,
    technicalHighlights: [
      'Design percutant avec palette sophistiquée',
      'Temps de chargement < 1s (Netlify Edge)',
      'Score mobile 98/100 Lighthouse',
      'Protection DDoS intégrée'
    ],
    userExperience: [
      'Micro-animations fluides',
      'Navigation intuitive (max 3 clics)',
      'Adaptation parfaite tous écrans',
      'Formulaire intelligent temps réel'
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Supabase'],
    infrastructure: [
      'Déploiements Git automatisés',
      'SSL auto-renouvelé',
      'Analytics GA4 intégré',
      'Versionning 30 jours'
    ]
  },
  {
    title: 'MyMental',
    type: 'mobile',
    badge: null,
    description:
      "Application mobile alliant sophistication technique et approche holistique, conçue pour accompagner les utilisateurs dans un parcours personnalisé de santé globale : méditation guidée, entraînements sportifs adaptés et interactions sociales engagées.",
    images: [
      '/Images/mymental.jpg',
      '/Images/mymental2.jpg'
    ],
    duration: '12 jours',
    price: '3600€',
    results: null,
    technicalHighlights: [
      'Architecture React Native optimisée',
      'Synchronisation temps réel',
      'Cache intelligent hors-ligne',
      'Performances natives iOS/Android'
    ],
    userExperience: [
      'Interface utilisateur fluide',
      'Transitions personnalisées',
      'Gestion état avancée',
      'Notifications contextuelles'
    ],
    technologies: ['React Native', 'Node.js', 'Supabase', 'WebSocket'],
    infrastructure: [
      'CI/CD multi-plateforme',
      'Analytics cross-device',
      'Monitoring temps réel',
      'Sécurité renforcée'
    ]
  }
];

const features = [
  {
    icon: Bot,
    title: "Automatisation IA",
    description: "Workflows intelligents sur-mesure",
    color: "text-pink-400"
  },
  {
    icon: Globe,
    title: "Sites Web Modernes",
    description: "Design responsive et performant",
    color: "text-blue-400"
  },
  {
    icon: Smartphone,
    title: "Apps Web & Mobile",
    description: "Applications sur mesure",
    color: "text-purple-400"
  },
  {
    icon: BarChart2,
    title: "Résultats Mesurables",
    description: "ROI concret et chiffré",
    color: "text-green-400"
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
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nos Dernières<span className="gradient-text"> Réalisations</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Automatisation IA, sites web et applications — des projets concrets avec des résultats mesurables
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="service-card p-4 rounded-xl text-center h-[120px] flex flex-col items-center justify-center hover:bg-white/5"
              >
                <feature.icon className={`w-6 h-6 ${feature.color} mb-2`} />
                <h3 className="text-sm font-medium mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
              {/* Visual Section */}
              <div className="relative h-[300px] bg-dark/60 rounded-t-xl overflow-hidden">
                {project.type === 'automation' ? (
                  <div className="relative h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-6">
                      <div className="flex flex-wrap gap-2">
                        {['Email', 'Calendrier', 'Contacts', 'Finance', 'Reporting'].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-primary/80 text-dark font-semibold"
                          >
                            {tag} ✓
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : 'images' in project && project.images?.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {project.images.map((image, i) => (
                      <div key={i} className="relative w-full aspect-[16/9]">
                        <img
                          src={image}
                          alt={`${project.title} - Vue ${i + 1}`}
                          className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative w-full aspect-[16/9]">
                    <img
                      src={project.image!}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-t-xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>

              {/* Content Section */}
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
                    {'link' in project && project.link && project.link && (
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

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-primary">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{project.duration}</span>
                    </div>
                    <div className="text-primary">
                      <span className="font-semibold">{project.price}</span>
                      {project.maintenance && (
                        <span className="text-gray-400"> / {project.maintenance}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-4">Excellence Technique</h4>
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
                    <h4 className="text-sm font-semibold text-primary mb-4">Expérience Utilisateur</h4>
                    <div className="space-y-2">
                      {project.userExperience.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-4">Infrastructure</h4>
                    <div className="space-y-2">
                      {project.infrastructure.map((feature, i) => (
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
            Chaque projet est unique. Commencez par un audit gratuit pour découvrir ce qu'on peut automatiser chez vous.
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