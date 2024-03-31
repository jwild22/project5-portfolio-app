import jumystap from '../assets/jumystap.png';
import medium from '../assets/medium.png';
import portfolio from '../assets/portfolio.png';
import todo from '../assets/todo.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: portfolio,
    },
    {
      id: 2,
      src: jumystap,
    },
    {
      id: 3,
      src: medium,
    },
    {
      id: 4,
      src: todo,
    },
  ];

  return (
    <div
      name="portfolio"
      className="flex w-full flex-col items-center justify-center md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center justify-center">
          <h3 className="text-5xl font-medium inline">Projects</h3>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-teal-600 rounded-lg"
            >
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
