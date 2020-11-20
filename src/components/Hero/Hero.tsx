import React from 'react';
import celular from '../../assets/celular.png'

import { Wrapper } from './styles';

const Banners: React.FC = () => {
  return <Wrapper>
    <img src={celular} alt="Celular" />
    <div>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button>SAIBA MAIS</button>
    </div>
  </Wrapper>;
}

export default Banners;