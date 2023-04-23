import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'rsuite';
import { Icon } from '@rsuite/icons';
import {
  BsPatchQuestion, GrUserWorker, IoSchoolSharp, MdLogout, MdOutlineSecurity,
} from 'react-icons/all';
import useMainStore from '../store/main.store';
import { AppRoutesEnum } from '../views/routes/app-routes';
import { GUserEntity, GUserRoleEnum, useUserCurrentQuery } from '../api/generated';
import { getRole } from '../core/roles-checker';
import app from '../core/app';
import getUserInitials from '../core/get-user-initials';

const UserIcon: Record<GUserRoleEnum, JSX.Element> = {
  [GUserRoleEnum.Admin]: <Icon as={MdOutlineSecurity} />,
  [GUserRoleEnum.Employee]: <Icon as={GrUserWorker} />,
  [GUserRoleEnum.Student]: <Icon as={IoSchoolSharp} />,
  [GUserRoleEnum.Any]: <Icon as={BsPatchQuestion} />,
} as const;

const UserNavItems: Record<GUserRoleEnum, JSX.Element> = {
  [GUserRoleEnum.Admin]: <></>,
  [GUserRoleEnum.Employee]: <></>,
  [GUserRoleEnum.Student]: <></>,
  [GUserRoleEnum.Any]: (
    <>
      <Nav.Item as={Link} to={AppRoutesEnum.Login}>Вход</Nav.Item>
      <Nav.Item as={Link} to={AppRoutesEnum.Registration}>Регистрация</Nav.Item>
    </>
  ),
} as const;

function Header() {
  const { isDarkMode, toggleDarkMode } = useMainStore();
  const { data } = useUserCurrentQuery();

  return (
    <Navbar className='grow'>
      <Navbar.Brand as={Link} to={AppRoutesEnum.Home}>Визовый центр ВолгГТУ</Navbar.Brand>
      <Nav pullRight>
        <Nav.Item onClick={toggleDarkMode}>{isDarkMode ? '🌞' : '🌑'}</Nav.Item>
        {UserNavItems[getRole(data?.userCurrent.roles)]}
        {data?.userCurrent.user && (
        <>
          <Nav.Item as={Link} to={AppRoutesEnum.Profile} icon={UserIcon[getRole(data.userCurrent.roles)]}>
            {getUserInitials(data.userCurrent.user as GUserEntity)}
          </Nav.Item>
          <Nav.Item onClick={app.logout} icon={<Icon as={MdLogout} />}>Выйти</Nav.Item>
        </>
        )}
      </Nav>
    </Navbar>
  );
}

export default Header;
