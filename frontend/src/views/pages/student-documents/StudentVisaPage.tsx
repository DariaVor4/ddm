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
          <Typography className='text-center mb-4' variant='h4'>Виза</Typography>
          <FormikTextField label='Идентификатор' name='id' required />
          <FormikTextField label='Серия бланка' name='blankSeries' required />
          <FormikTextField label='Номер визы' name='number' required />
          <FormikTextField label='Номер приглашения' name='invitationNumber' required />
          <FormikTextField
            label='Дата выдачи'
            name='issueDate'
            type='date'
            required
          />
          <FormikTextField
            label='Дата истечения'
            name='expirationDate'
            type='date'
            required
          />
          <Stack direction='row' gap={2} justifyContent='flex-end'>
            <Button color='warning' variant='text' onClick={() => formik.resetForm()}>Сброс</Button>
            <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>Сохранить</Button>
          </Stack>
        </Paper>
      </FormikProvider>
    </>
  );
};
