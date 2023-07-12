import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import { compact } from 'lodash';
import { FC } from 'react';
import { toast } from 'react-toastify';
import { useNewNotificationSubscription, useNotificationsCountQuery } from '../../api/generated.ts';

export const HeaderNotificationsBadge: FC = () => {
  const { data: { notifications: { unreadCount = 0 } = {} } = {}, refetch } = useNotificationsCountQuery();
  useNewNotificationSubscription({
    onData: async data => {
      const notification = data?.data.data?.notificationSubscription;
      toast.info(compact([
        'Новое уведомление!',
        notification?.title,
        dayjs(notification?.createdAt).format('HH:mm DD.MM.YYYY'),
      ]).join('\n'), { autoClose: false, closeButton: false });
      await refetch();
    },
  });

  const tooltipText = () => `У вас ${unreadCount} ${
    unreadCount.toString().endsWith('1') && !unreadCount.toString().endsWith('11')
      ? 'непрочитанное уведомление'
      : 'непрочитанных уведомлений'
  }`;

  return (
    <Tooltip title={unreadCount ? tooltipText() : 'Нет новых уведомлений'}>
      <IconButton color='inherit'>
        <Badge badgeContent={unreadCount} color='error'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
