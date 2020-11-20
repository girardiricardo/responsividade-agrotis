import styled from 'styled-components';

export const Wrapper  = styled.div`
  width: calc(100% - 30px);
  padding: 15px;
  height: 120px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c2054;

  > span {
    font-size: 14px;
  }

  > img {
    margin: 0 15px;
    height: 30px;
    border-radius: 6px;
  }
`