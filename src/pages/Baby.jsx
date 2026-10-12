import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { baby } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const Baby = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Baby Shower Decoration in Gurgaon | Balloon Decor | 9896860316
  </title>

  <meta
    name="description"
    content="Book the best baby shower decoration in Gurgaon with Wow Moments Decor. Elegant balloon decoration, baby shower themes, backdrop decoration, welcome board & customized baby shower setups."
  />

  <meta
    name="keywords"
    content="baby shower decoration in Gurgaon, baby shower balloon decoration in Gurgaon, baby shower decorator in Gurgaon, baby shower theme decoration in Gurgaon, baby shower backdrop decoration in Gurgaon, baby shower event decoration in Gurgaon, mom to be decoration in Gurgaon, baby shower party decoration in Gurgaon, Wow Moments Decor"
  />

  <meta name="author" content="Wow Moments Decor" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.wowmomentsdecor.com/baby-shower-decoration"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Baby Shower Decoration in Gurgaon | Wow Moments Decor"
  />

  <meta
    property="og:description"
    content="Celebrate your baby shower with premium balloon decoration, elegant backdrops, customized themes, welcome boards, and beautiful baby shower décor in Gurgaon."
  />

  <meta
    property="og:image"
    content="https://www.wowmomentsdecor.com/baby/baby1.jpeg"
  />

  <meta
    property="og:url"
    content="https://www.wowmomentsdecor.com/baby-shower-decoration"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Wow Moments Decor" />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Baby Shower Decoration in Gurgaon | Wow Moments Decor"
  />

  <meta
    name="twitter:description"
    content="Book premium baby shower decoration in Gurgaon. Balloon décor, customized baby shower themes, elegant backdrops, welcome boards & complete party decoration."
  />

  <meta
    name="twitter:image"
    content="https://www.wowmomentsdecor.com/baby/baby1.jpeg"
  />
</Helmet>
      <div>
        <ServiceBanner
          title='Baby Shower Decoration'
          subtitle='Home › Baby Shower Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={baby} title='Baby Shower Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Baby;
