import React from 'react';

const ServiceBanner = ({ subtitle, backgroundImage }) => {
  return (
    <section
      className="mt-36 lg:mt-40
        relative w-full
        min-h-[300px] sm:min-h-[340px] lg:min-h-[380px]
        flex items-center justify-center
        overflow-hidden
        bg-center bg-cover bg-no-repeat
        m-0 p-0
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/50" />

      {/* Bottom Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Content */}
      <div
        className="
          relative z-10
          w-full max-w-5xl
          px-5 sm:px-8 lg:px-12
          py-0
          text-center
          m-0
        "
      >
        {/* Small Label */}
        <span
          className="
            inline-block
            mb-3 sm:mb-4
            text-xs sm:text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-pink-300
          "
        >
          Premium Event Decoration
        </span>

        {/* Heading */}
        <h1
          className="
            m-0
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            drop-shadow-lg
          "
        >
          Wow Moments Decor
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-4">
          <span className="w-10 sm:w-16 h-[2px] bg-pink-500 rounded-full" />

          <span className="w-2 h-2 rounded-full bg-pink-300" />

          <span className="w-10 sm:w-16 h-[2px] bg-pink-500 rounded-full" />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="
              m-0
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              text-gray-200
              font-medium
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-black/30
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
};

export default ServiceBanner;