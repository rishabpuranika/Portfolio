import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import GradientText from './GradientText';
import ShinyText from './ShinyText';
import StarBorder from './StarBorder';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              KN Rishab Puranika
            </GradientText>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-delay-1">
            Information Science & Engineering Student
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Machine Learning Enthusiast | Full Stack Developer | Open Source Contributor
          </p>

           <div className="flex justify-center space-x-6 mb-8 animate-fade-in-delay-3">
            <a
              href="https://github.com/rishabpuranika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rishabpuranika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:145rishab@gmail.com"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+916363798670"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
            >
              <Phone size={24} />
            </a>
          </div>

          <StarBorder
            as="a"
            href="#contact"
            className="inline-block px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium hover:shadow-lg hover:shadow-slate-500/50 hover:scale-105 transition-all duration-300 animate-fade-in-delay-4 border border-slate-600"
            color="cyan"
            speed="5s"
          >
            <ShinyText
              text="Get In Touch"
              disabled={false}
              speed={3}
              className='custom-class'
            />
          </StarBorder>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
