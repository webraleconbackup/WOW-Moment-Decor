import React from 'react';
import { Phone, MapPin, Clock3 } from 'lucide-react';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-white via-[#f8f7f2] to-[#eef3ff] px-4 lg:px-20 border-t border-[#d6c28a] relative overflow-hidden text-pink-700'>
      <div className='max-w-8xl mx-auto py-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
          {/* Logo */}
          <div className='lg:col-span-2'>
            <Link to='/' className='flex items-center flex-shrink-0'>
              <img
                src='/logo/logo1.png'
                alt='HR26 Events Logo'
                className='h-20 md:h-20 lg:h-28 w-28 md:w-36 object-center'
              />
            </Link>

            <p className='mt-5 text-black font-semibold leading-8'>
              Creating beautiful moments with premium balloon decorations and hassle-free event styling for every special celebration.
            </p>
          </div>

          {/* Quick Links + Services (Same Row on Mobile) */}
          <div className='md:col-span-2 lg:col-span-2 grid grid-cols-2'>
            {/* Quick Links */}
            <div>
              <h3 className='font-bold text-lg mb-5 text-pink-700'>
                Quick Links
              </h3>

              <ul className='space-y-3 text-black font-semibold'>
                <li className='hover:text-pink-700 cursor-pointer'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-pink-700 cursor-pointer'>
                  <Link to='/about-us'>About Us</Link>
                </li>
                {/* <li className="hover:text-pink-700 cursor-pointer">
                  Packages
                </li> */}

                <li className='hover:text-pink-700 cursor-pointer'>
                  <Link to='/gallery'>Gallery</Link>
                </li>

                <li className='hover:text-pink-700 cursor-pointer'>
                  <Link to='/contact-us'>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className='font-bold text-lg mb-5 text-pink-700'>
                Our Services
              </h3>

              <ul className='space-y-3 text-black font-semibold'>
                <li>
                  <Link to='/birthday-decoration'>Birthday Decoration</Link>
                </li>
                <li>
                  <Link to='/anniversary-decoration'>Anniversary Decoration</Link>
                </li>
                <li>
                  <Link to='/baby-shower-decoration'>Baby Shower Welcome</Link>
                </li>
                {/* <li>Baby Shower</li> */}
                <li>
                  <Link to='/just-married-decoration'>
                    Just Married Decoration
                  </Link>
                </li>
                <li>
                  <Link to='/haldi-decoration'>Haldi Decoration</Link>
                </li>
                <li>
                  <Link to='/festival-decoration'>Festival Decoration</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-bold text-lg mb-5 text-pink-700'>Contact Us</h3>

            <div className='space-y-4 text-black font-semibold'>
              <div className='flex gap-3'>
                <Phone className='text-pink-700 mt-1' size={18} />
                <span>+91 9896860316</span>
              </div>

              <div className='flex gap-3'>
                <MapPin className='text-pink-700 mt-1 shrink-0' size={22} />
                <span>House no 815 gf, Block N, Mayfield Garden, Sector 51, Gurugram, Samaspur, Haryana 122018</span>
              </div>
            </div>

            <div className='flex gap-3 mt-7'>
              {[FaFacebookF, FaInstagram, FaWhatsapp, FaPinterestP].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className='w-11 h-11 rounded-full bg-white border border-[#d6c28a] text-pink-700 shadow-md flex justify-center items-center hover:bg-pink-700 hover:text-white duration-300 cursor-pointer'
                  >
                    <Icon />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Working Hours */}
          {/* <div>
            <h3 className="font-bold text-lg mb-5 text-pink-700">
              Working Hours
            </h3>

            <div className="bg-gradient-to-br from-[#fff9ec] to-white rounded-3xl p-7 shadow-xl border border-[#e4d3a3]">
              <Clock3 className="text-pink-700 mb-3" size={30} />

              <h2 className="text-3xl font-black text-pink-700">
                24×7
              </h2>

              <p className="font-semibold text-[#9a7a1f]">
                Open Everyday
              </p>

              <p className="mt-4 text-black font-semibold">
                Available all day for balloon &amp; event decoration
                services.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom */}
      <div className='border-t border-[#dccb9a] pb-14 md:pb-0'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex justify-center items-center'>
          <p className='text-[#6b7280] text-xs md:text-sm text-center'>
            © Wow Moment Decor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
