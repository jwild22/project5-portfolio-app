import About from './About';
import Experience from './Experience';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="page flex column">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
