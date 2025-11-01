import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import ShinyText from './ShinyText';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Let's connect and create something amazing together
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:145rishab@gmail.com"
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg mr-4 group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">145rishab@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916363798670"
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors duration-200">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">+91 6363798670</p>
                  </div>
                </a>

                <div className="flex items-center text-gray-300">
                  <div className="p-2 bg-purple-500/10 rounded-lg mr-4">
                    <MapPin size={20} className="text-purple-400" />
                  </div>
                   <div>
                     <p className="text-sm text-gray-400">Location</p>
                     <p className="font-medium">Bangalore, India</p>
                   </div>
                 </div>
                </div>
              </div>
            </SpotlightCard>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Connect on Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/rishabpuranika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-slate-700/50 rounded-xl hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 group"
                >
                  <Github size={24} className="mr-2 text-gray-300 group-hover:text-cyan-400" />
                  <span className="font-medium text-gray-300 group-hover:text-cyan-400">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/rishabpuranika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-slate-700/50 rounded-xl hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 group"
                >
                  <Linkedin size={24} className="mr-2 text-gray-300 group-hover:text-cyan-400" />
                  <span className="font-medium text-gray-300 group-hover:text-cyan-400">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <p className="text-gray-400">
                Whether you want to collaborate on a project, need help with Machine Learning or Full Stack Development,
                or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Open to freelance opportunities</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Available for consulting</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Interested in open-source collaborations</span>
                </div>
              </div>

               <a
                 href="mailto:145rishab@gmail.com"
                 className="inline-block w-full mt-6 px-6 py-3 bg-black text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-black/50 hover:scale-105 transition-all duration-300"
               >
                 <ShinyText
                   text="Send Email"
                   disabled={false}
                   speed={3}
                   className='custom-class'
                 />
               </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            © 2025 KN Rishab Puranika. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
