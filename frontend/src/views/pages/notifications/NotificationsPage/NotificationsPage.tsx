import {
  FC, useRef, useState, useLayoutEffect,
} from 'react';
import { Typography } from '@mui/material';
import { NotificationsList } from './NotificationsList.tsx';
import { NotificationDetails } from './NotificationDetails.tsx';

export const NotificationsPage: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  useLayoutEffect(() => setOffsetTop(divRef.current?.offsetTop || 0), []);

  return (
    <>
      <Typography align='center' marginBottom={2} variant='h4'>Уведомления</Typography>
      <div
        ref={divRef}
        className='flex gap-3 grow overflow-visible'
        style={{ maxHeight: `calc(100vh - 1.5rem - ${(offsetTop) || 0}px)` }}
      >
        <NotificationsList />
        <NotificationDetails />
      </div>
    </>
  );
};
