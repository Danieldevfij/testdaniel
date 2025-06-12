import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#mission', label: 'Over ons' },
    { href: '#vacatures', label: 'Vacatures' },
    { href: '#consultancy', label: 'Business Consultancy' },
    { href: '#services', label: 'Diensten' },
    { href: '#products', label: 'Producten' },
    { href: '#partnerships', label: 'Partnerships' },
    { href: '#servicedesk', label: 'Servicedesk' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur fixed top-0 inset-x-0 z-10 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-primary">Retailstars</div>
        <button className="md:hidden" onClick={toggle} aria-label="Menu">
          <FaBars />
        </button>
        <div className={`flex-col md:flex-row md:flex ${open ? 'flex' : 'hidden'} md:space-x-4 text-sm md:text-base`}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block px-3 py-2 text-primary hover:underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
