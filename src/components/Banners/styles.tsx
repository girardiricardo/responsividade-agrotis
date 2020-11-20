import styled from 'styled-components';

export const Wrapper  = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  > div {
    margin-top: 40px;

    > img {
      margin: 0 15px;
      height: 100px;
      background-color: white;
      border-radius: 6px;
    }
  }
`