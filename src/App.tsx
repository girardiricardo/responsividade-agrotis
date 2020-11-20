import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Banners from './components/Banners';

import { Wrapper } from './styles'

function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Banners />
    </Wrapper>
  );
}

export default App;
