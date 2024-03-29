import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Avatar from '../assets/avatar.png';

export default function About() {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Hi, I&apos;m Farukh
        </h2>
        <h3 className="text-2xl py-2">
          Financial Analyst and Software Developer
        </h3>
        <p className="py-5 leading-8 text-gray-800">
          Currently I am working as Financial Analyst, but I want to learn code
          and apply this knowledge in the future. Also, it is fun!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillLinkedin
          onClick={() =>
            window.location.assign(
              'https://www.linkedin.com/in/farukh-kanzhayev/'
            )
          }
          className="cursor-pointer"
        />
        <AiFillGithub
          onClick={() => window.location.assign('https://github.com/jwild22')}
          className="cursor-pointer"
        />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}
