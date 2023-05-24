import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'styles/index.css';
import Home from './home';
import DiscoverVacancies from './discoverVacancies';
import HireTalent from './hireTalent';
import About from './about';
import Contact from './contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'discoverVacancies',
      element: <DiscoverVacancies />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'hireTalent',
      element: <HireTalent />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
  ]);
  return (
      <main className="w-[100%] bg-red-100">
        <RouterProvider router={router} />
      </main>
  );
}

export default App;
