import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import ElectricBorder from './components/ElectricBorder'
import CircularText from './components/CircularText';
import BlurText from "./components/BlurText";
import LogoLoop from './components/LogoLoop';
import ClickSpark from './components/ClickSpark';
import SplashCursor from './components/SplashCursor'
import BubbleMenu from './components/BubbleMenu'
import MagicBento from './components/MagicBento'
import CardNav from './components/CardNav'
import logo from './assets/logo.svg';
import PillNav from './components/PillNav';
import ProfileCard from './components/ProfileCard';
import RippleGrid from './components/RippleGrid';


  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "Abo  ut Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#000000ff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
{/* <SplashCursor /> */}

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];
// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
function App() {
  const [count, setCount] = useState(0)

  // Handler for BlurText animation completion
  const handleAnimationComplete = () => {
    console.log('BlurText animation completed!');
  };

  return (
    <ClickSpark
      sparkColor='#FF8800'
      sparkSize={15}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div style={{ minHeight: '100vh', width: '100vw' }}>
        <h1>
          <BlurText
            text="Hello there!"
            delay={350}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl mb-8"
          />
        </h1>
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div>
            <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
              A glowing, animated border wrapper.
            </p>
          </div>
        </ElectricBorder>
        <CircularText
          text="REACT*BITS*COMPONENTS*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#242424"
            ariaLabel="Technology partners"
          />
        </div>
        <BubbleMenu
          logo={<span style={{ fontWeight: 700 }}>RB</span>}
          items={items} // <-- use items1
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
        <ProfileCard
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="assets/logo.svg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
      <div style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
      <RippleGrid
        enableRainbow={false}
        gridColor="#ffffff"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.8}
      />
    </div>
    </ClickSpark>
  )
}

export default App
