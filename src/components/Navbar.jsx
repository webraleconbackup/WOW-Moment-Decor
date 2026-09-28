import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import Marquees from './Marquees';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workList = [
    { label: 'Birthday Decoration', link: '/birthday-decoration' },
    { label: 'Anniversary Decoration', link: '/anniversary-decoration' },
    { label: 'Baby Welcome Decoration', link: '/baby-shower-decoration' },
    { label: 'Haldi Decoration', link: '/haldi-decoration' },
    { label: 'Just Married Decoration', link: '/just-married-decoration' },
    { label: 'Festival Decoration', link: '/festival-decoration' },
  ];

  const activeClass = ({ isActive }) =>
    `transition duration-300 hover:text-pink-600 ${
      isActive ? 'text-pink-600' : 'text-gray-800'
    }`;

  return (
    <header className='w-full z-50 shadow-sm fixed top-0 left-0 right-0'>
      {/* TOP BAR */}
      <Marquees />
      {/* <div
        className={`w-full bg-pink-700 text-white transition-all duration-300 ${
          isScrolled ? 'py-0' : 'py-0'
        }`}
      > */}
      {/* </div> */}

      {/* MAIN NAVBAR */}
      <div
        className={`w-full bg-pink-700 px-4 lg:px-10 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div
          className={`max-w-8xl bg-white flex items-center justify-between px-4 md:px-10 transition-all duration-300 ${
            isScrolled ? 'py-1' : 'py-2'
          }`}
        >
          {/* LOGO */}
          <Link to='/' className='flex items-center flex-shrink-0'>
            <img
              src='/logo/logo1.png'
              alt='HR26 Events Logo'
              className={`object-center transition-all duration-300 ${
                isScrolled
                  ? 'h-14 md:h-16 lg:h-20 w-20 md:w-28 lg:w-28'
                  : 'h-20 lg:h-22 w-28 lg:w-30'
              }`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav
            className={`hidden lg:flex items-center font-medium tracking-wide transition-all duration-300 ${
              isScrolled
                ? 'gap-6 xl:gap-12 text-[16px] xl:text-[18px]'
                : 'gap-8 xl:gap-16 text-[17px] xl:text-[20px]'
            }`}
          >
            <NavLink to='/' className={activeClass}>
              Home
            </NavLink>

            {/* DECORATIONS DROPDOWN */}
            <div className='relative group'>
              <span className='flex items-center gap-1 cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300'>
                Decorations
                <ChevronDown
                  size={18}
                  className='group-hover:rotate-180 transition-transform duration-300'
                />
              </span>

              <div className='absolute left-0 top-6 hidden group-hover:block bg-white border border-gray-100 shadow-2xl rounded-2xl w-80 py-3 z-50'>
                {workList.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-[17px] hover:bg-pink-50 hover:text-pink-700 transition ${
                        isActive
                          ? 'text-pink-700 font-semibold'
                          : 'text-gray-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to='/gallery' className={activeClass}>
              Gallery
            </NavLink>

            <NavLink to='/about-us' className={activeClass}>
              About
            </NavLink>

            <NavLink to='/contact-us' className={activeClass}>
              Get Quote
            </NavLink>
          </nav>

          {/* WHATSAPP BUTTON */}
          <div className='hidden lg:block'>
            <Link
              to='https://wa.me/9896860316'
              target='_blank'
              className={`flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'px-5 py-2 text-[15px]' : 'px-7 py-3 text-[17px]'
              }`}
            >
              <FaWhatsapp className='text-2xl' />
              Instant Reply
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMenu}
            className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition'
          >
            {menuOpen ? (
              <X size={30} className='text-pink-700' />
            ) : (
              <Menu size={30} className='text-pink-700' />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className='lg:hidden bg-white border-t shadow-md tracking-wide text-gray-800'>
          <nav className='flex flex-col px-6 py-6 space-y-5 text-lg font-medium'>
            <NavLink to='/' onClick={toggleMenu} className={activeClass}>
              Home
            </NavLink>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setOpenWork(!openWork)}
                className='flex items-center justify-between w-full'
              >
                Decorations
                <ChevronDown
                  className={`transition ${openWork ? 'rotate-180' : ''}`}
                />
              </button>

              {openWork && (
                <div className='pl-4 mt-3 space-y-2 text-[17px] text-gray-800'>
                  {workList.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.link}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block ${isActive ? 'text-pink-600 font-semibold' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to='/gallery' onClick={toggleMenu} className={activeClass}>
              Gallery
            </NavLink>

            <NavLink
              to='/about-us'
              onClick={toggleMenu}
              className={activeClass}
            >
              About
            </NavLink>

            <NavLink
              to='/contact-us'
              onClick={toggleMenu}
              className={activeClass}
            >
              Get-Quote
            </NavLink>

            <div className='flex items-center gap-6 pt-4'>
              <FaInstagram className='text-2xl hover:text-pink-600' />
              <FaWhatsapp className='text-2xl hover:text-pink-600' />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
