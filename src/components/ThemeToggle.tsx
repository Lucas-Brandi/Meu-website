import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700 group-hover:text-gray-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
