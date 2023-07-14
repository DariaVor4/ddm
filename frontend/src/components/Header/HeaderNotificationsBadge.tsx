import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, Tooltip } from '@mui/material';
import { FC } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useNewNotificationSubscription, useNotificationsUnreadCountQuery } from '../../api/generated.ts';
import { AppRoutesEnum } from '../../routes/app-routes.enum.ts';
import { CacheNotificationsService } from '../../api/cache/cache-notifications-service.ts';

export const HeaderNotificationsBadge: FC = () => {
  const navigate = useNavigate();
  const { data: { unreadCount = 0 } = {} } = useNotificationsUnreadCountQuery();
  useNewNotificationSubscription({
    onData: async ({ data }) => {
      const notification = data.data?.notificationSubscription;
      if (!notification) return;
      CacheNotificationsService.writeNewNotification(notification);
      toast.info(`Новое уведомление! ${notification.title}`, {
        autoClose: false,
        closeButton: false,
        onClick: () => navigate(AppRoutesEnum.NotificationRoute(notification.id)),
      });
    },
  });

  const tooltipText = () => `У вас ${unreadCount} ${
    unreadCount.toString().endsWith('1') && !unreadCount.toString().endsWith('11')
      ? 'непрочитанное уведомление'
      : 'непрочитанных уведомлений'
  }`;

  return (
    <Tooltip title={unreadCount ? tooltipText() : 'Нет новых уведомлений'}>
      <IconButton color='inherit' onClick={() => navigate(AppRoutesEnum.NotificationsRoute)}>
        <Badge badgeContent={unreadCount} color='error'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
