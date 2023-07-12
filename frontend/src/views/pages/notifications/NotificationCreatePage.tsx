import { useFormik } from 'formik';
import { FC } from 'react';
import { useNotificationsSendMutation } from '../../../api/generated.ts';

export const NotificationCreatePage: FC = () => {
  const [notificationsSend, { loading }] = useNotificationsSendMutation();

  const formik = useFormik();

  return (
    <div>
      <h1>NotificationCreatePage</h1>
    </div>
  );
};
