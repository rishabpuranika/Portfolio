import { useState } from 'react'
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
import PillNav from './components/PillNav';
import ProfileCard from './components/ProfileCard';
import RippleGrid from './components/RippleGrid';
import logo from './assets/logo.svg';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
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
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function App() {
  const [count, setCount] = useState(0)

  // Handler for BlurText animation completion
  const handleAnimationComplete = () => {
    console.log('BlurText animation completed!');
  };

  return (
    <>
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
          <CardNav
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
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
          {/* <ProfileCard
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
          /> */}
        </div>
    </>
  )
}

export default App;