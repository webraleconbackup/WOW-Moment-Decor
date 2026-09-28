import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Birthday from '../pages/Birthday';
import Gallery from '../components/Gallery';
import Anniversary from '../pages/Anniversary';
import ContactUs from '../pages/ContactUs';
import Baby from '../pages/Baby';
import Haldi from '../pages/Haldi';
import Justmarried from '../pages/Justmarried';
// import BrideToBe from '../pages/BrideToBe';
import Festival from '../pages/Festival';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/birthday-decoration',
        element: <Birthday />,
      },
      {
        path: '/anniversary-decoration',
        element: <Anniversary />,
      },
      {
        path: '/baby-shower-decoration',
        element: <Baby />,
      },
      {
        path: '/haldi-decoration',
        element: <Haldi />,
      },
      {
        path: '/just-married-decoration',
        element: <Justmarried />,
      },
      // {
      //   path: '/bride-to-be-decoration',
      //   element: <BrideToBe />,
      // },
      {
        path: '/festival-decoration',
        element: <Festival />,
      },

      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/about-us',
        element: <About />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
]);

export default Router;
