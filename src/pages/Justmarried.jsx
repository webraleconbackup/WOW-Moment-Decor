import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { married } from '../data';
import ServiceBanner from '../components/ServiceBanner';
// import Enquiry from '../components/Enquiry';
import { Helmet } from 'react-helmet';

const Justmarried = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Just Married Room Decoration in Noida | Romantic Decor | 9896860316
        </title>

        <meta
          name='description'
          content='Book the best Just Married room decoration in Noida with Wow Moments Decor. We provide romantic balloon decoration, flower decoration, bed decoration, honeymoon room décor, and surprise wedding night setups in Noida.'
        />

        <meta
          name='keywords'
          content='Just Married decoration in Noida, Just Married room decoration in Noida, wedding room decoration in Noida, honeymoon room decoration in Noida, first night decoration in Noida, romantic room decoration in Noida, romantic balloon decoration in Noida, flower decoration in Noida, bed decoration in Noida, newly married room decoration in Noida, surprise wedding night decoration in Noida, Wow Moments Decor'
        />

        <meta name='author' content='Wow Moments Decor' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />

        {/* Canonical */}
        <link
          rel='canonical'
          href='https://www.wowmomentsdecor.com/just-married-decoration'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Just Married Room Decoration in Noida | Wow Moments Decor'
        />

        <meta
          property='og:description'
          content='Celebrate your new beginning with premium Just Married room decoration in Noida. Romantic balloon décor, flower decoration, bed decoration, honeymoon room décor, and surprise wedding night setups.'
        />

        <meta
          property='og:image'
          content='https://www.wowmomentsdecor.com/justmarried/justmarried1.jpeg'
        />

        <meta
          property='og:url'
          content='https://www.wowmomentsdecor.com/just-married-decoration'
        />

        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Wow Moments Decor' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          name='twitter:title'
          content='Just Married Room Decoration in Noida | Wow Moments Decor'
        />

        <meta
          name='twitter:description'
          content='Book premium Just Married room decoration in Noida. Romantic balloon décor, flower decoration, honeymoon room décor, bed decoration, and surprise wedding night setups.'
        />

        <meta
          name='twitter:image'
          content='https://www.wowmomentsdecor.com/justmarried/justmarried1.jpeg'
        />
      </Helmet>
      <div>
        <ServiceBanner
          title='Anniversary Decoration'
          subtitle='Home › Just Married Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={married} title='Just Married Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Justmarried;
