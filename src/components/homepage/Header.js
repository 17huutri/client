import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import NavMobile from '../homepage/NavMobile';
import Logo from '../../assets/img/logo.png';
import '../../styles/Header.css'
const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    // scroll event 
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  })

  return (
    <header
      className={`${header ? 'top-0' : 'top-9'
        } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
    >
      <div className='flex item-center'>
        <a href='#'>
          <img src={Logo} alt='' className='absolute top-[-70px] left-[-80px] w-[370px] h-[300px]' />
        </a>
        {/* nav */}
        <div className='hidden lg:flex'>
          <Nav />

        </div>
      </div>
      <div className='flex items-center'>
        {/* button */}
        <div className='flex gap-x-4 lg:gap-x-9 bg-white'>
          <button className="btn-si text-heading font-medium text-sm lg:text-base hover:text-orange transition flex items-center justify-center"
            onClick={() => { window.location.href = '/login'; }}>Sign In</button>
          <button
            className='btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base
  hover:bg-orange-200 hover:text-white transition'
            onClick={() => { window.location.href = '/register'; }}
          >
            Sign Up
          </button>
        </div>
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
}

export default Header;