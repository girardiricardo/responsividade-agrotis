import React from 'react';

import { Wrapper } from './styles';

const Banners: React.FC = () => {
  return <Wrapper>
    <h2>agrotis responsividade;</h2>
    <ul>
      <li>
        <button>INÍCIO</button>
      </li>
      <li>
        <button>SOBRE</button>
      </li>
      <li>
        <button>PROJETOS</button>
      </li>
      <li>
        <button>CONTATO</button>
      </li>
    </ul>
  </Wrapper>;
}

export default Banners;