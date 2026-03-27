import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { portfolioConfig } from '../data/portfolioConfig';

const Hero = () => {
  const { personal, social } = portfolioConfig;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-6"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
        >
          {personal.tagline}
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personal.bio}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-6 justify-center mb-12"
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-110 group"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </a>

          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-110 group"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium">Explore more</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
