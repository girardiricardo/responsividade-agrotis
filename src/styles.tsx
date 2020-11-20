import styled from 'styled-components'
import backgroundImage from './assets/background.png'

export const Wrapper = styled.div`
  width: calc(100% - 30px);
  height: calc(100vh - 30px);
  padding: 15px;
  background: url(${backgroundImage}) repeat;
  color: #fff;
`