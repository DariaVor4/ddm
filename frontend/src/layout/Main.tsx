import { Outlet } from 'react-router-dom';
import { Container, Content } from 'rsuite';

function Main() {
  return (
    <Container style={{ margin: '2rem' }}>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default Main;
