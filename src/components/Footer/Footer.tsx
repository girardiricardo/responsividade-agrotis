import React from 'react';
import agrotisLogo from '../../assets/logo2.png'

import { Wrapper } from './styles';

const Banners: React.FC = () => {
  return <Wrapper>
    <span>Todos os direitos reservados.</span>
    <img src={agrotisLogo} alt="Agrotis Logo" />
  </Wrapper>;
}

export default Banners;