import CardNav from './CardNav';
import logo from './logo.png';

export default function Navigation() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", href: "#about", ariaLabel: "About Me" },
        { label: "Skills", href: "#skills", ariaLabel: "Skills" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Projects", href: "#projects", ariaLabel: "Projects" },
        { label: "Education", href: "#education", ariaLabel: "Education" },
        { label: "Resume", href: "#resume", ariaLabel: "Resume" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Contact", href: "#contact", ariaLabel: "Contact" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#000"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#111"
      ease="circ.out"
    />
  );
}
