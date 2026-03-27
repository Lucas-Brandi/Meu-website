import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code, Loader2 } from 'lucide-react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { portfolioConfig } from '../data/portfolioConfig';
import type { GitHubRepo } from '../types';

const Projects = () => {
  const { github } = portfolioConfig;
  const { repos, loading, error } = useGitHubRepos(github.username);

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'Python': 'bg-green-500',
      'Java': 'bg-red-500',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-purple-500',
      'Vue': 'bg-emerald-500',
      'React': 'bg-cyan-500',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Projects
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Projects
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">
              Unable to load projects. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="projects"
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
            GitHub Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my latest open-source contributions and projects on GitHub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo: GitHubRepo, index: number) => (
            <motion.div
              key={repo.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors">
                      <Code className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {repo.name}
                      </h3>
                      {repo.language && (
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {repo.language}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <span className="text-sm font-medium">View</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {repos.length === 0 && !loading && !error && (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">
              No public repositories found.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
