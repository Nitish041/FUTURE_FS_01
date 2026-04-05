import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalHighlights from './components/TechnicalHighlights';
import Projects from './components/Projects';
import Skills from './components/Skills';
import DevOpsCloud from './components/DevOpsCloud';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Plasma from './components/Plasma';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f4f2ee] text-[#111111]">
      <div className="pointer-events-none fixed inset-0">
        <Plasma
          color="#2f2f2f"
          speed={0.5}
          direction="forward"
          scale={1.08}
          opacity={0.48}
          mouseInteractive
        />
        <div className="absolute inset-0 bg-[#f4f2ee]/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.1),transparent_30%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <TechnicalHighlights />
        <Projects />
        <Skills />
        <DevOpsCloud />
        <SoftSkills />
        <Contact />
      </main>
    </div>
  );
}
