import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

const ConceptMood = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section
      className="relative w-full text-black bg-white py-20 px-4 lg:px-15 font-[Inter] bg-cover bg-center bg-no-repeat"
     
    >
       {/* style={{ backgroundImage: "url('/banner/banner1.jpg')" }} */}
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/90"></div> */}

      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            className="text-3xl text-pink-700 md:text-5xl font-[Playfair_Display] mb-12 tracking-wide"
            style={{ letterSpacing: '1px' }}
          >
            Why Choose Us
          </h1>

          <p className="text-lg lg:text-2xl leading-[1.8] text-gray-800 font-light md:max-w-[90%]">
            <span className="text-pink-400 italic font-semibold">
              Wow Moments Decor Events
            </span>{" "}
            At Wow Moments Decor, we believe every celebration deserves to be unforgettable. Whether it's a birthday, anniversary, baby shower, proposal, or surprise party, our expert decorators create elegant setups that perfectly match your vision. With premium-quality decorations, creative themes, affordable packages
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-4 text-gray-800 text-lg lg:text-2xl list-disc pl-6">
            <li>Premium Quality</li>
            <li>Customized Themes</li>
            <li>Same Day Service</li>
            <li>No Hidden Charge</li>
            <li>On-Time Setup</li>
          </ul>
        </motion.div>

        {/* RIGHT MOODBOARD SECTION */}
        <div className="relative flex-1 flex justify-center items-center mt-10">

          {/* Rotating Top Image */}
          <motion.img
            src="/about/about4.jpeg"
            alt="Left Top"
            className="absolute top-2 left-8 w-32 h-32 md:w-44 md:h-44 object-center rounded-full shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          />

          {/* Main Center Image with Bounce */}
          <motion.img
            ref={ref}
            src="/about/about5.jpeg"
            alt="Main Decoration"
            className="w-72 h-72 md:w-90 md:h-90 rounded-full object-center shadow-2xl border-4 border-white transition-all duration-700 hover:rotate-[360deg] hover:scale-110"
            initial={{ opacity: 0, y: 100 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 100, damping: 10 },
                  }
                : {}
            }
          />

          {/* Rotating Bottom Image */}
          <motion.img
            src="/about/about2.jpeg"
            alt="Right Bottom"
            className="absolute bottom-8 right-4 w-32 h-32 md:w-44 md:h-44 object-center rounded-full shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ConceptMood;