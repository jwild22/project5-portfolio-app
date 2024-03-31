import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import Avatar from '../assets/avatar.png';

export default function About() {
  return (
    <div className="flex flex-col justify-center md:h-screen">
      <div className="text-center mb-5">
        <h2 className="text-4xl md:text-5xl py-2 text-teal-600 font-medium">
          Hi, I&apos;m Farukh
        </h2>
        <h3 className="text-xl py-2 md:text-2xl">
          Financial Analyst and{' '}
          <TypeAnimation
            sequence={['', 450, 'Software Developer', 3000]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            className="text-teal-600 text-xl py-2 md:text-2xl"
          />
        </h3>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-10">
          <img src={Avatar} alt="avatar" />
        </div>
        <p className="py-5 leading-8 text-gray-800 font-normal text-lg">
          Currently I am working as the Financial Analyst, but I want to learn
          code and apply this knowledge in the future.
          <br />
          Moreover, it is fun! I enjoy coding and I am always looking for new
          challenges. <span className="text-xl">😁💻</span>
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
