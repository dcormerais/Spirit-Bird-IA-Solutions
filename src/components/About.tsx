import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, BrainCircuit, Plug, Database } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const techCategories = [
  {
    icon: Zap,
    name: "Automatisation",
    tools: ["n8n", "Make", "Zapier"]
  },
  {
    icon: BrainCircuit,
    name: "IA générative",
    tools: ["OpenAI API", "Claude / Anthropic", "Agents IA", "LangChain"]
  },
  {
    icon: Plug,
    name: "Intégration",
    tools: ["API REST", "Webhooks", "OAuth", "Gmail API", "Twilio"]
  },
  {
    icon: Database,
    name: "Données",
    tools: ["Supabase", "PostgreSQL", "MongoDB", "Airtable"]
  }
];

const approche = [
  {
    title: "Le problème d'abord",
    description: "Chaque mission commence par une analyse de vos process réels."
  },
  {
    title: "Vos outils existants",
    description: "On connecte vos outils existants (CRM, email, Notion, Airtable, Slack)."
  },
  {
    title: "Vous restez autonomes",
    description: "Chaque livraison s'accompagne d'une documentation claire. Vous pilotez, je construis."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection offset={20}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Colonne gauche */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Photo + nom */}
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                  <img
                    src="/Images/dorian.jpg"
                    alt="Dorian Cormerais"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-2 ring-primary/10 rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-1">
                    Dorian <span className="gradient-text">Cormerais</span>
                  </h2>
                  <p className="text-gray-400">
                    Consultant intégrateur IA
                  </p>
                </div>
              </div>

              {/* Titre de l'approche hybride */}
              <h3 className="text-2xl font-bold leading-tight">
                Une approche hybride entre{' '}
                <span className="gradient-text">métier, data et technologie</span>
              </h3>

              {/* Texte de présentation */}
              <div className="space-y-4 text-gray-300">
                <p>
                  Mon parcours combine trois dimensions rarement réunies : compréhension business, expertise data et capacité technique.
                </p>
                <p>
                  Avant de concevoir des systèmes d'automatisation IA, j'ai travaillé sur des problématiques commerciales, marketing et de développement.
                </p>
                <p>
                  Cette vision me permet d'aborder l'IA différemment : comprendre le problème terrain avant de choisir la technologie.
                </p>
                <div className="border-l-2 border-primary pl-4 mt-2 space-y-2">
                  <p className="text-white font-semibold">
                    Votre métier, je le comprends.
                  </p>
                  <p className="text-primary font-medium">
                    Votre solution, je la construis.
                  </p>
                </div>
              </div>

              {/* Technologies au service des usages métier */}
              <div className="service-card p-6 rounded-xl border-primary/30 bg-primary/5">
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Les technologies au service des usages métier
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  Une stack choisie pour résoudre des problèmes, pas pour faire illusion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {techCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                          <category.icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-white">{category.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-9">
                        {category.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Colonne droite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:pt-0"
            >
              {/* Approche */}
              <div className="service-card p-6 rounded-xl hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6">Comment je travaille</h3>
                <div className="space-y-6">
                  {approche.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats / chiffres clés */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5+", label: "ans d'expérience terrain" },
                  { value: "20+", label: "projets livrés" },
                  { value: "100%", label: "orienté résultats" },
                ].map((stat, index) => (
                  <div key={index} className="service-card p-4 rounded-xl text-center bg-primary/5 border-primary/20">
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 w-full justify-center"
              >
                <span>Réserver un audit IA</span>
                <Zap className="w-4 h-4" />
              </a>
              <p className="text-gray-500 text-sm text-center -mt-4">
                ✓ Gratuit · ✓ Sans engagement · ✓ Diagnostic concret
              </p>
            </motion.div>

          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default About;
