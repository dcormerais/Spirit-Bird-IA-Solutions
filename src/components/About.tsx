import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Globe, Clock } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const stats = [
  { value: '5+', label: "Années d'expérience", icon: Clock },
  { value: '3', label: 'Expertises combinées', icon: Brain },
  { value: '100%', label: 'Remote, France & international', icon: Globe },
  { value: '2-6', label: 'Semaines de mise en production', icon: Zap }
];

const tools = [
  "Make", "n8n", "Zapier", "LangChain",
  "OpenAI API", "Agents IA", "Webhooks", "API REST"
];

const approche = [
  {
    title: "Le problème d'abord",
    description: "Chaque mission commence par une analyse de vos process réels. Pas de solution cherchant un problème."
  },
  {
    title: "Vos outils existants",
    description: "On connecte ce que vous avez déjà. CRM, email, Notion, Airtable... pas besoin de tout réinventer."
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
              className="space-y-8"
            >
              {/* Photo + nom */}
              <div className="flex items-center gap-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 mt-12 flex-shrink-0">
                  <img
                    src="/Images/dodo.jpg"
                    alt="Dorian Cormerais"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-2 ring-primary/10 rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    Dorian <span className="gradient-text">Cormerais</span>
                  </h2>
                  <p className="text-gray-400">
                    Ingénieur IA et Développeur Full Stack
                  </p>
                </div>
              </div>

              {/* Texte de présentation */}
              <div className="space-y-4 text-gray-300">
                <p>
                  Mon parcours ne ressemble pas à celui d'un ingénieur classique.
                  Avant de coder des systèmes d'automatisation, j'ai vendu, négocié,
                  piloté des campagnes marketing et analysé des données pour des entreprises très différentes.
                </p>
                <p>
                  Ce que ça m'a appris : la plupart des problèmes qu'on croit techniques
                  sont en réalité des problèmes d'organisation. Et la technologie,
                  quand elle est bien utilisée, les résout silencieusement.
                </p>
                <p>
                  C'est avec cette conviction que j'ai fondé{' '}
                  <span className="text-primary font-semibold">Spirit Bird IA Solutions</span>.
                  Une structure légère, orientée résultats, qui part toujours
                  du terrain avant de parler d'outils.
                </p>
                <p className="text-primary font-medium">
                  Business et technique dans le même cerveau. C'est ce qui change tout
                  quand on conçoit une automatisation qui doit vraiment fonctionner.
                </p>
              </div>

              {/* Outils IA */}
              <div className="service-card p-6 rounded-xl border-primary/30 bg-primary/5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Outils et technologies IA
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{tool}</span>
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
              className="space-y-8"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="service-card p-6 rounded-xl text-center hover:border-primary/20 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

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

              {/* CTA */}
              <a
                href="https://calendly.com/dorian-cormerais/30min"
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