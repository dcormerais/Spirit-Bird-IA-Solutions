import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const tools = [
  { name: "Make", desc: "automatisation de processus" },
  { name: "n8n", desc: "workflows personnalisés" },
  { name: "Zapier", desc: "connexion d'applications" },
  { name: "LangChain", desc: "intégration IA" },
  { name: "OpenAI API", desc: "solutions IA génératives" },
  { name: "Agents IA", desc: "assistants spécialisés" },
  { name: "Webhooks", desc: "communication entre outils" },
  { name: "API REST", desc: "intégration système" },
];

const approche = [
  {
    title: "Le problème d'abord",
    description: "Chaque mission commence par une analyse de vos processus réels. Pas de technologie imposée : on identifie d'abord les opportunités d'amélioration."
  },
  {
    title: "Vos outils existants",
    description: "Je connecte votre environnement actuel — CRM, email, ERP, Notion, Airtable, Google Sheets, Slack, HubSpot et autres outils métiers — sans repartir de zéro."
  },
  {
    title: "Vous gardez le contrôle",
    description: "Chaque solution est documentée et pensée pour rester compréhensible par vos équipes. Vous pilotez, je construis."
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

              <div className="space-y-4 text-gray-300">
                <p>
                  Mon parcours est hybride : commerce, marketing, data et développement logiciel.
                  Cette expérience me permet d'aborder l'automatisation autrement :
                  non pas comme un simple sujet technique, mais comme un levier d'efficacité opérationnelle.
                </p>

                <p>
                  La plupart des problèmes que l'on croit techniques sont en réalité des problèmes
                  de circulation de l'information, d'organisation ou de tâches répétitives.
                  Mon rôle est d'identifier ces points de friction puis de construire une solution adaptée.
                </p>

                <p>
                  Avec <span className="font-semibold text-white">Spirit Bird IA Solutions</span>,
                  j'accompagne les PME dans l'intégration de solutions IA pragmatiques :
                  automatisations, connexions entre outils et optimisation des processus métiers.
                </p>

                <div className="border-l-2 border-primary pl-4 mt-2 space-y-2">
                  <p className="text-gray-300">
                    Je ne remplace pas vos outils existants. Je les connecte et les améliore
                    pour créer des processus plus efficaces.
                  </p>

                  <p className="text-primary font-medium">
                    Votre métier, je le comprends. Votre solution, je la construis.
                  </p>
                </div>
              </div>

              <div className="service-card p-6 rounded-xl border-primary/30 bg-primary/5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Technologies d'intégration IA
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  Les outils ne sont jamais une fin en soi. Je sélectionne les technologies
                  adaptées à votre environnement et à vos objectifs.
                </p>

                <div className="grid-cols-2 grid gap-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <div>
                        <span className="text-sm text-gray-300 font-medium">
                          {tool.name}
                        </span>
                        <span className="text-xs text-gray-500 ml-1.5">
                          {tool.desc}
                        </span>
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

              <div className="service-card p-6 rounded-xl hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6">
                  Comment je travaille
                </h3>

                <div className="space-y-6">
                  {approche.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {index + 1}
                      </div>

                      <div>
                        <h4 className="font-medium text-white mb-1">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5+", label: "ans d'expérience terrain" },
                  { value: "20+", label: "projets numériques réalisés" },
                  { value: "100%", label: "orienté résultats" },
                ].map((stat, index) => (
                  <div key={index} className="service-card p-4 rounded-xl text-center bg-primary/5 border-primary/20">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>

                    <div className="text-xs text-gray-400 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>


              <a
                href="https://calendly.com/dorian-cormerais/spirit-bird-audit-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 w-full justify-center"
              >
                <span>Réserver mon audit gratuit</span>
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