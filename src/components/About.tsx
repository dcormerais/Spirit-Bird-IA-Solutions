import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Users, Wrench, Globe, Zap, Brain, Bot, Smartphone, Target } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const stats = [
  { value: '5+', label: 'Années d\'expérience', icon: Code },
  { value: '50+', label: 'Projets réalisés', icon: Rocket },
  { value: '100%', label: 'Satisfaction client', icon: Users },
  { value: '24/7', label: 'Support technique', icon: Wrench }
];

const technologies = {
  automation: {
    title: "Automatisation & IA",
    items: [
      "Make (Integromat)", "n8n", "Zapier", "LangChain",
      "OpenAI API", "Agents IA", "Webhooks", "API REST"
    ]
  },
  frontend: {
    title: "Front-End",
    items: [
      "React", "Vue.js", "Angular", "Svelte",
      "Next.js", "Nuxt.js", "Tailwind", "TypeScript"
    ]
  },
  backend: {
    title: "Back-End",
    items: [
      "Node.js", "Python", "Java", "Go",
      "Ruby", "PHP", "C#", "Rust"
    ]
  },
  database: {
    title: "Base de Données & DevOps",
    items: [
      "PostgreSQL", "MongoDB", "Supabase", "Firebase",
      "Docker", "CI/CD", "AWS", "Azure"
    ]
  }
};

const services = [
  {
    icon: Bot,
    title: "Solutions IA",
    description: "Automatisation & workflows intelligents"
  },
  {
    icon: Globe,
    title: "Sites Web",
    description: "Sites vitrines et applications web sur mesure"
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Applications iOS et Android natives"
  },
  {
    icon: Target,
    title: "Marketing",
    description: "Stratégie digitale et optimisation"
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
              <div className="flex items-center gap-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 mt-12">
                  <img
                    src="/Images/dodo.jpg"
                    alt="Dorian"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-2 ring-primary/10 rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    Dorian <span className="gradient-text">Cormerais</span>
                  </h2>
                  <p className="text-gray-400">
                    Ingénieur IA & Développeur Full Stack
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  J'aurais pu rester développeur freelance.
                </p>
                <p>
                  Mais après avoir travaillé dans la vente, le marketing digital, 
                  puis la data et l'IA, j'ai réalisé une chose : la technologie ne 
                  sert à rien si elle ne résout pas un vrai problème terrain.
                </p>
                <p>
                  Alors j'ai fondé <span className="text-primary font-semibold">Spirit Bird IA Solutions</span> — 
                  une agence spécialisée dans l'automatisation des workflows pour PME.
                  Je pars toujours du problème, jamais de la technologie.
                </p>
                <p className="text-primary font-medium">
                  Ma double casquette business + technique, c'est votre garantie de solutions 
                  qui fonctionnent vraiment sur le terrain.
                </p>
              </div>

              {/* Technologies */}
              <div className="grid grid-cols-1 gap-6">
                {Object.values(technologies).map((category, index) => (
                  <div
                    key={index}
                    className={`service-card p-6 rounded-xl transition-all duration-300 ${
                      index === 0 ? 'border-primary/30 bg-primary/5' : 'hover:border-primary/20'
                    }`}
                  >
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      {index === 0 && <Zap className="w-4 h-4 text-primary" />}
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {category.items.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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

              {/* Services */}
              <div className="service-card p-6 rounded-xl hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6">Domaines d'Expertise</h3>
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center text-center p-4 rounded-lg h-[120px] justify-center transition-all duration-300 ${
                        index === 0
                          ? 'bg-primary/10 border border-primary/20'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <service.icon className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-medium mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approche */}
              <div className="service-card p-6 rounded-xl hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Mon Approche</h3>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Je pars toujours du problème, jamais de la technologie",
                    "Audit gratuit pour identifier les vrais leviers d'automatisation",
                    "Solutions intégrées à vos outils existants, sans tout réinventer",
                    "Formation et accompagnement pour l'autonomie de vos équipes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/dorian-cormerais/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-8 py-3 rounded-full inline-flex items-center gap-2 w-full justify-center"
              >
                <span>Réserver mon audit gratuit — 30 min</span>
                <Zap className="w-4 h-4" />
              </a>
              <p className="text-gray-500 text-sm text-center -mt-4">✓ Gratuit · ✓ Sans engagement · ✓ Diagnostic concret</p>
            </motion.div>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default About;