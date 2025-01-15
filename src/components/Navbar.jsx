import React from 'react';
import nav1 from '../assets/nav1.svg';
import nav2 from '../assets/nav2.svg';
import nav3 from '../assets/nav3.svg';

function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] h-[74px] bg-[#543A14] rounded-3xl flex items-center justify-center shadow-lg">
      <div className="grid grid-cols-3 place-items-center w-full">
        <a
          href="/home"
          className="hover:opacity-70 transition-opacity duration-200"
        >
          <img src={nav1} alt="Home" className="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
        <a
          href="/booking"
          className="hover:opacity-70 transition-opacity duration-200"
        >
          <img src={nav2} alt="Booking" className="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
        <a
          href="/profile"
          className="hover:opacity-70 transition-opacity duration-200"
        >
          <img src={nav3} alt="Profile" className="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
