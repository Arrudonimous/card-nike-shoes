import { Container } from './styles';
import Shoes from '../../assets/images/tenis.png';

export default function RightSide() {
  return (
    <Container>
      <img src={Shoes} alt="Tênis" />
    </Container>
  );
}
