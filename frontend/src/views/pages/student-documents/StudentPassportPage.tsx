import { FC } from 'react';
import {
  Button, FormControl, FormControlLabel, FormHelperText, FormLabel, IconButton, Paper, Radio, RadioGroup, Stack, Typography,
} from '@mui/material';
import * as yup from 'yup';
import { compact, values } from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import ms from 'ms';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  GGenderEnum,
  GStudentPassportUpsertInput,
  InputMaybe,
  refetchStudentPassportQuery,
  refetchStudentsQuery,
  refetchUserCurrentQuery,
  useStudentPassportQuery,
  useStudentPassportUpsertMutation,
} from '../../../api/generated.ts';
import { FormikTextField } from '../../../components/forms/FormikTextField.tsx';
import { TMuiColor } from '../../../styles/theme/mui-theme.ts';

type IFormValue = Omit<GStudentPassportUpsertInput, 'birthDate' | 'issueDate' | 'expirationDate'> & {
  birthDate?: InputMaybe<string>;
  issueDate?: InputMaybe<string>;
  expirationDate?: InputMaybe<string>;
};

type StudentPassportPageParams = {
  studentId?: string;
};

// TODO: валидация должна быть не только для РФ паспортов
// TODO: Серия паспорта не обязательна
// TODO: Кол-во цифр в номере может быть разным

const formSchema = yup.object({
  lastName: yup.string().trim().required('Обязательное поле'),
  firstName: yup.string().trim().required('Обязательное поле'),
  patronymic: yup.string().trim().optional(),
  gender: yup.string().trim().oneOf(values(GGenderEnum), 'Некорректное значение').required('Обязательное поле'),
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
  const { data: { studentPassport } = {} } = useStudentPassportQuery({ variables: { studentId }, fetchPolicy: 'network-only' });
  const formik = useFormik<IFormValue>({
    enableReinitialize: true,
    validateOnChange: false,
    initialValues: {
      lastName: studentPassport?.lastName || '',
      firstName: studentPassport?.firstName || '',
      patronymic: studentPassport?.patronymic || '',
      birthDate: studentPassport?.birthDate?.format('YYYY-MM-DD') || '',
      birthPlace: studentPassport?.birthPlace || '',
      series: studentPassport?.series || '',
      number: studentPassport?.number || '',
      issueDate: studentPassport?.issueDate?.format('YYYY-MM-DD') || '',
      issuedBy: studentPassport?.issuedBy || '',
      citizenship: studentPassport?.citizenship || '',
      expirationDate: studentPassport?.expirationDate?.format('YYYY-MM-DD') || '',
      gender: studentPassport?.gender || null,
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
      <Stack
        alignItems='center'
        direction='row'
        display='flex'
        gap={2}
        justifyContent='center'
        marginBottom={1}
      >
        <IconButton onClick={() => navigate(-1)}><ArrowBackIcon /></IconButton>
        <Typography align='center' fontWeight='500' variant='h5'>Паспорт</Typography>
      </Stack>
      <FormikProvider value={formik}>
        <Paper className='flex flex-col gap-4 px-10 py-4 pt-10 mx-auto max-w-lg'>
          <FormikTextField label='Фамилия' name='lastName' required />
          <FormikTextField label='Имя' name='firstName' required />
          <FormikTextField label='Отчество' name='patronymic' />
          <FormControl className='!flex-row items-center gap-3'>
            <FormLabel>Пол:</FormLabel>
            <RadioGroup
              name='gender'
              value={formik.values.gender}
              row
              onChange={formik.handleChange}
            >
              <Stack direction='row'>
                <FormControlLabel control={<Radio />} label='Мужской' value={GGenderEnum.Male} />
                <FormControlLabel control={<Radio />} label='Женский' value={GGenderEnum.Female} />
              </Stack>
            </RadioGroup>
            <FormHelperText sx={{ color: 'error.main' satisfies TMuiColor }}>
              {formik.touched.gender && formik.errors.gender}
            </FormHelperText>
          </FormControl>
          <FormikTextField label='Дата рождения' name='birthDate' type='date' />
          <FormikTextField label='Место рождения' name='birthPlace' />
          <FormikTextField
            label='Серия паспорта'
            name='series'
            placeholder='0123 (4 цифры)'
            shrink
          />
          <FormikTextField
            label='Номер паспорта'
            name='number'
            placeholder='456789 (6 цифр)'
            shrink
          />
          <FormikTextField label='Дата выдачи' name='issueDate' type='date' />
          <FormikTextField label='Кем выдан' name='issuedBy' />
          {/* TODO: сделать выпадающим списком */}
          <FormikTextField label='Гражданство' name='citizenship' />
          <FormikTextField label='Дата истечения' name='expirationDate' type='date' />
          <Stack direction='row' gap={2} justifyContent='flex-end'>
            {(!formik.isSubmitting && formik.dirty) && <Button color='warning' variant='text' onClick={() => formik.resetForm()}>Сброс</Button>}
            <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>Сохранить</Button>
          </Stack>
        </Paper>
      </FormikProvider>
    </>
  );
};
