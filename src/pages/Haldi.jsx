import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { haldi } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const Haldi = () => {
  const bannerImage = '/gallery/haldi1.jpg';
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Haldi Decoration in Gurgaon | Wedding Decor | 9896860316</title>

        <meta
          name='description'
          content='Book the best Haldi decoration in Gurgaon with Wow Moments Decor. We provide floral Haldi décor, marigold decoration, Haldi backdrops, bride & groom seating, and customized Haldi ceremony setups in Gurgaon.'
        />

        <meta
          name='keywords'
          content='Haldi decoration in Gurgaon, Haldi ceremony decoration in Gurgaon, Haldi backdrop decoration in Gurgaon, floral Haldi decoration in Gurgaon, marigold Haldi decoration in Gurgaon, wedding Haldi decoration in Gurgaon, bride and groom Haldi decoration in Gurgaon, Haldi event decorator in Gurgaon, Haldi stage decoration in Gurgaon, Haldi party decoration in Gurgaon, Haldi setup in Gurgaon, Wow Moments Decor'
        />

        <meta name='author' content='Wow Moments Decor' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />

        {/* Canonical */}
        <link
          rel='canonical'
          href='https://www.wowmomentsdecor.com/haldi-decoration'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Haldi Decoration in Gurgaon | Wow Moments Decor'
        />

        <meta
          property='og:description'
          content='Celebrate your Haldi ceremony with premium floral decoration, marigold themes, elegant backdrops, bride & groom seating, and customized Haldi decoration in Gurgaon.'
        />

        <meta
          property='og:image'
          content='https://www.wowmomentsdecor.com/haldi/haldi1.jpeg'
        />

        <meta
          property='og:url'
          content='https://www.wowmomentsdecor.com/haldi-decoration'
        />

        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Wow Moments Decor' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          name='twitter:title'
          content='Haldi Decoration in Gurgaon | Wow Moments Decor'
        />

        <meta
          name='twitter:description'
          content='Book premium Haldi decoration in Gurgaon. Floral décor, marigold themes, Haldi backdrops, bride & groom seating, and customized Haldi ceremony setups.'
        />

        <meta
          name='twitter:image'
          content='https://www.wowmomentsdecor.com/haldi/haldi1.jpeg'
        />
      </Helmet>
      <div>
        <ServiceBanner
          title='Haldi Decoration'
          subtitle='Home › Haldi Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={haldi} title='Haldi Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Haldi;
