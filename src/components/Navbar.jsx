import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contacts', href: '/contacts' },
  ];

  return (
    <div className="flex container j-between">
      <div className="flex a-center">
        <Link to={'/'} className="link">
          <h3>Farukh Kanzhayev</h3>
        </Link>
      </div>
      <div className="flex a-center" style={{ gap: '10px' }}>
        {links.map((link, index) => (
          <Link key={index} className="link" to={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
