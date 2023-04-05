import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="container content">
      <Outlet />
    </div>
  );
}

export default Main;
