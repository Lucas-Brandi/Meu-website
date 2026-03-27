import { motion } from 'framer-motion';
// Ícones de interface continuam no Lucide
import { Mail, Heart, ArrowUp } from 'lucide-react';
// Ícones de marcas agora vêm do Font Awesome (react-icons)
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { portfolioConfig } from '../data/portfolioConfig';

const Footer = () => {
  const { personal, social } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-400">About</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {personal.name} - {personal.tagline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{personal.bio}</p>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-400">Connect</h3>
            <div className="space-y-3">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
              >
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
              >
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
              >
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-400">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities, interesting projects, or just having
              a friendly chat about technology.
            </p>
            <a
              href={`mailto:lucasbrandi@example.com`}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg transition-colors duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>
                © {currentYear} {personal.name}. All rights reserved.
              </span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with passion</span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
              aria-label="Scroll to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
