import React from 'react';
import Hero from '../components/Hero';
import OurWorkSection from '../components/OurWorkSection';
import ConceptMood from '../components/ConceptMood';
import UpcomingEvents from '../components/Upcomming';
import HomeService from '../components/HomeService';
// import Testimonial from '../components/Testimonial';
// import FollowUs from '../components/FollowUs';
import {
  homeAnniversary,
  homeBaby,
  homeBirthday,
  homefestival,
  homehaldi,
  homemarried,
} from '../data';
// import Enquiry from '../components/Enquiry';
import Banner from '../components/Banner';
import HeroBanner from '../components/HeroBanner';
import FAQ from '../components/FAQ';
import { Helmet } from 'react-helmet';
import Map from '../components/Map';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Balloon Decoration in Gurgaon | Wow Moments Decor</title>

        <meta
          name='description'
          content='Wow Moments Decor offers premium balloon decoration services in Gurgaon. Book birthday, anniversary, baby shower, welcome baby, Haldi, festival, and room decoration with same-day service.'
        />

        <meta
          name='keywords'
          content='balloon decoration Gurgaon, birthday decoration Gurgaon, anniversary decoration Gurgaon, baby welcome decoration Gurgaon, Haldi decoration Gurgaon, festival decoration Gurgaon, room decoration Gurgaon, proposal decoration Gurgaon, event decoration Gurgaon, balloon decorator Gurgaon, Greater Gurgaon decoration, Gurgaon decoration, Wow Moments Decor'
        />

        <meta name='author' content='Wow Moments Decor' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />

        {/* Geo Tags */}
        <meta name='geo.region' content='IN-UP' />
        <meta name='geo.placename' content='Gurgaon' />
        <meta name='geo.position' content='28.544;77.367' />
        <meta name='ICBM' content='28.544,77.367' />

        <meta
          name='address'
          content='1013 Gf Block N Mayfield Garden, Sector 51 Gurgaon, 122003 Uttar Pradesh India'
        />

        {/* Canonical */}
        <link rel='canonical' href='https://www.wowmomentsdecor.com/' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Wow Moments Decor' />
        <meta property='og:locale' content='en_IN' />

        <meta property='og:url' content='https://www.wowmomentsdecor.com/' />

        <meta
          property='og:title'
          content='Balloon Decoration in Gurgaon | Wow Moments Decor'
        />

        <meta
          property='og:description'
          content='Premium balloon decoration services in Gurgaon for birthdays, anniversaries, baby welcome, Haldi, festivals, room decoration and special occasions.'
        />

        <meta
          property='og:image'
          content='https://www.wowmomentsdecor.com/birthday/birthday1.jpeg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          name='twitter:title'
          content='Balloon Decoration in Gurgaon | Wow Moments Decor'
        />

        <meta
          name='twitter:description'
          content='Premium balloon decoration services in Gurgaon. Book birthday, anniversary, baby welcome, Haldi, festival and room decoration.'
        />

        <meta
          name='twitter:image'
          content='https://www.wowmomentsdecor.com/birthday/birthday1.jpeg'
        />

        {/* Local Business Schema */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Wow Moments Decor',
            url: 'https://www.wowmomentsdecor.com',
            telephone: '+919896860316',
            image: 'https://www.wowmomentsdecor.com/birthday/birthday1.jpeg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1013 Gf Block N Mayfield Garden, Sector 51',
              addressLocality: 'Gurgaon',
              addressRegion: 'Uttar Pradesh',
              postalCode: '122003',
              addressCountry: 'IN',
            },
            areaServed: ['Gurgaon'],
          })}
        </script>
      </Helmet>

      <div className='md:hidden'>
        <Hero />
      </div>
      {/* <Banner /> */}

      <div className='hidden md:block'>
        <HeroBanner />
      </div>
      <OurWorkSection />
      {/* <ConceptMood /> */}
      <HomeService title='Baby Decoration' services={homeBaby} />
      <HomeService title='Birthday Decoration' services={homeBirthday} />
      <HomeService title='Anniversary Decoration' services={homeAnniversary} />

      {/* <HomeService title='Haldi / Mehndi Decoration' services={homehaldi} /> */}
      <HomeService title='Just Married Decoration' services={homemarried} />
      {/* <HomeService title='Festival Decoration' services={homefestival} /> */}
      {/* <UpcomingEvents /> */}
      <FAQ />
      <Testimonials />
      <Map />
      {/* <Testimonial /> */}
      {/* <FollowUs images={gallery} title=' Gallery' link="/gallery"/> */}
      {/* <Enquiry /> */}
    </div>
  );
};

export default Home;
