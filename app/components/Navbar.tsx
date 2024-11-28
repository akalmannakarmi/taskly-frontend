// app/components/Navbar.tsx
import { Link } from '@remix-run/react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and desktop links */}
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-bold">Taskly</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-indigo-300">Home</Link>
            <Link to="/about" className="hover:text-indigo-300">About</Link>
            <Link to="/contact" className="hover:text-indigo-300">Contact</Link>
          </div>
        </div>

        {/* Right side links and profile */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/tasks" className="hover:text-indigo-300">Today</Link>
          <Link to="/about" className="hover:text-indigo-300">This Week</Link>
          <Link to="/contact" className="hover:text-indigo-300">This Month</Link>
          <div className="text-2xl font-bold">Profile</div>
        </div>

        {/* Hamburger Icon (visible only on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 text-white py-4">
          <div className="flex flex-col space-y-4 items-center">
            <Link to="/" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Today</Link>
            <Link to="/about" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>This Week</Link>
            <Link to="/contact" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>This Month</Link>
            <div className="text-2xl font-bold">Profile</div>
          </div>
        </div>
      )}
    </nav>
  );
}
