import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';

import Notifier from 'containers/Notifier';
import Routes from 'routes';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const App = () => 
  <HelmetProvider>
    <SnackbarProvider>
      <Helmet>
        <title>Demo Ecommerce</title>
      </Helmet>
      <Navbar />
      <Routes />
      <Footer />
      <Notifier />
    </SnackbarProvider>
  </HelmetProvider>

export default App;
