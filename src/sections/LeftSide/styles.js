import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: white;
`;

export const Header = styled.header`
  
  margin: 33px 37px;
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.div`
  margin-left: 94px;
  margin-top: 120px;

  h1{
    font-size: 61px;
    font-weight: bold;
    margin-bottom: 18px;
  }

  small{
    font-size: 16px;
    display: block;
    font-weight: 400;
    opacity: 0.5;

    & + small{
      margin-top: 4px;
      margin-bottom: 40px;
    }
  }

  a{
    padding: 16px 22px;
    text-decoration: none;
    background-color:  #151823;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid #151823;
    transition: background 0.5s ease-in;

    &:hover{
      background-color: white;
      color: #151823;
    }
  }
`;
