import React, { FC, Fragment, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserCurrentQuery } from '../../api/generated';

const AuthorizedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { data, loading } = useUserCurrentQuery();

  if (loading) {
    return <>Loading...</>;
  }

  if (!data?.userCurrent) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
};

export default AuthorizedRoute;
