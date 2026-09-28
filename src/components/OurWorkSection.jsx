import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    img: '/birthday/birthday12.jpeg',
    title: 'Birthday Decoration',
    link: '/birthday-decoration',
  },
  {
    img: '/anniversary/anniversary6.jpeg',
    title: 'Anniversary Decoration',
    link: '/anniversary-decoration',
  },
  {
    img: '/baby/baby14.jpeg',
    title: 'Baby Shower Decoration',
    link: '/baby-shower-decoration',
  },
  // {
  //   img: '/haldi/haldi3.jpeg',
  //   title: 'Haldi Decoration',
  //   link: '/haldi-decoration',
  // },
  {
    img: '/justmarried/married1.jpg',
    title: 'Just Married Decoration',
    link: '/just-married-decoration',
  },
  // {
  //   img: '/festival/ganesh1.jpg',
  //   title: 'Ganesh Chaturthi Decoration',
  //   link: '/festival-decoration',
  // },
];

export default function OurWorkSection() {
  return (
    <section className='bg-pink-700 py-12 lg:py-16'>
      <div className='max-w-[1600px] mx-auto px-4 lg:px-12'>
        {/* Heading */}
        <h2 className='text-center text-3xl md:text-5xl lg:text-6xl font-extrabold text-white'>
          Our Services
        </h2>

        {/* Divider */}
        <div className='flex justify-center py-5 mb-10'>
          <div className='flex items-center w-full max-w-xl'>
            <div className='flex-1 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-[#0B2154]' />

            <div className='mx-5 relative'>
              <div className='w-5 h-5 rounded-full bg-[#0B2154] border-[4px] border-orange-500'></div>
              <div className='absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-30'></div>
            </div>

            <div className='flex-1 h-[2px] bg-gradient-to-l from-transparent via-orange-500 to-[#0B2154]' />
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl overflow-hidden shadow-xl border border-orange-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
            >
              {/* Image */}
              <Link to={item.link}>
                <div className='overflow-hidden h-80'>
                  <img
                    src={item.img}
                    alt={item.title}
                    className='w-full h-full object-center transition duration-500 hover:scale-110'
                  />
                </div>
              </Link>

              {/* Content */}
              <div className='p-6 text-center'>
                <h3 className='text-xl lg:text-2xl font-bold text-gray-900'>
                  <Link to={item.link}>{item.title}</Link>
                </h3>

                {/* Buttons */}
                <div className='mt-6 flex gap-3'>
                  <Link to={item.link} className='flex-1'>
                    <button className='w-full cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg'>
                      View More
                    </button>
                  </Link>

                  <a
                   href={`https://wa.me/919896860316?text=${encodeURIComponent(
                      `Hello! I'm interested in ${item.title} Kindly share more details.`,
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1'
                  >
                    <button className='w-full cursor-pointer bg-[#0B2154] hover:bg-[#08183f] text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg'>
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
