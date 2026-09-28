import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { birthday } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
// import ServiceBanner from '../components/ServiceBanner'
import { Helmet } from 'react-helmet';

const Birthday = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Birthday Decoration in Noida | Balloon Decor | 9896860316
        </title>

        <meta
          name='description'
          content='Book the best birthday decoration in Noida with Wow Moments Decor. Balloon decoration, room decoration, surprise birthday setups, customized themes, hotel room décor & affordable birthday party packages.'
        />

        <meta
          name='keywords'
          content='birthday decoration in Noida, birthday balloon decoration in Noida, birthday room decoration in Noida, birthday party decoration in Noida, hotel room birthday decoration in Noida, surprise birthday decoration in Noida, birthday decorator in Noida, birthday theme decoration in Noida, Wow Moments Decor'
        />

        <meta name='author' content='Wow Moments Decor' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />

        {/* Canonical */}
        <link
          rel='canonical'
          href='https://www.wowmomentsdecor.com/birthday-decoration'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Birthday Decoration in Noida | Wow Moments Decor'
        />

        <meta
          property='og:description'
          content='Celebrate your special day with premium birthday decoration in Noida. Balloon decoration, room décor, hotel room decoration, customized themes & surprise birthday setups.'
        />

        <meta
          property='og:image'
          content='https://www.wowmomentsdecor.com/birthday/birthday1.jpeg'
        />

        <meta
          property='og:url'
          content='https://www.wowmomentsdecor.com/birthday-decoration'
        />

        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Wow Moments Decor' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          name='twitter:title'
          content='Birthday Decoration in Noida | Wow Moments Decor'
        />

        <meta
          name='twitter:description'
          content='Book premium birthday decoration in Noida. Balloon decoration, room décor, hotel room decoration, customized birthday themes & surprise party setups.'
        />

        <meta
          name='twitter:image'
          content='https://www.wowmomentsdecor.com/birthday/birthday1.jpeg'
        />
      </Helmet>

      <div>
        <ServiceBanner
          title='Birthday Decoration'
          subtitle='Home › Birthday Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={birthday} title='Birthday Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Birthday;
