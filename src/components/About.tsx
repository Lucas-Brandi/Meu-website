import { motion } from 'framer-motion';
import { Target, Code, Rocket } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const About = () => {
  const { personal } = portfolioConfig;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personal.bio}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Current Focus
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personal.currentGoals}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Rocket className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Passionate Developer
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Creating efficient and scalable solutions
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        Fullstack
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Development
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        Modern
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Architecture
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
