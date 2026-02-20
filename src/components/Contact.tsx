import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Bot, CalendarCheck, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "Automatisation IA",
    description: "Workflows intelligents pour PME",
    color: "text-pink-400",
    highlight: true
  },
  {
    icon: Globe,
    title: "Développement Web",
    description: "Sites et applications sur mesure",
    color: "text-blue-400",
    highlight: false
  }
];

const auditSteps = [
  "On analyse vos process et vos outils existants",
  "On identifie ce qui peut être automatisé rapidement",
  "On vous propose un plan concret et chiffré"
];

const Contact = () => {
  const emailAddress = 'spirit.bird.ia.solutions@gmail.com';
  const ccEmail = 'dorian.cormerais@gmail.com';
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&cc=${ccEmail}&su=Demande%20d'informations`;

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <CalendarCheck className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Commençons par un <span className="gradient-text">audit gratuit</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            30 minutes pour identifier ce qui peut être automatisé dans votre organisation.
            Pas de pitch, juste un diagnostic concret.
          </motion.p>

          {/* Étapes de l'audit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto mb-12 space-y-3 text-left"
          >
            {auditSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <a
              href="https://calendly.com/dorian-cormerais/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary px-10 py-4 rounded-full inline-flex items-center gap-3 text-lg font-semibold hover:scale-105 transform transition-all duration-300"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Réserver mon audit gratuit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <p className="text-gray-500 text-sm mb-16">
            ✓ 100% gratuit · ✓ Sans engagement · ✓ Réponse sous 24h
          </p>

          {/* Services */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`service-card p-4 rounded-xl text-center flex-1 transition-colors ${
                  service.highlight
                    ? 'border-primary/40 bg-primary/5'
                    : 'hover:border-primary/50'
                }`}
              >
                <service.icon className={`w-6 h-6 ${service.color} mx-auto mb-2`} />
                <h3 className="text-sm font-medium mb-1">{service.title}</h3>
                <p className="text-xs text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Email secondaire */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="service-card p-6 rounded-xl cursor-pointer hover:border-primary/50 transition-all max-w-2xl mx-auto"
            onClick={() => window.open(gmailLink, '_blank')}
          >
            <Mail className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="text-lg font-bold mb-1">Vous préférez l'email ?</h3>
            <p className="text-gray-400 text-sm">
              Écrivez-moi à{' '}
              <span className="text-primary font-bold underline">
                {emailAddress}
              </span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
