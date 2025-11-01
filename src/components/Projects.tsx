import { ExternalLink, Github } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Projects() {
  const projects = [
    {
      title: 'TrueSynth',
      description: 'A sophisticated multi-agent system using "Generate, Verify, Compare" architecture to reduce AI hallucinations and enhance factual accuracy.',
      tech: ['Python', 'LangChain', 'LLMs', 'Tavily API'],
      highlights: [
        'Integrated multiple LLMs via OpenRouter API with specialized roles',
        'Real-time verification using Tavily Search API',
        'Complex multi-step AI workflow orchestration'
      ],
      github: 'https://github.com/rishabpuranika/TrueSynth',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Healthcare Chatbot',
      description: 'Real-time medical chatbot using LLaMA2 and RAG for optimized response accuracy through contextually retrieved knowledge.',
      tech: ['TypeScript', 'Python', 'LLaMA2', 'RAG', 'NLP'],
      highlights: [
        'Optimized medical response accuracy using RAG',
        'Advanced NLP techniques for query processing',
        'Efficient inference pipelines for user queries'
      ],
      github: 'https://github.com/rishabpuranika/Healthcare-Chatbot',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'PassForge',
      description: 'Secure password generator with AES-256 encryption for robust data storage and credential management.',
      tech: ['Flutter', 'Dart', 'AES Encryption'],
      highlights: [
        'Variable-sized, randomly arranged password generation',
        'AES-256 encryption for secure storage',
        'Intuitive UI with seamless user experience'
      ],
      github: 'https://github.com/rishabpuranika/passwordgeneratorandstorage',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Fake News Detection',
      description: 'ML-powered system achieving 85% accuracy in detecting fake news using Logistic Regression and NLP techniques.',
      tech: ['Python', 'Scikit-learn', 'NLTK', 'Streamlit'],
      highlights: [
        '85% accuracy with Logistic Regression',
        'Real-time interactive web interface',
        'Comprehensive text preprocessing pipeline with TF-IDF'
      ],
      github: 'https://github.com/rishabpuranika/Fake-News-Prediction',
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start text-sm text-gray-400">
                    <span className="text-cyan-400 mr-2 mt-1">▹</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                View Project
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            </SpotlightCard>
          ))}
        </div>

        <SpotlightCard className="custom-spotlight-card mt-12" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="mt-20 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50" style={{ marginTop: '0rem' }}>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Open Source Contributions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Dantotsu App</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Developed dynamic manga download feature for tailored downloads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Refactored core installation logic for improved efficiency and stability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Optimized installation order to prioritize user progress</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
