import styled from 'styled-components';

export const Wrapper  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 500px;

  > img {
    width: 500px;
  }

  > div {
    width: 400px;
    margin-left: 10px;

    > p {
      font-weight: 400;
    }

    > button {
      padding: 0 22px;
      height: 35px;
    }
  }
`