import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const menu = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang', label: 'Tentang Saya' },
  { to: '/galeri', label: 'Galeri Foto' },
  { to: '/kontak', label: 'Kontak' },
];

const Navbar = () => {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={() => setTerbuka(false)}>
            Dev.
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Buka menu"
            aria-expanded={terbuka}
            onClick={() => setTerbuka(!terbuka)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${terbuka ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto gap-3">
              {menu.map((item) => (
                <li className="nav-item" key={item.to}>
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active fw-semibold' : ''}`}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setTerbuka(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
