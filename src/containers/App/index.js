import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Routes from 'routes';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const App = () => 
  <HelmetProvider>
    <Helmet>
      <title>Demo E-commerce</title>
    </Helmet>
    <Navbar />
    <Routes />
    <Footer />
  </HelmetProvider>

export default App;
