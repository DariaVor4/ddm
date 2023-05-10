import { FC } from 'react';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import {
  Button, Paper, Stack, Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import FormikTextField from '../../../components/forms/FormikTextField.tsx';
import {
  GStudentMigrationCardUpsertInput,
  InputMaybe,
  refetchStudentMigrationCardQuery,
  useStudentMigrationCardQuery,
  useStudentMigrationCardUpsertMutation,
} from '../../../api/generated.ts';

type IFormValue = Omit<GStudentMigrationCardUpsertInput, 'issueDate' | 'expirationDate'> & {
  issueDate?: InputMaybe<string>;
  expirationDate?: InputMaybe<string>;
};

type StudentMigrationCardPageParams = {
  studentId?: string;
};

//todo какая валидация..?
const formSchema = yup.object({
  series: yup.number().required('Обязательное поле').typeError('Введите число'),
  number: yup.number().required('Обязательное поле').typeError('Введите число'),
  issueDate: yup.date().required('Обязательное поле').min(new Date(1970, 0, 1), 'Неправильная дата').max(new Date(), 'Неправильная дата'),
  expirationDate: yup.date().min(new Date(), 'Неправильная дата').required('Обязательное поле'),
});
const StudentMigrationCardPage: FC = () => {
  const { studentId } = useParams<StudentMigrationCardPageParams>();

  const [saveDocument] = useStudentMigrationCardUpsertMutation({
    refetchQueries: [refetchStudentMigrationCardQuery({ studentId })],
  });

  const { data: originalData } = useStudentMigrationCardQuery({
    variables: { studentId },
    fetchPolicy: 'network-only',
  });

  const formik = useFormik<IFormValue>({
    enableReinitialize: true,
    initialValues: {
      series: originalData?.studentMigrationCard?.series || '',
      number: originalData?.studentMigrationCard?.number || '',
      expirationDate: originalData?.studentMigrationCard?.expirationDate?.format('YYYY-MM-DD') || '',
      issueDate: originalData?.studentMigrationCard?.issueDate?.format('YYYY-MM-DD') || '',
    },
    validationSchema: formSchema,
    onSubmit: data => toast.promise(saveDocument({
      variables: {
        data: {
          ...data,
          issueDate: data.issueDate ? dayjs(data.issueDate) : undefined,
          expirationDate: data.expirationDate ? dayjs(data.expirationDate) : undefined,
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
          <Typography variant='h4' className='text-center mb-4'>Миграционная карта</Typography>
          <FormikTextField name='series' label='Серия' required />
          <FormikTextField name='number' label='Номер' required />
          <FormikTextField name='issueDate' label='Дата выдачи' type='date' required />
          <FormikTextField name='expirationDate' label='Дата истечения' type='date' required />
          <Stack direction='row' justifyContent='flex-end' gap={2}>
            <Button variant='text' color='warning' onClick={() => formik.resetForm()}>Сброс</Button>
            <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>Сохранить</Button>
          </Stack>
        </Paper>
      </FormikProvider>
    </>
  );
};

export default StudentMigrationCardPage;
