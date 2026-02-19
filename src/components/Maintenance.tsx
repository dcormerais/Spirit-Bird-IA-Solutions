import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Bot, Zap, Clock, BarChart, Lock, Brain, Target, Search, Code, Sparkles, CheckCircle2, Cloud, Mail, Phone, FileText, Users } from 'lucide-react';
import IntersectionObserver from './IntersectionObserver';

const maintenancePlans = [
  {
    title: "Pack Essentiel",
    price: "25€",
    period: "HT/mois",
    description: "Parfait pour démarrer simplement et assurer le minimum indispensable",
    features: [
      {
        title: "Hébergement sécurisé cloud",
        description: "Serveurs sécurisés avec chiffrement avancé"
      },
      {
        title: "Maintenance technique basique",
        description: "Surveillance des fonctionnalités essentielles"
      },
      {
        title: "Sauvegardes automatiques mensuelles",
        description: "Protection des données essentielles"
      },
      {
        title: "Sécurité proactive",
        description: "Surveillance régulière des vulnérabilités"
      },
      {
        title: "Support par email",
        description: "Assistance technique sous 72h"
      }
    ],
    whyChoose: {
      title: "Pourquoi choisir ce pack ?",
      description: "Ce pack garantit une sécurité minimale nécessaire au maintien en ligne de votre site, tout en restant extrêmement abordable pour les entreprises et indépendants.",
      benefits: [
        "Sécurité minimale garantie",
        "Solution très abordable",
        "Support technique inclus",
        "Protection des données"
      ]
    },
    icon: Shield,
    badge: "Solution Essentielle",
    recommended: false
  },
  {
    title: "Pack Confort",
    price: "50€",
    period: "HT/mois",
    description: "Idéal pour les entreprises souhaitant optimiser leur visibilité locale et bénéficier de conseils ponctuels",
    features: [
      {
        title: "Tous les services du Pack Essentiel",
        description: "Inclut toutes les fonctionnalités de base"
      },
      {
        title: "Optimisation Fiche Google",
        description: "Amélioration du référencement local"
      },
      {
        title: "Modifications mensuelles",
        description: "Jusqu'à 3 demandes par mois"
      },
      {
        title: "Conseils digitaux ponctuels",
        description: "Recommandations ciblées mensuelles"
      },
      {
        title: "Support technique",
        description: "Assistance par email sous 72h"
      }
    ],
    whyChoose: {
      title: "Pourquoi choisir ce pack ?",
      description: "Ce pack assure une visibilité locale optimisée avec un soutien stratégique ponctuel, idéal pour renforcer progressivement votre présence en ligne.",
      benefits: [
        "Visibilité locale optimisée",
        "Modifications régulières",
        "Conseils stratégiques",
        "Support réactif"
      ]
    },
    icon: Target,
    badge: "Solution Recommandée",
    recommended: true
  },
  {
    title: "Pack Expert",
    price: "150€",
    period: "HT/mois",
    description: "Un véritable accompagnement stratégique régulier pour accélérer significativement votre croissance en ligne",
    features: [
      {
        title: "Tous les services du Pack Confort",
        description: "Inclut toutes les fonctionnalités avancées"
      },
      {
        title: "Gestion avancée des modifications",
        description: "Jusqu'à 10 demandes mensuelles"
      },
      {
        title: "Conseils stratégiques approfondis",
        description: "Suivi personnalisé et continu"
      },
      {
        title: "Audit stratégique trimestriel",
        description: "Analyse complète et recommandations"
      },
      {
        title: "Support prioritaire",
        description: "Assistance garantie sous 24h"
      }
    ],
    whyChoose: {
      title: "Pourquoi choisir ce pack ?",
      description: "Le Pack Expert est conçu pour les entreprises ambitieuses recherchant un partenariat stratégique solide et continu pour atteindre leurs objectifs digitaux et assurer une croissance durable.",
      benefits: [
        "Accompagnement complet",
        "Stratégie personnalisée",
        "Support premium",
        "Croissance optimisée"
      ]
    },
    icon: Brain,
    badge: "Solution Premium",
    recommended: false
  }
];

const benefits = [
  {
    icon: Cloud,
    title: "Hébergement Sécurisé",
    description: "Infrastructure cloud haute performance avec chiffrement avancé"
  },
  {
    icon: Shield,
    title: "Protection Maximale",
    description: "Sécurité proactive et conformité RGPD garantie"
  },
  {
    icon: Users,
    title: "Support Dédié",
    description: "Équipe technique expérimentée à votre service"
  }
];

const Maintenance = () => {
  return (
    <section id="maintenance" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IntersectionObserver>
          <div className="text-center mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <motion.h2 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Packs de Maintenance & Accompagnement Stratégique
            </motion.h2>

            <motion.div 
              className="max-w-3xl mx-auto space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                La souscription à un pack de maintenance est indispensable afin d'assurer la stabilité, 
                la sécurité et l'hébergement optimal de votre site web. Nos offres sont pensées pour 
                couvrir tous les besoins essentiels liés à l'hébergement sécurisé de votre site, aux 
                sauvegardes régulières et à la protection des données.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              <div className="badge-premium inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-sm border border-blue-500/20">
                <Lock className="w-4 h-4 mr-2 text-blue-400" />
                Sécurité garantie
              </div>
              <div className="badge-premium inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-sm border border-blue-500/20">
                <Cloud className="w-4 h-4 mr-2 text-blue-400" />
                Cloud sécurisé
              </div>
            </motion.div>
          </div>
        </IntersectionObserver>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {maintenancePlans.map((plan, index) => (
            <IntersectionObserver key={plan.title} threshold={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 h-full flex flex-col ${
                  plan.recommended ? 'border-primary/30 shadow-xl shadow-primary/10' : 'border-gray-800'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-4 right-6 px-4 py-2 rounded-full text-xs ${
                    plan.recommended ? 'bg-gradient-to-r from-primary to-blue-500 text-dark font-medium' : 'bg-gray-800'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${
                    plan.recommended ? 'bg-primary/10 border border-primary/20' : 'bg-gray-800'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.recommended ? 'text-primary' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${
                        plan.recommended ? 'bg-primary/10' : 'bg-gray-800'
                      } flex items-center justify-center flex-shrink-0 mt-1`}>
                        <div className={`w-2 h-2 rounded-full ${
                          plan.recommended ? 'bg-primary' : 'bg-gray-400'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium">{feature.title}</p>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-8 p-6 rounded-xl ${
                  plan.recommended ? 'bg-primary/5 border border-primary/10' : 'bg-gray-800/50'
                }`}>
                  <h4 className="text-lg font-semibold mb-3">{plan.whyChoose.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{plan.whyChoose.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {plan.whyChoose.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                          plan.recommended ? 'text-primary' : 'text-gray-400'
                        }`} />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full mt-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 group transition-all ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-primary to-blue-500 text-dark hover:opacity-90'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}>
                  Choisir ce pack
                  <Zap className="w-4 h-4" />
                </button>
              </motion.div>
            </IntersectionObserver>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="service-card p-6 rounded-xl text-center h-full flex flex-col justify-between"
            >
              <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">Pourquoi souscrire à nos packs ?</h3>
          <p className="text-gray-400 leading-relaxed">
            Ces packs garantissent non seulement la sécurité et la stabilité technique obligatoires 
            pour toute présence en ligne sérieuse, mais offrent également des outils et conseils 
            essentiels à une croissance maîtrisée et ambitieuse. Notre approche complète, sécurisée 
            et innovante vous permet de vous concentrer sur votre cœur d'activité tout en maximisant 
            votre impact digital.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Maintenance;