import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinks = [
    { to: '/about', text: 'About' },
    { to: '/experience', text: 'Experience' },
    { to: '/projects', text: 'Projects' },
    { to: '/contacts', text: 'Contacts' },
  ];

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <Link to={'/'} className="text-2xl font-burtons">
        farukh kanzhayev
      </Link>
      <ul className="flex items-center gap-6">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'bg-gradient-to-t from-cyan-700 to-teal-700 text-white px-4 py-2 rounded-2xl border-none'
                  : 'bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-2xl border-none hover:from-cyan-600 hover:to-teal-600 transition-colors'
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
