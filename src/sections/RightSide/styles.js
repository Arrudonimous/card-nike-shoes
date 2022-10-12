import styled from 'styled-components';
import Background from '../../assets/images/bg.png';

export const Container = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
  background-image: url(${Background});
  background-size: cover;

  img{
    width: 488px;
    height: 280px;
    transition: transform 0.4s ease-in;
    &:hover{
      cursor: pointer;
      transform: rotate(3deg) scale(1.5)
    }
  }

`;
