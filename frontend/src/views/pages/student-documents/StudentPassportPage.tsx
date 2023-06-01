import { FC } from 'react';
import {
  Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Paper, Radio, RadioGroup, Stack, Typography,
} from '@mui/material';
import * as yup from 'yup';
import { compact, keys } from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import ms from 'ms';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import {
  GGenderEnum,
  GStudentPassportUpsertInput,
  InputMaybe,
  refetchStudentPassportQuery, refetchStudentsQuery,
  refetchUserCurrentQuery,
  useStudentPassportQuery,
  useStudentPassportUpsertMutation,
} from '../../../api/generated.ts';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';
import { TMuiColor } from '../../../styles/mui/theme.ts';

type IFormValue = Omit<GStudentPassportUpsertInput, 'birthDate' | 'issueDate' | 'expirationDate'> & {
  birthDate?: InputMaybe<string>;
  issueDate?: InputMaybe<string>;
  expirationDate?: InputMaybe<string>;
};

type StudentPassportPageParams = {
  studentId?: string;
};

// TODO: валидация должна быть не только для РФ паспортов
// Серия паспорта не обязательна
// Кол-во цифр в номере может быть разным

const formSchema = yup.object({
  lastName: yup.string().trim().required('Обязательное поле'),
  firstName: yup.string().trim().required('Обязательное поле'),
  patronymic: yup.string().trim().optional(),
  gender: yup.string().trim().oneOf(keys(GGenderEnum), 'Некорректное значение').required('Обязательное поле'),
  birthDate: yup.date()
    .min(new Date(Date.now() - ms('90y')), 'Слишком старая дата')
    .max(new Date(Date.now() - ms('16y')), 'Слишком поздняя дата')
    .required('Обязательное поле'),
  birthPlace: yup.string().trim().required('Обязательное поле'),
  series: yup.string().trim(),
  number: yup.string().trim()
    .min(5, 'Слишком маленький номер паспорта')
    .max(9, 'Слишком большой номер паспорта')
    .required('Обязательное поле'),
  issueDate: yup.date().required('Обязательное поле'),
  issuedBy: yup.string().trim().required('Обязательное поле'),
  expirationDate: yup.date().required('Обязательное поле'),
  citizenship: yup.string().trim().required('Обязательное поле'),
});

export const StudentPassportPage: FC = () => {
  const { studentId } = useParams<StudentPassportPageParams>();
  const navigate = useNavigate();
  const [saveDocument] = useStudentPassportUpsertMutation({
    refetchQueries: compact([
      refetchStudentPassportQuery({ studentId }),
      refetchUserCurrentQuery(),
      studentId && refetchStudentsQuery(),
    ]),
    onCompleted: () => {
      if (studentId) {
        navigate(-1);
      }
    },
  });
  const { data: originalData } = useStudentPassportQuery({ variables: { studentId }, fetchPolicy: 'network-only' });
  const formik = useFormik<IFormValue>({
    enableReinitialize: true,
    initialValues: {
      lastName: originalData?.studentPassport?.lastName || '',
      firstName: originalData?.studentPassport?.firstName || '',
      patronymic: originalData?.studentPassport?.patronymic || '',
      birthDate: originalData?.studentPassport?.birthDate?.format('YYYY-MM-DD') || '',
      birthPlace: originalData?.studentPassport?.birthPlace || '',
      series: originalData?.studentPassport?.series || '',
      number: originalData?.studentPassport?.number || '',
      issueDate: originalData?.studentPassport?.issueDate?.format('YYYY-MM-DD') || '',
      issuedBy: originalData?.studentPassport?.issuedBy || '',
      citizenship: originalData?.studentPassport?.citizenship || '',
      expirationDate: originalData?.studentPassport?.expirationDate?.format('YYYY-MM-DD') || '',
      gender: originalData?.studentPassport?.gender || null,
    },
    validationSchema: formSchema,
    onSubmit: data => toast.promise(saveDocument({
      variables: {
        data: {
          ...data,
          birthDate: data.birthDate ? dayjs(data.birthDate) : undefined,
          issueDate: data.issueDate ? dayjs(data.issueDate) : undefined,
          expirationDate: data.expirationDate ? dayjs(data.expirationDate) : undefined,
        },
        studentId,
      },
    }), {
      pending: 'Сохранение данных...',
      success: { render: ({ data: data1 }) => (data1?.data?.isSuccess ? 'Данные успешно сохранены' : 'Данные не были сохранены') },
      error: { render: ({ data: err }) => `Ошибка сохранения данных: ${err}` },
    }),
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Paper className='flex flex-col gap-4 px-10 py-4 mx-auto max-w-lg'>
          <Typography variant='h4' className='text-center mb-4'>Паспорт</Typography>
          <FormikTextField name='lastName' label='Фамилия' required />
          <FormikTextField name='firstName' label='Имя' required />
          <FormikTextField name='patronymic' label='Отчество' />
          <FormControl className='!flex-row items-center gap-3'>
            <FormLabel>Пол:</FormLabel>
            <RadioGroup
              name='gender'
              row
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <Stack direction='row'>
                <FormControlLabel value={GGenderEnum.Male} control={<Radio />} label='Мужской' />
                <FormControlLabel value={GGenderEnum.Female} control={<Radio />} label='Женский' />
              </Stack>
            </RadioGroup>
            <FormHelperText sx={{ color: 'error.main' satisfies TMuiColor }}>
              {formik.touched.gender && formik.errors.gender}
            </FormHelperText>
          </FormControl>
          <FormikTextField name='birthDate' label='Дата рождения' type='date' />
          <FormikTextField name='birthPlace' label='Место рождения' />
          <FormikTextField name='series' shrink placeholder='0123 (4 цифры)' label='Серия паспорта' />
          <FormikTextField name='number' shrink placeholder='456789 (6 цифр)' label='Номер паспорта' />
          <FormikTextField name='issueDate' label='Дата выдачи' type='date' />
          <FormikTextField name='issuedBy' label='Кем выдан' />
          {/* TODO: сделать выпадающим списком */}
          <FormikTextField name='citizenship' label='Гражданство' />
          <FormikTextField name='expirationDate' label='Дата истечения' type='date' />
          <Stack direction='row' justifyContent='flex-end' gap={2}>
            <Button disabled={!formik.dirty} variant='text' color='warning' onClick={() => formik.resetForm()}>Сброс</Button>
            <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>Сохранить</Button>
          </Stack>
        </Paper>
      </FormikProvider>
    </>
  );
};
