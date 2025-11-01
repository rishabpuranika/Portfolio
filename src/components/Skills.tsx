import { Code, Database, Cloud, Cpu, Terminal, Globe } from 'lucide-react';
import LogoLoop from './LogoLoop';
import { SiPython, SiCplusplus, SiC, SiDart, SiTypescript, SiScikitlearn, SiPytorch, SiReact, SiNextdotjs, SiTailwindcss, SiStreamlit, SiMysql, SiGit, SiGithub, SiDocker, SiKubernetes, SiLinux, SiUbuntu } from 'react-icons/si';
import SpotlightCard from './SpotlightCard';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Terminal size={32} />,
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'C', 'Dart', 'TypeScript'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Cpu size={32} />,
      title: 'Machine Learning/NLP',
      skills: ['LangChain', 'Scikit-learn', 'NLTK', 'PyTorch'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      skills: ['React.js', 'TypeScript', 'Streamlit'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database size={32} />,
      title: 'Database & Tools',
      skills: ['SQL', 'ClickHouse', 'Hive', 'Git', 'GitHub'],
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <Cloud size={32} />,
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'n8n'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Code size={32} />,
      title: 'Operating Systems',
      skills: ['Linux (Arch)', 'Ubuntu', 'Kali', 'Pop!_OS'],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
  { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <SiDart />, title: "Dart", href: "https://dart.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiScikitlearn />, title: "Scikit-learn", href: "https://scikit-learn.org" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiStreamlit />, title: "Streamlit", href: "https://streamlit.io" },
  { node: <SiMysql />, title: "SQL", href: "https://www.mysql.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
  { node: <SiUbuntu />, title: "Ubuntu", href: "https://ubuntu.com" },
];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Tools and technologies I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-cyan-400">
                  {category.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
               </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50" style={{ height: '100px', position: 'relative', overflow: 'hidden', marginTop: '3rem', marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut={true}
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>

        <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Presentation', 'Critical Thinking', 'Adaptability'].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-gray-300 hover:border-cyan-500 hover:scale-105 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
