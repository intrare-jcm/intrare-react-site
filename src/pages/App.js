import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'styles/index.css';
import Home from './home';
import DiscoverVacancies from './discoverVacancies';
import HireTalent from './hireTalent';
import About from './about';
import Contact from './contact';
import PoliciesAndPrivacy from "./policiesAndPrivacy";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'empresas',
      element: <HireTalent />,
    },
    {
      path: 'sobre-nosotros',
      element: <About />,
    },
    {
      path: 'talento',

      element: <DiscoverVacancies />,
    },
    {
      path: 'contacto',
      element: <Contact />,
    },
    {
      path: 'politica-de-privacidad',
      element: <PoliciesAndPrivacy />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
