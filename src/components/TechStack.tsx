import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Palette } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const TechStack = () => {
  const { skills } = portfolioConfig;

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'React': <Code className="w-6 h-6" />,
      'Vite': <Cpu className="w-6 h-6" />,
      'Tailwind CSS': <Palette className="w-6 h-6" />,
      'HTML5': <Globe className="w-6 h-6" />,
      'CSS3': <Palette className="w-6 h-6" />,
    };
    return iconMap[skillName] || <Code className="w-6 h-6" />;
  };

  const getSkillColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'advanced': 'bg-gradient-to-r from-green-500 to-emerald-500',
      'intermediate': 'bg-gradient-to-r from-blue-500 to-cyan-500',
      'beginner': 'bg-gradient-to-r from-yellow-500 to-orange-500',
      'expert': 'bg-gradient-to-r from-purple-500 to-pink-500',
    };
    return colorMap[level] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
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
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Frontend Skills */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`p-3 rounded-lg ${getSkillColor(skill.level)} bg-opacity-10`}>
                      <div className={`${getSkillColor(skill.level)} bg-clip-text text-transparent`}>
                        {getSkillIcon(skill.name)}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                      {skill.name}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 capitalize">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Backend & Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`p-3 rounded-lg ${getSkillColor(skill.level)} bg-opacity-10`}>
                      <div className={`${getSkillColor(skill.level)} bg-clip-text text-transparent`}>
                        {getSkillIcon(skill.name)}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                      {skill.name}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 capitalize">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
