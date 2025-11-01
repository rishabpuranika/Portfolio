import { GraduationCap, Award } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Academic background and achievements
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg mr-4">
                <GraduationCap size={32} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  Dayananda Sagar College of Engineering
                </h3>
                <p className="text-cyan-400 mb-2">BE in Information Science & Engineering (VTU)</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">2022 - 2026</span>
                  <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 font-semibold">
                    CGPA: 8.3
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              Pursuing Bachelor's degree with focus on Machine Learning, NLP, and Full Stack Development.
              Active participant in technical projects and open-source contributions.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                <GraduationCap size={32} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  Sainik School Kalikiri
                </h3>
                <p className="text-blue-400 mb-2">CBSE - 10th & 12th</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">2020 & 2022</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              Completed secondary education with strong foundation in Mathematics and Science.
              Developed discipline and leadership skills through structured military school environment.
            </p>
          </div>
        </div>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-center mb-6">
              <Award size={32} className="text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Certifications & Achievements</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-500 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Supervised Machine Learning: Regression and Classification
                  </h4>
                  <p className="text-cyan-400 text-sm mb-1">Coursera</p>
                  <p className="text-gray-400 text-sm">
                    Comprehensive course on ML fundamentals, regression, and classification techniques
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Advanced Learning Algorithms
                  </h4>
                  <p className="text-blue-400 text-sm mb-1">Coursera</p>
                  <p className="text-gray-400 text-sm">
                    Deep dive into neural networks and advanced ML algorithms
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    5 Star in C++
                  </h4>
                  <p className="text-purple-400 text-sm mb-1">HackerRank</p>
                  <p className="text-gray-400 text-sm">
                    Demonstrated advanced proficiency in C++ programming
                  </p>
                </div>

                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    5 Star in SQL
                  </h4>
                  <p className="text-pink-400 text-sm mb-1">HackerRank</p>
                  <p className="text-gray-400 text-sm">
                    Expert-level database query optimization and management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
