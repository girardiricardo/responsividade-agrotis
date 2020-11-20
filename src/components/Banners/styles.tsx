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

  /* Mobile */
  @media (min-width: 320px) and (max-width: 480px) {
    color: #1A1727;
    background-color: #fff;
    padding: 40px 0;

    > div {
      display: flex;
      flex-direction:  column;

      > img {
        height: 90px;
        margin: 15px 0;
      }
    }
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1024px) {
    > div {
      width: 100%;
      display: grid;
      justify-content: center;
      grid-template-columns: 150px 150px 150px 150px;
      grid-row-gap: 20px;
      padding: 0 20px;
    }
  }
`