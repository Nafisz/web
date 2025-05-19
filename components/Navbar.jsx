import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-cyan-400 font-bold text-xl">SCIENCEX</Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/galery">GALERY</NavLink>
              <NavLink to="/services">SERVICES</NavLink>
              <NavLink to="/location">LOCATION</NavLink>
              <NavLink to="/news">NEWS</NavLink>
              <NavLink to="/about">ABOUT</NavLink>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyan-400 hover:text-white"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/">HOME</MobileNavLink>
            <MobileNavLink to="/galery">GALERY</MobileNavLink>
            <MobileNavLink to="/services">SERVICES</MobileNavLink>
            <MobileNavLink to="/location">LOCATION</MobileNavLink>
            <MobileNavLink to="/news">NEWS</MobileNavLink>
            <MobileNavLink to="/about">ABOUT</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`relative px-2 py-1 text-sm tracking-wider font-medium transition-colors duration-300 ${
        isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
      }`}
    >
      {children}
      <span className={`absolute left-0 bottom-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0'
      }`} />
    </Link>
  );
};

const MobileNavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
        isActive ? 'text-cyan-400 bg-blue-900/20' : 'text-white hover:text-cyan-400 hover:bg-blue-900/10'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
