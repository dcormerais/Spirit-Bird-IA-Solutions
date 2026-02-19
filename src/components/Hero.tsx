import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, BarChart2, Workflow } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { HashLink } from 'react-router-hash-link';
import ParallaxSection from './ParallaxSection';
import Logo from './Logo';

const Hero = () => {
  const badges = [
    { icon: Bot, text: "Automatisation & IA", color: "from-pink-500 to-red-500" },
    { icon: Workflow, text: "Workflows sur-mesure", color: "from-blue-500 to-purple-500" },
    { icon: Zap, text: "Déploiement rapide", color: "from-yellow-500 to-orange-500" },
    { icon: BarChart2, text: "Résultats mesurables", color: "from-green-500 to-teal-500" },
  ];

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <ParallaxSection offset={30}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="mb-8 inline-block relative"
            >
              <Logo className="w-48 h-48 mx-auto mb-6" />
              <h1 className="text-5xl md:text-7xl tracking-wider mb-4 relative z-10">
                <span className="font-spiritual font-light">Spirit Bird</span>{' '}
                <span className="text-gradient-animate font-spiritual">IA Solutions</span>
              </h1>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="feature-badge group"
                >
                  <div className="flex items-center space-x-2">
                    <badge.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{badge.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span>Automatisez vos </span>
              <TypeAnimation
                sequence={[
                  'workflows métiers',
                  2000,
                  'tâches répétitives',
                  2000,
                  'process manuels',
                  2000,
                  'opérations internes',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </motion.h2>

            <motion.p
              className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Vos équipes passent trop de temps sur des tâches sans valeur ajoutée.
              On connecte vos outils, on automatise vos process, on vous rend du temps.
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              En quelques semaines, vos équipes récupèrent du temps pour ce qui compte vraiment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="https://calendly.com/dorian-cormerais/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-6 py-3 rounded-full inline-flex items-center text-lg font-medium group"
              >
                <span>Réserver un audit gratuit</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <HashLink
                smooth
                to="/#services"
                scroll={scrollWithOffset}
                className="text-gray-300 hover:text-primary transition-colors px-8 py-3 text-lg font-medium flex items-center group"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </HashLink>
            </motion.div>

            {/* Audit gratuit badge */}
            <motion.p
              className="text-gray-500 text-sm mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ✓ Audit 100% gratuit · ✓ Sans engagement · ✓ Résultats concrets en 30 min
            </motion.p>
          </motion.div>
        </ParallaxSection>
      </div>

      {/* Effets visuels */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark opacity-80"></div>
      </div>

      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
    </section>
  );
};

export default Hero;