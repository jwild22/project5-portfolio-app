import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Avatar from '../assets/avatar.png';

export default function About() {
  return (
    <div className="flex flex-col h-svh justify-center">
      <div className="text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Hi, I&apos;m Farukh
        </h2>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-10">
          <img src={Avatar} alt="avatar" />
        </div>
        <h3 className="text-2xl py-2">
          Financial Analyst and Software Developer
        </h3>
        <p className="py-5 leading-8 text-gray-800">
          Currently I am working as the Financial Analyst, but I want to learn
          code and apply this knowledge in the future.
          <br />
          Moreover, it is fun! I enjoy coding and I am always looking for new
          challenges. 😁💻
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 pb-3 text-gray-600">
        <AiFillLinkedin
          onClick={() =>
            window.location.assign(
              'https://www.linkedin.com/in/farukh-kanzhayev/'
            )
          }
          className="cursor-pointer text-teal-600"
        />
        <AiFillGithub
          onClick={() => window.location.assign('https://github.com/jwild22')}
          className="cursor-pointer text-teal-600"
        />
      </div>
    </div>
  );
}
