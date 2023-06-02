import { FC } from 'react';
import {
  Button, Paper, Stack, Typography,
} from '@mui/material';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import {
  GStudentArrivalNoticeUpsertInput, InputMaybe, refetchStudentArrivalNoticeQuery, useStudentArrivalNoticeQuery, useStudentArrivalNoticeUpsertMutation,
} from '../../../api/generated.ts';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';

type IFormValue = Omit<GStudentArrivalNoticeUpsertInput, 'date' | 'expires'> & {
  date?: InputMaybe<string>;
  expires?: InputMaybe<string>;
};

type StudentArrivalNoticePageParams = {
  studentId?: string;
};

// todo какая валидация..?
const formSchema = yup.object({
  profession: yup.string().trim().required('Обязательное поле'),
  address: yup.string().trim().required('Обязательное поле'),
  date: yup.date().required('Обязательное поле'),
  expires: yup.date().required('Обязательное поле'),
  invitingSide: yup.string().trim().required('Обязательное поле'),
  receivingSide: yup.string().trim().required('Обязательное поле'),
});

export const StudentArrivalNoticePage: FC = () => {
  const { studentId } = useParams<StudentArrivalNoticePageParams>();
  const [saveDocument] = useStudentArrivalNoticeUpsertMutation({
    refetchQueries: [refetchStudentArrivalNoticeQuery({ studentId })],
  });
  const { data: originalData } = useStudentArrivalNoticeQuery({ variables: { studentId }, fetchPolicy: 'network-only' });
  const formik = useFormik<IFormValue>({
    enableReinitialize: true,
    initialValues: {
      profession: originalData?.studentArrivalNotice?.profession || '',
      address: originalData?.studentArrivalNotice?.address || '',
      date: originalData?.studentArrivalNotice?.date?.format('YYYY-MM-DD') || '',
      expires: originalData?.studentArrivalNotice?.expires?.format('YYYY-MM-DD') || '',
      invitingSide: originalData?.studentArrivalNotice?.invitingSide || '',
      receivingSide: originalData?.studentArrivalNotice?.receivingSide || '',
    },
    validationSchema: formSchema,
    onSubmit: data => toast.promise(saveDocument({
      variables: {
        data: {
          ...data,
          date: data.date ? dayjs(data.date) : undefined,
          expires: data.expires ? dayjs(data.expires) : undefined,
        },
        studentId,
      },
    }), {
      pending: 'Сохранение данных...',
      success: 'Данные сохранены',
      error: { render: ({ data: err }) => `Ошибка сохранения данных: ${err}` },
    }),
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Paper className='flex flex-col gap-4 px-10 py-4 mx-auto max-w-lg'>
          <Typography className='text-center mb-4' variant='h4'>Уведомление о прибытии</Typography>
          {/* TODO убрать профессию и обе пр. стороны в интерфейсе студента */}
          <FormikTextField label='Профессия' name='profession' required />
          <FormikTextField label='Адрес регистрации' name='address' required />
          <FormikTextField
            label='Дата регистрации'
            name='date'
            type='date'
            required
          />
          <FormikTextField
            label='Дата окончания регистрации'
            name='expires'
            type='date'
            required
          />
          <FormikTextField label='Приглашающая сторона' name='invitingSide' required />
          <FormikTextField label='Принимающая сторона' name='receivingSide' required />
          <Stack direction='row' gap={2} justifyContent='flex-end'>
            <Button color='warning' variant='text' onClick={() => formik.resetForm()}>Сброс</Button>
            <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>Сохранить</Button>
          </Stack>
        </Paper>
      </FormikProvider>
    </>
  );
};
