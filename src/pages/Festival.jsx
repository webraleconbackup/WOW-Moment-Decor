import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { festival } from '../data';
import ServiceBanner from '../components/ServiceBanner';
// import Enquiry from '../components/Enquiry';
import { Helmet } from 'react-helmet';

const Festival = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Festival Decoration in Gurgaon | Event Decor | 9896860316</title>

        <meta
          name='description'
          content='Book the best festival decoration in Gurgaon with Wow Moments Decor. Diwali decoration, Ganesh Chaturthi décor, floral decoration, festive lighting, temple decoration & customized festival setups.'
        />

        <meta
          name='keywords'
          content='festival decoration Gurgaon, festive decoration Gurgaon, Diwali decoration Gurgaon, Ganesh Chaturthi decoration Gurgaon, temple decoration Gurgaon, floral decoration Gurgaon, festive lighting Gurgaon, event decoration Gurgaon, festival decorator Gurgaon, Wow Moments Decor'
        />

        <meta name='author' content='Wow Moments Decor' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />

        {/* Canonical */}
        <link
          rel='canonical'
          href='https://www.wowmomentsdecor.com/festival-decoration'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Festival Decoration in Gurgaon | Wow Moments Decor'
        />

        <meta
          property='og:description'
          content='Celebrate every festival with premium festival decoration in Gurgaon. Diwali décor, Ganesh Chaturthi decoration, floral arrangements, temple decoration, festive lighting & customized themes.'
        />

        <meta
          property='og:image'
          content='https://www.wowmomentsdecor.com/festival/festival1.jpeg'
        />

        <meta
          property='og:url'
          content='https://www.wowmomentsdecor.com/festival-decoration'
        />

        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Wow Moments Decor' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          name='twitter:title'
          content='Festival Decoration in Gurgaon | Wow Moments Decor'
        />

        <meta
          name='twitter:description'
          content='Book premium festival decoration in Gurgaon. Diwali decoration, Ganesh Chaturthi décor, floral decoration, temple decoration, festive lighting & customized festival themes.'
        />

        <meta
          name='twitter:image'
          content='https://www.wowmomentsdecor.com/festival/festival1.jpeg'
        />
      </Helmet>

      <div>
        <ServiceBanner
          title='Guruji Satsang'
          subtitle='Home › Guruji Satsang'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={festival} title='Festival Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Festival;
