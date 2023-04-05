import { Link, useLocation } from 'react-router-dom';
import {
  Button, Nav, Navbar, Stack,
} from 'rsuite';
import visaCenterLogo from '/visa-center-logo.svg';
import { AppRoutesEnum } from './AppRouter/app-routes';
import useMainStore from '../store/main.store';

function Header() {
  const { pathname } = useLocation();
  const { isDarkMode, toggleDarkMode } = useMainStore();

  return (
    <Navbar className='p-3' appearance='inverse'>
      <Navbar.Brand as='img' src={visaCenterLogo} width={64} className='p-0' />
      {/* <img src={visaCenterLogo} height='auto' width='64px' alt='visa-center-logo' /> */}
      <Nav accessKey={pathname}>
        <Nav.Item as={Link} to={AppRoutesEnum.Home} eventKey={AppRoutesEnum.Home} className='text-center'>
          Домашняя страница
        </Nav.Item>
        <Nav.Item as={Link} to={AppRoutesEnum.Login} eventKey={AppRoutesEnum.Login} className='text-center'>
          Ещё одна страница
        </Nav.Item>
        <Nav.Item as={Link} to='/notFoundPage' className='text-center'>
          Ещё одна страница..........
        </Nav.Item>
        <Stack spacing={5}>
          <Button appearance='primary' onClick={toggleDarkMode}>{isDarkMode ? '🌞' : '🌑'}</Button>
          <Button appearance='primary'>Вход</Button>
          <Button appearance='primary'>Регистрация</Button>
        </Stack>
      </Nav>
    </Navbar>
  );
}

export default Header;
