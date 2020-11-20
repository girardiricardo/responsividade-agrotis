import styled from 'styled-components';

export const Wrapper  = styled.div`
  padding: 50px 50px 0 50px;
  display: flex;
  justify-content: space-between;

  > ul {
    display: flex;
    padding: 0;
    margin: 0;

    > li {
      list-style: none;
      padding: 0;
      margin: 0;

      > button {
        margin-left: 10px;
        padding: 0 22px;
        height: 40px;
        
        border: 0;
        background-color: transparent;
        border-radius: 6px 0 6px 0;
        transition: opacity 200ms;
        color: white;
        font-weight: 500;
        font-size: 14px;

        &:hover {
          opacity: 0.8;
          transition: opacity 200ms;
        }
      }
    }
  }

`