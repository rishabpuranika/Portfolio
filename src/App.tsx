import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ClickSpark from './components/ClickSpark';

function App() {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </ClickSpark>
  );
}

export default App;
