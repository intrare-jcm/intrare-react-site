import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <main className="w-[100%] overscroll-x-none">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
