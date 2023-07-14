import { useParams } from 'react-router-dom';

export const useNotificationIdParam = () => {
  const { notificationId } = useParams<{ notificationId?: string }>();
  return notificationId;
};
