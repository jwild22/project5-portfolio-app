import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiMiniDocumentArrowDown } from 'react-icons/hi2';
import { TypeAnimation } from 'react-type-animation';
import CV from '../../public/cv.pdf';
import Avatar from '../assets/avatar.png';

export default function About() {
  return (
    <div className="flex flex-col justify-center md:h-screen">
      <div className="text-center mb-5">
        <h2 className="text-4xl md:text-5xl py-2 text-teal-500 font-medium">
          Hi, I&apos;m Farukh
        </h2>
        <h3 className="text-2xl py-2">
          Financial Analyst and <br className="flex sm:hidden" />
          <TypeAnimation
            sequence={['', 450, 'Software Developer', 3000]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            className="text-teal-500 text-2xl py-2"
          />
        </h3>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-10">
          <img src={Avatar} alt="avatar" />
        </div>
        <p className="py-5 leading-8 font-normal text-lg">
          Currently I am working as the Financial Analyst, but I want to learn
          code and apply this knowledge in the future.
          <br />
          Moreover, it is fun! I enjoy coding and I am always looking for new
          challenges. <span className="text-xl">😁💻</span>
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-gray-600 items-center">
        <AiFillLinkedin
          onClick={() =>
            window.location.assign(
              'https://www.linkedin.com/in/farukh-kanzhayev/'
            )
          }
          className="cursor-pointer text-teal-600 dark:text-teal-500"
        />
        <AiFillGithub
          onClick={() => window.location.assign('https://github.com/jwild22')}
          className="cursor-pointer text-teal-600 dark:text-teal-500"
        />
        <a href={CV} download="Farukh's CV" target="_blank">
          <HiMiniDocumentArrowDown className="cursor-pointer text-teal-600 dark:text-teal-500" />
        </a>
      </div>
    </div>
  );
}
