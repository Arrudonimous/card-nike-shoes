import GlobalStyles from '../../assets/styles/global';
import LeftSide from '../../sections/LeftSide';
import RightSide from '../../sections/RightSide';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <LeftSide />
        <RightSide />
      </Container>
    </>
  );
}

export default App;
