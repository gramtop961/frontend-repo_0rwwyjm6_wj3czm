import HeroSection from './components/HeroSection';
import AboutJourney from './components/AboutJourney';
import SkillsGalaxy from './components/SkillsGalaxy';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceSpiral from './components/ExperienceSpiral';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroSection />
      <AboutJourney />
      <SkillsGalaxy />
      <ProjectsShowcase />
      <ExperienceSpiral />
      <ContactSection />
      <footer className="bg-[#05050a] py-10 text-center text-sm text-purple-300/80">
        <p>© {new Date().getFullYear()} Usairam Saeed — Crafted with React, Tailwind & 3D love.</p>
      </footer>
    </div>
  );
}

export default App;
