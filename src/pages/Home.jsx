import Navbar from '../components/Navbar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="flex column">
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
