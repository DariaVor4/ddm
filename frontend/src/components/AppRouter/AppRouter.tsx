import { Route, Routes } from 'react-router-dom';
import Main from '../../layout/Main';
import { AppRoutes } from './app-routes';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Main />}>
        { AppRoutes.map(({ element, path }) => (
          <Route element={element} path={path} key={path} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRouter;
