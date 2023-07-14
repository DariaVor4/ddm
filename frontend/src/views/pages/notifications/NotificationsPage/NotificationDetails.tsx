import { FC, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useNotificationQuery } from '../../../../api/generated.ts';
import { PageLoading } from '../../../../components/PageLoading.tsx';
import { useNotificationIdParam } from './useNotificationIdParam.ts';
import { CacheNotificationsService } from '../../../../api/cache/cache-notifications-service.ts';

export const NotificationDetails: FC = () => {
  const notificationId = useNotificationIdParam();
  const { data: { notification } = {}, loading } = useNotificationQuery({
    variables: { id: notificationId! },
    skip: !notificationId,
  });

  useEffect(() => void CacheNotificationsService.markAsRead(notificationId), [notificationId]);

  return (
    <Paper className='flex flex-col grow p-3 gap-5 self-start'>
      {loading
        ? <PageLoading />
        : notification
          ? (
            <>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                  <Typography>Тема: </Typography>
                  <Typography variant='h5'>{notification.title}</Typography>
                </div>
                <div className='flex flex-col gap-1 whitespace-nowrap'>
                  <Typography>Дата: </Typography>
                  <Typography>{dayjs(notification.createdAt).format('LLLL')}</Typography>
                </div>
              </div>
              <Typography fontWeight='bold'>Содержание: </Typography>
              <Typography>{notification.content}</Typography>
            </>
          )
          : <div className='flex justify-center items-center h-full'>Выберите уведомление</div>}
    </Paper>
  );
};
