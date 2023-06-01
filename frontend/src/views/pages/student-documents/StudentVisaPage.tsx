import { FC } from 'react';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import {
  Button, Paper, Stack, Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';
import {
  GStudentVisaUpsertInput,
  InputMaybe,
  refetchStudentVisaQuery, useStudentVisaQuery,
  useStudentVisaUpsertMutation,
} from '../../../api/generated.ts';

type IFormValue = Omit<GStudentVisaUpsertInput, 'issueDate' | 'expirationDate'> & {
  issueDate?: InputMaybe<string>;
  expirationDate?: InputMaybe<string>;
};

type StudentVisaPageParams = {
  studentId?: string;
};

const formSchema = yup.object({
  id: yup.string().required('Обязательное поле'),
  blankSeries: yup.number().required('Обязательное поле').typeError('Введите число'),
  number: yup.number().required('Обязательное поле').typeError('Введите число'),
  issueDate: yup.date().required('Обязательное поле').min(new Date(1970, 0, 1), 'Неправильная дата').max(new Date(), 'Неправильная дата'),
  expirationDate: yup.date().min(new Date(), 'Неправильная дата').required('Обязательное поле'),
  invitationNumber: yup.string().required('Обязательное поле'),
});

export const StudentVisaPage: FC = () => {
  const { studentId } = useParams<StudentVisaPageParams>();
  const navigate = useNavigate();

  const [saveDocument] = useStudentVisaUpsertMutation({
    refetchQueries: [refetchStudentVisaQuery({ studentId })],
    onCompleted: () => {
      if (studentId) {
        navigate(-1);
      }
    },
  });

  const { data: originalData } = useStudentVisaQuery({
    variables: { studentId },
    fetchPolicy: 'network-only',
  });

  const formik = useFormik<IFormValue>({
    enableReinitialize: true,
    initialValues: {
      id: originalData?.studentVisa?.id || '',
      blankSeries: originalData?.studentVisa?.blankSeries || '',
      number: originalData?.studentVisa?.number || '',
      invitationNumber: originalData?.studentVisa?.invitationNumber || '',
      expirationDate: originalData?.studentVisa?.expirationDate?.format('YYYY-MM-DD') || '',
      issueDate: originalData?.studentVisa?.issueDate?.format('YYYY-MM-DD') || '',
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
          <Typography variant='h4' className='text-center mb-4'>Виза</Typography>
          <FormikTextField name='id' label='Идентификатор' required />
          <FormikTextField name='blankSeries' label='Серия бланка' required />
          <FormikTextField name='number' label='Номер визы' required />
          <FormikTextField name='invitationNumber' label='Номер приглашения' required />
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
