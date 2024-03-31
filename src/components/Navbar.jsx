import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navLinks = [
    { to: '/about', text: 'About' },
    { to: '/experience', text: 'Experience' },
    { to: '/projects', text: 'Projects' },
    { to: '/contact', text: 'Contact' },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <nav className="flex justify-between w-full h-20 items-center">
      <Link to={'/'} className="text-2xl font-burtons">
        farukh kanzhayev
      </Link>
      <ul className="hidden md:flex items-center justify-center gap-6">
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
      <div
        onClick={() => setNavOpen(!navOpen)}
        className={
          navOpen
            ? 'cursor-pointer pr-4 z-20 text-white md:hidden'
            : 'cursor-pointer pr-4 z-20 text-teal-700 md:hidden'
        }
      >
        {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navOpen && (
        <ul className="flex gap-6 flex-col justify-center items-center fixed z-10 top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-700 to-teal-700 cursor-auto">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-4xl text-white" />
          </li>
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="text-white cursor-pointer px-4 capitalize text-4xl"
            >
              <NavLink to={link.to}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
