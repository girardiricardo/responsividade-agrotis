import React from 'react';
import agrotisLogo from '../../assets/logo.png'

import { Wrapper } from './styles';

const Banners: React.FC = () => {
  return <Wrapper>
    <h2>Clientes</h2>
    <div>
      <img src={agrotisLogo} alt="Agrotis Logo" />
      <img src={agrotisLogo} alt="Agrotis Logo" />
      <img src={agrotisLogo} alt="Agrotis Logo" />
      <img src={agrotisLogo} alt="Agrotis Logo" />
      <img src={agrotisLogo} alt="Agrotis Logo" />
      <img src={agrotisLogo} alt="Agrotis Logo" />
      <img src={agrotisLogo} alt="Agrotis Logo" />
    </div>
  </Wrapper>;
}

export default Banners;