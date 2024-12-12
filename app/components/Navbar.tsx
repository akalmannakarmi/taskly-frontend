import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

  const openProfileMenu = () => setIsProfileOpen(true);
  const closeProfileMenu = () => setIsProfileOpen(false);

  return (
    <div className="relative">
      <nav className="bg-indigo-600 text-white shadow-md font-poppins">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and desktop links */}
          <div className="flex items-center space-x-6">
            <img src="/images/1.png" alt="Taskly Logo" className="h-10 mb-2 pr-50" />
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-indigo-300">Home</Link>
              <Link to="/about" className="hover:text-indigo-300">About</Link>
              <Link to="/contact" className="hover:text-indigo-300">Contact</Link>
            </div>
          </div>

          {/* Right side links and profile */}
          <div className="hidden md:flex space-x-6 items-center ml-auto">
            <Link to="/today" className="hover:text-indigo-300">Today</Link>
            <Link to="/thisweek" className="hover:text-indigo-300">This Week</Link>
            <Link to="/thismonth" className="hover:text-indigo-300">This Month</Link>

            {/* Profile Button */}
            <div className="relative" onMouseEnter={openProfileMenu} onClick={openProfileMenu}>
              <button
                className="text-2xl font-bold cursor-pointer hover:text-indigo-300 focus:outline-none" onClick={toggleProfileMenu}>
                Profile
              </button>
              {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50" onMouseEnter={openProfileMenu}
               onMouseLeave={closeProfileMenu}>

                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                  My Profile
                </Link>
                <Link to="/mytasks" className="block px-4 py-2 hover:bg-gray-200">
                  My Tasks
                </Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">
                  Settings
                </Link>
                <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200">
                  Logout
                </Link>
              </div>
             )}
            </div>
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
                  <Link to="/today" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Today</Link>
                  <Link to="/thisweek" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>This Week</Link>
                  <Link to="/thismonth" className="hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>This Month</Link>
                  <div className="text-2xl font-bold">Profile</div>
                </div>
              </div>
           )}
      </nav>
    </div>
  );
}
