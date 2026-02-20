import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, CalendarCheck } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const emailAddress = 'spirit.bird.ia.solutions@gmail.com';
  const ccEmail = 'dorian.cormerais@gmail.com';
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&cc=${ccEmail}&su=Demande%20d'informations`;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', hash: '#services' },
    { name: 'À Propos', hash: '#about' },
    { name: 'Réalisations', hash: '#projets' },
    { name: 'Tarifs', hash: '#tarifs' },
    { name: 'Contact', hash: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/consultant-ia/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok', color: 'hover:text-white' },
    { icon: Mail, href: gmailLink, label: 'Email', color: 'hover:text-yellow-500' }
  ];

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <HashLink smooth to="/#" scroll={scrollWithOffset} className="group flex items-center gap-4">
            <Logo className="w-12 h-12" />
            <span className="text-2xl tracking-wider font-spiritual">
              <span className="font-light">Spirit Bird</span>{' '}
              <span className="text-gradient-animate">IA Solutions</span>
            </span>
          </HashLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <HashLink
                  key={item.name}
                  smooth
                  to={`/${item.hash}`}
                  scroll={scrollWithOffset}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    activeSection === item.hash.slice(1)
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.name}
                </HashLink>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
              {socialLinks.map((social) => (
                
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

            {/* CTA */}
            
              href="https://calendly.com/dorian-cormerais/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 px-6 py-2.5 rounded-full bg-primary text-dark font-semibold hover:bg-primary/90 transition-all duration-300 text-sm hover:scale-105 transform inline-flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Audit gratuit
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <HashLink
                  key={item.name}
                  smooth
                  to={`/${item.hash}`}
                  scroll={scrollWithOffset}
                  className={`block py-2 text-base font-medium transition-colors ${
                    activeSection === item.hash.slice(1)
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </HashLink>
              ))}

              <div className="flex items-center justify-center space-x-6 py-6 border-t border-white/10 mt-4">
                {socialLinks.map((social) => (
                  
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${social.color} hover:scale-110 transform duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              
                href="https://calendly.com/dorian-cormerais/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-primary text-dark font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 text-base inline-flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <CalendarCheck className="w-4 h-4" />
                Réserver mon audit gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;