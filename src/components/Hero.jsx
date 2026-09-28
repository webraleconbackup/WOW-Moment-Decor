import { MessageCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/birthday/birthday6.jpeg',
    title: 'Birthday Decoration',
    service: 'Birthday Decoration',
  },
  {
    image: '/birthday/birthday12.jpeg',
    title: 'Birthday Decoration',
    service: 'Birthday Decoration',
  },
  {
    image: '/baby/baby10.jpeg',
    title: 'Baby Welcome Decoration',
    service: 'Baby Welcome Decoration',
  },
  {
    image: '/baby/baby20.jpeg',
    title: 'Baby Welcome Decoration',
    service: 'Baby Welcome Decoration',
  },
  {
    image: '/baby/baby13.jpeg',
    title: 'Baby Welcome Decoration',
    service: 'Baby Welcome Decoration',
  },
  {
    image: '/anniversary/anniversary6.jpeg',
    title: 'Anniversary Decoration',
    service: 'Anniversary Decoration',
  },
];

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 mt-36'>
      {/* Background */}
      <div className='absolute -top-20 -left-20 w-72 h-72 rounded-full bg-pink-300/20 blur-3xl' />
      <div className='absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl' />

      <div className='mx-auto max-w-8xl px-4 lg:px-10 py-6 lg:py-10'>
        {/* Mobile: Image First | Desktop: Content First */}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center'>
          {/* Slider */}
          <div className='order-1 lg:order-2 w-full'>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop
              className='rounded-md lg:rounded-3xl overflow-hidden shadow-2xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px]'
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className='relative w-full h-full'>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      draggable={false}
                      className='absolute inset-0 w-full h-full object-center'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

                    <div className='absolute bottom-6 lg:bottom-12 left-5 right-5 z-10'>
                      <h2 className='text-white text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg'>
                        {slide.title}
                      </h2>

                      <a
                        href={`https://wa.me/919896860316?text=${encodeURIComponent(
                          `Hi Wow Moments Decor! I want to book ${slide.service}. Please share the details.`,
                        )}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-4 inline-flex items-center gap-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 font-semibold shadow-lg transition-all'
                      >
                        <MessageCircle size={20} />
                        Book Now
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Content */}
          <div className='order-2 lg:order-1 w-full text-center lg:text-left'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900'>
              <span className='text-pink-600'> WOW Moment Decor </span> Turn
              Your Special Moments into Beautiful Celebrations
            </h1>

            <p className='mt-6 text-base sm:text-lg text-gray-600 leading-7'>
              Hassle-Free Service • Available 24×7 • Quick Response •
              Professional Team • On-Time Setup • Premium Quality • Customized
              Solutions • Affordable Pricing • Seamless Booking • Complete Event
              Support
            </p>

            <div className='mt-6 overflow-hidden rounde-t-2xl border-pink-100 bg-white shadow-lg'>
              {/* Title */}
              <div className='border-b border-pink-100 bg-white px-5 py-4 sm:px-6'>
                <h3 className='text-xl font-bold text-pink-700 sm:text-2xl'>
                  🎉 Beautiful Decorations for Your Celebrations
                </h3>
              </div>

              {/* Video */}
              <div className='aspect-video w-full overflow-hidden bg-black'>
                <video
                  className='h-full w-full object-cover'
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload='metadata'
                >
                  <source src='/video/video1.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          background: #ec4899;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
