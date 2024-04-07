import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-6">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
