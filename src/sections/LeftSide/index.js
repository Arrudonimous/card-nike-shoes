import { Container, Header, Content } from './styles';

export default function LeftSide() {
  return (
    <Container>
      <Header>
        <span>DevMentor.</span>
      </Header>

      <Content>
        <h1>
          Lançamento
          Nike Air.
        </h1>
        <small>
          O Tênis do futuro.
        </small>
        <small>
          O futuro a um passo do seu alcance!
        </small>
        <a href="https://www.nike.com.br/tenis-nike-air-force-1-07-lv8-masculino-023326.html?cor=51">Quero Conhecer!</a>
      </Content>
    </Container>
  );
}
