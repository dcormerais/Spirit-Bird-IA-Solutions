import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, CalendarCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import LoadingSpinner from './components/LoadingSpinner';
import AnimatedBackground from './components/AnimatedBackground';
import BackToTop from './components/BackToTop';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const emailAddress = 'spirit.bird.ia.solutions@gmail.com';
  const ccEmail = 'dorian.cormerais@gmail.com';
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&cc=${ccEmail}&su=Demande%20d'informations`;

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/consultant-ia/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: gmailLink, label: 'Email', color: 'hover:text-yellow-500' }
  ];

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-dark text-light relative overflow-hidden">
        <AnimatedBackground />
        <ScrollProgress />
        <BackToTop />
        <Toaster position="top-right" />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Projects />
                  <Pricing />
                  <Contact />
                </>
              } />
            </Routes>
          </Suspense>
        </motion.main>

        <footer className="relative bg-dark/80 backdrop-blur-sm border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Entreprise */}
              <div className="space-y-6">
                <span className="text-xl tracking-wider font-spiritual">
                  <span className="font-light">Spirit Bird</span>{' '}
                  <span className="text-gradient-animate">IA Solutions</span>
                </span>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    Agence d'automatisation IA pour PME — workflows sur-mesure, agents IA, outils web.
                  </p>
                  <p className="text-sm text-gray-400">100% remote · France & international 🌍</p>
                  <a
                    href={gmailLink}
                    className="text-sm text-gray-400 hover:text-primary transition-colors block"
                  >
                    {emailAddress}
                  </a>
                </div>
                <a
                  href="https://calendly.com/dorian-cormerais/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary/20 transition-all duration-300"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Audit gratuit — 30 min
                </a>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-6">Navigation</h3>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-sm text-gray-400 hover:text-primary transition-colors">Services</a></li>
                  <li><a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors">À Propos</a></li>
                  <li><a href="#projets" className="text-sm text-gray-400 hover:text-primary transition-colors">Réalisations</a></li>
                  <li><a href="#tarifs" className="text-sm text-gray-400 hover:text-primary transition-colors">Tarifs</a></li>
                  <li><a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Légal */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-6">Informations légales</h3>
                <ul className="space-y-2">
                  <li><a href="/mentions-legales" className="text-sm text-gray-400 hover:text-primary transition-colors">Mentions légales</a></li>
                  <li><a href="/confidentialite" className="text-sm text-gray-400 hover:text-primary transition-colors">Politique de confidentialité</a></li>
                  <li><a href="/cgu" className="text-sm text-gray-400 hover:text-primary transition-colors">CGU</a></li>
                  <li><a href="/cgv" className="text-sm text-gray-400 hover:text-primary transition-colors">CGV</a></li>
                </ul>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Spirit Bird IA Solutions. Tous droits réservés.
                </p>
                <div className="flex items-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 transition-colors ${social.color} hover:scale-110 transform duration-200`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default App;