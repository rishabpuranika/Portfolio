export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Information Science & Engineering student at Dayananda Sagar College of Engineering,
              with a strong focus on Machine Learning, Natural Language Processing, and Full Stack Development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in building intelligent systems using LLMs, RAG architectures, and multi-agent frameworks,
              I strive to create solutions that reduce AI hallucinations and enhance factual accuracy. My experience
              spans from developing healthcare chatbots to contributing to open-source projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, optimizing algorithms, or contributing to the
              open-source community. I believe in writing clean, maintainable code and building user-centric applications.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Highlights</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>8.3 CGPA in Information Science & Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>5 Star rating in C++ & SQL on HackerRank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Certified in Machine Learning from Coursera</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Active Open Source Contributor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Multilingual: English, Kannada, Telugu, Hindi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
