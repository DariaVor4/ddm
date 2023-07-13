import { useFormik, FormikProvider } from 'formik';
import { FC } from 'react';
import { values } from 'lodash';
import * as yup from 'yup';
import {
  Stack, IconButton, Typography, Paper, Autocomplete, TextField, Button, Alert, Grow,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useNotificationsSendMutation, GNotificationsSendInput, GNotificationServiceEnum, GUserRoleEnum,
} from '../../../../api/generated.ts';
import { FormikTextField } from '../../../../components/forms/FormikTextField.tsx';
import { PickUserGroup } from './PickUserGroup.tsx';

const validationSchema = yup.object().shape({
  title: yup.string().trim().required('Заголовок уведомления обязателен'),
  content: yup.string().trim().required('Содержание уведомления обязательно'),
  userIds: yup.array(yup.string().uuid().required()).when(['allEmployees', 'allStudents'], ([allEmployees, allStudents], schema) => (allEmployees || allStudents
    ? schema
    : schema.min(1, 'Не выбран ни один получатель').required())),
  allEmployees: yup.boolean(),
  allStudents: yup.boolean(),
  services: yup.array(yup.string().oneOf(values(GNotificationServiceEnum)).required()).min(1, 'Не выбран ни один сервис').required(),
});

export const NotificationsSendPage: FC = () => {
  const [notificationsSend, { loading }] = useNotificationsSendMutation();
  const navigate = useNavigate();

  const formik = useFormik<GNotificationsSendInput>({
    initialValues: {
      title: '',
      content: '',
      userIds: [],
      allEmployees: false,
      allStudents: false,
      services: [
        GNotificationServiceEnum.Web,
        GNotificationServiceEnum.Email,
        GNotificationServiceEnum.Vk,
        GNotificationServiceEnum.Telegram,
      ],
    },
    onSubmit: async input => toast.promise(notificationsSend({
      variables: { input },
    }), {
      pending: 'Отправка уведомлений...',
      success: 'Уведомления успешно отправлены',
      error: 'При отправке уведомлений произошла ошибка',
    }),
    validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <Stack
        alignItems='center'
        direction='row'
        display='flex'
        gap={2}
        justifyContent='center'
        marginBottom={1}
      >
        <IconButton onClick={() => navigate(-1)}><ArrowBackIcon /></IconButton>
        <Typography align='center' fontWeight='500' variant='h5'>Рассылка уведомлений</Typography>
      </Stack>
      <Paper className='px-10 py-4 pt-10 flex flex-col gap-3 mx-auto max-w-3xl' elevation={4}>
        <FormikTextField disabled={loading} label='Заголовок' name={'title' satisfies keyof GNotificationsSendInput} />
        <FormikTextField
          disabled={loading}
          label='Текст письма'
          name={'content' satisfies keyof GNotificationsSendInput}
          rows={10}
          multiline
        />
        <PickUserGroup disabled={loading} formik={formik} userType={GUserRoleEnum.Student} />
        <PickUserGroup disabled={loading} formik={formik} userType={GUserRoleEnum.Employee} />
        <Grow in={formik.touched.userIds && !!formik.errors.userIds} unmountOnExit>
          <Alert severity='error'>{formik.errors.userIds}</Alert>
        </Grow>
        <Autocomplete
          disabled={loading}
          options={values(GNotificationServiceEnum)}
          value={formik.values.services || []}
          renderInput={params => (
            <TextField
              name={'services' satisfies keyof GNotificationsSendInput}
              {...params}
              error={formik.touched.services && !!formik.errors.services}
              helperText={formik.touched.services && formik.errors.services}
              label='Сервисы для отправки'
            />
          )}
          disableCloseOnSelect
          multiple
          onBlur={formik.handleBlur}
          onChange={(_, value) => formik.setFieldValue('services' satisfies keyof GNotificationsSendInput, value)}
        />
        <div className='flex flex-row gap-3 justify-end'>
          <Button
            color='warning'
            disabled={loading}
            variant='text'
            onClick={() => formik.resetForm()}
          >
            Очистить
          </Button>
          <Button disabled={loading} onClick={() => formik.submitForm()}>Отправить</Button>
        </div>
      </Paper>
    </FormikProvider>
  );
};
