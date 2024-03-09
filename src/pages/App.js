import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'styles/index.css';
import DiscoverVacancies from './discoverVacancies';
import HireTalent from './hireTalent';
import About from './about';
import Contact from './contact';
import PoliciesAndPrivacy from "./policiesAndPrivacy";
import Home from "./home";
import AuroraArticle from './auroraArticle';

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
    },
    {
      path: 'premio-aurora-tech',
      element: <AuroraArticle />,
    }
  ]);
  return (
      <main className="w-[100%] bg-red-100">
        <RouterProvider router={router} />
      </main>
  );
}

export default App;
