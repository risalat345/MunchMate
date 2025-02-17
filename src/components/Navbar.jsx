import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
const Navbar = ({ setshowSignIn }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalAmmount } = useContext(StoreContext);
  return (
    <div className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center py-2 px-5 relative">
        {getTotalAmmount()===0?"":<div className=" absolute right-30 top-3 red h-2 w-2 bg-red-600 rounded-full">
</div>}
        <div className="block md:hidden">
          {isMobileMenuOpen ? (
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeWidth="2" d="M3 3l18 18M21 3L3 21"/></svg>
            </button>
          ) : (
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h22M5 16h22M5 24h22"/></svg>
            </button>
          )}
        </div>
        
        {/* Logo */}
        <div className='mb-2'>
          <img width={150} src={logo} alt="Logo" />
        </div>
        <div className='hidden md:block'>
          <ul className="flex nav-menu gap-5 items-center">
            <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href='#app' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
            <a href='#contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</a>
          </ul>
        </div>
      
        {/* Icons & Button */}
        <div className="flex items-center gap-4">
        <div className='search-icon hidden md:block'>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"/></svg>
        </div>
          <Link to="/cart">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="cursor-pointer">
                <g fill="none" stroke="black" strokeWidth="1.5">
                  <path d="M4.508 20h14.984a.6.6 0 0 0 .592-.501l1.8-10.8A.6.6 0 0 0 21.292 8H2.708a.6.6 0 0 0-.592.699l1.8 10.8a.6.6 0 0 0 .592.501Z" />
                  <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                </g>
              </svg>
            </div>
          </Link>
          <button onClick={() => setshowSignIn(true)} className="cursor-pointer border border-red-500 rounded-lg font-bold px-4 py-2 hover:text-white hover:bg-red-600 transition">
            Sign In
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-5 flex flex-col items-center md:hidden">
          <ul className="flex flex-col gap-4 justify-center items-center">
            <Link to="/" onClick={() => { setMenu("home"); setIsMobileMenuOpen(false); }}>Home</Link>
            <a href='#menu' onClick={() => { setMenu("menu"); setIsMobileMenuOpen(false); }}>Menu</a>
            <a href='#app' onClick={() => { setMenu("mobile-app"); setIsMobileMenuOpen(false); }}>Mobile App</a>
            <a href='#contact' onClick={() => { setMenu("contact"); setIsMobileMenuOpen(false); }}>Contact Us</a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
