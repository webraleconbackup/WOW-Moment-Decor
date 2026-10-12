import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { anniversary } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const Anniversary = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Anniversary Decoration in Gurgaon | Romantic Room Decor | 9896860316
  </title>

  <meta
    name="description"
    content="Book the best anniversary decoration in Gurgaon with Wow Moments Decor. Romantic room decoration, balloon decoration, candlelight dinner setup, hotel room décor & surprise anniversary packages."
  />

  <meta
    name="keywords"
    content="anniversary decoration in Gurgaon, anniversary room decoration in Gurgaon, romantic room decoration in Gurgaon, anniversary balloon decoration in Gurgaon, candlelight dinner decoration in Gurgaon, hotel room decoration in Gurgaon, surprise anniversary decoration in Gurgaon, anniversary decorator in Gurgaon, Wow Moments Decor"
  />

  <meta name="author" content="Wow Moments Decor" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.wowmomentsdecor.com/anniversary-decoration"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Anniversary Decoration in Gurgaon | Wow Moments Decor"
  />

  <meta
    property="og:description"
    content="Make your anniversary unforgettable with romantic room decoration, balloon décor, rose petals, candlelight setups, hotel room decoration, and surprise anniversary packages in Gurgaon."
  />

  <meta
    property="og:image"
    content="https://www.wowmomentsdecor.com/anniversary/anniversary1.jpeg"
  />

  <meta
    property="og:url"
    content="https://www.wowmomentsdecor.com/anniversary-decoration"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Wow Moments Decor" />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Anniversary Decoration in Gurgaon | Wow Moments Decor"
  />

  <meta
    name="twitter:description"
    content="Book premium anniversary decoration services in Gurgaon. Romantic room décor, balloon decoration, candlelight dinner setup, hotel decoration & surprise anniversary themes."
  />

  <meta
    name="twitter:image"
    content="https://www.wowmomentsdecor.com/anniversary/anniversary1.jpeg"
  />
</Helmet>
      <div>
        <ServiceBanner
          title='Anniversary Decoration'
          subtitle='Home › Anniversary Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={anniversary} title='Anniversary Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Anniversary;
