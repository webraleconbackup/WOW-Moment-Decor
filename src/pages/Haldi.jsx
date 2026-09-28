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
        <title>Haldi Decoration in Noida | Wedding Decor | 9896860316</title>

        <meta
          name='description'
          content='Book the best Haldi decoration in Noida with Wow Moments Decor. We provide floral Haldi décor, marigold decoration, Haldi backdrops, bride & groom seating, and customized Haldi ceremony setups in Noida.'
        />

        <meta
          name='keywords'
          content='Haldi decoration in Noida, Haldi ceremony decoration in Noida, Haldi backdrop decoration in Noida, floral Haldi decoration in Noida, marigold Haldi decoration in Noida, wedding Haldi decoration in Noida, bride and groom Haldi decoration in Noida, Haldi event decorator in Noida, Haldi stage decoration in Noida, Haldi party decoration in Noida, Haldi setup in Noida, Wow Moments Decor'
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
          content='Haldi Decoration in Noida | Wow Moments Decor'
        />

        <meta
          property='og:description'
          content='Celebrate your Haldi ceremony with premium floral decoration, marigold themes, elegant backdrops, bride & groom seating, and customized Haldi decoration in Noida.'
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
          content='Haldi Decoration in Noida | Wow Moments Decor'
        />

        <meta
          name='twitter:description'
          content='Book premium Haldi decoration in Noida. Floral décor, marigold themes, Haldi backdrops, bride & groom seating, and customized Haldi ceremony setups.'
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
