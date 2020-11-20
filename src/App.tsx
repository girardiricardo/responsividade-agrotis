import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Banners from './components/Banners';
import Footer from './components/Footer';

import { Wrapper } from './styles'

function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Banners />
      <Footer />
    </Wrapper>
  );
}

export default App;
