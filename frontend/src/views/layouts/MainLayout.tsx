import { FC } from 'react';
import { Container, Content } from 'rsuite';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => (
  <Container style={{ margin: '2rem' }}>
    <Content>
      <Outlet />
    </Content>
  </Container>
);

export default MainLayout;
