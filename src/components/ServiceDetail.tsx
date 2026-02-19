import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ArrowRight, Star, Code, Shield, Zap, Brain, Layout, Users, Clock, Globe, Bot, Smartphone, CalendarCheck } from 'lucide-react';

const serviceCategories = [
  {
    icon: Bot,
    route: '/services/automation',
    title: "Automatisation & IA",
    description: "Libérez vos équipes des tâches répétitives. On automatise vos workflows en 1 à 2 semaines.",
    services: [
      {
        title: "Automatisation Workflow",
        price: "à partir de 999€",
        description: "Automatisation de vos processus métier avec l'IA — relances, reporting, saisie de données, onboarding.",
        features: [
          "Workflows sur-mesure",
          "Connexion de vos outils existants",
          "Relances automatiques",
          "Reporting automatisé",
          "Intégrations Make / n8n / Zapier",
          "Formation équipes incluse"
        ],
        techSpecs: {
          frontend: "Interfaces React.js, dashboards",
          backend: "n8n, Make, Zapier, Node.js",
          ai: "Agents IA, GPT-4o, LangChain"
        }
      },
      {
        title: "Agent IA Polyvalent",
        price: "à partir de 2999€",
        description: "Un agent IA central qui gère vos emails, calendrier, contacts et reporting en langage naturel.",
        features: [
          "Gestion emails automatique",
          "Synchronisation calendrier",
          "Base contacts intelligente",
          "Reporting financier auto",
          "Interface Telegram / Slack",
          "Mémoire conversationnelle"
        ],
        techSpecs: {
          frontend: "Interface conversationnelle",
          backend: "n8n, Supabase, Airtable",
          ai: "GPT-4o, Agents IA, RAG"
        }
      }
    ]
  },
  {
    icon: Globe,
    route: '/services/web',
    title: "Sites Web & Applications",
    description: "Sites vitrines, applications web et solutions e-commerce sur-mesure.",
    services: [
      {
        title: "Site Vitrine",
        price: "à partir de 1200€",
        description: "Site web professionnel optimisé pour convertir vos visiteurs en clients",
        features: [
          "Design sur mesure",
          "Responsive design",
          "Formulaire de contact",
          "Optimisation SEO",
          "Analytics intégré",
          "SSL & hébergement"
        ],
        techSpecs: {
          frontend: "React.js, Tailwind CSS",
          backend: "Node.js, Express",
          ai: "Recommandations personnalisées"
        }
      },
      {
        title: "Application Web",
        price: "à partir de 2100€",
        description: "Application web complète avec fonctionnalités avancées",
        features: [
          "Interface intuitive",
          "Base de données",
          "API REST",
          "Authentification",
          "Temps réel",
          "Dashboard admin"
        ],
        techSpecs: {
          frontend: "React.js, TypeScript",
          backend: "Node.js, PostgreSQL",
          ai: "Automatisation des tâches"
        }
      }
    ]
  },
  {
    icon: Smartphone,
    route: '/services/mobile',
    title: "Applications Mobiles",
    description: "Applications iOS et Android natives ou hybrides, performantes et intuitives.",
    services: [
      {
        title: "Application iOS/Android",
        price: "à partir de 3600€",
        description: "Application mobile native performante et intuitive",
        features: [
          "UI/UX optimisée",
          "Mode hors-ligne",
          "Notifications push",
          "Analytics",
          "iOS & Android",
          "CI/CD automatisé"
        ],
        techSpecs: {
          frontend: "React Native",
          backend: "Node.js, MongoDB",
          ai: "Personnalisation utilisateur"
        }
      },
      {
        title: "Application Hybride",
        price: "à partir de 2400€",
        description: "Application mobile multi-plateforme économique",
        features: [
          "Performance optimisée",
          "Installation rapide",
          "Mises à jour OTA",
          "Support multi-device",
          "Progressive Web App",
          "Push notifications"
        ],
        techSpecs: {
          frontend: "React Native",
          backend: "Node.js, Firebase",
          ai: "Recommandations contextuelles"
        }
      }
    ]
  }
];

const ServiceDetail = () => {
  const { category } = useParams();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceCategory = serviceCategories.find(
    cat => cat.route === `/services/${category}`
  );

  if (!serviceCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service non trouvé</h2>
          <Link to="/" className="text-primary hover:text-primary/80">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <serviceCategory.icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">{serviceCategory.title}</h1>
          </div>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl">{serviceCategory.description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategory.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`service-card p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                  selectedService === service.title ? 'border-primary' : ''
                }`}
                onClick={() => setSelectedService(service.title)}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <div className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {service.price}
                  </div>
                </div>

                <p className="text-gray-400 mb-8">{service.description}</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Ce qui est inclus</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="p-1 rounded-full bg-primary/10">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Stack Technique</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Intelligence Artificielle</p>
                          <p className="text-sm text-gray-400">{service.techSpecs.ai}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Code className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Backend & Automatisation</p>
                          <p className="text-sm text-gray-400">{service.techSpecs.backend}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Layout className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Frontend & Interface</p>
                          <p className="text-sm text-gray-400">{service.techSpecs.frontend}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Inclus dans tous nos projets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Formation Complète</p>
                          <p className="text-sm text-gray-400">Formation sur mesure pour vos équipes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Support inclus</p>
                          <p className="text-sm text-gray-400">Assistance technique dédiée 30 jours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="https://calendly.com/dorian-cormerais/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary px-6 py-3 rounded-full inline-flex items-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Réserver un audit gratuit</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="service-card p-6 rounded-xl hover:border-primary/50 transition-colors"
            >
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sécurité Maximale</h3>
              <p className="text-gray-400">
                Protection des données avancée et conformité RGPD garantie pour
                votre tranquillité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="service-card p-6 rounded-xl hover:border-primary/50 transition-colors"
            >
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Déploiement Rapide</h3>
              <p className="text-gray-400">
                Vos automatisations opérationnelles en 1 à 2 semaines.
                Des résultats visibles dès les premiers jours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="service-card p-6 rounded-xl hover:border-primary/50 transition-colors"
            >
              <Star className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Je pars du problème</h3>
              <p className="text-gray-400">
                Pas de technologie imposée. On part de vos process,
                on identifie les vrais leviers, on déploie ce qui crée de la valeur.
              </p>
            </motion.div>
          </div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 text-center p-10 rounded-2xl border border-primary/20 bg-primary/5"
          >
            <h3 className="text-2xl font-bold mb-4">Pas sûr par où commencer ?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              30 minutes pour analyser vos process, identifier ce qui peut être automatisé
              et vous proposer un plan concret. Gratuit, sans engagement.
            </p>
            <a
              href="https://calendly.com/dorian-cormerais/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary px-10 py-4 rounded-full inline-flex items-center gap-3 text-lg font-semibold hover:scale-105 transform transition-all duration-300"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Réserver mon audit gratuit — 30 min</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-gray-500 text-sm mt-4">✓ 100% gratuit · ✓ Sans engagement · ✓ Résultats concrets</p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;