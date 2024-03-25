import About from './About';
import Contacts from './Contacts';
import Experience from './Experience';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="page flex column">
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
}
