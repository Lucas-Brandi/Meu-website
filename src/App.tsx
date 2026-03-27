import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
