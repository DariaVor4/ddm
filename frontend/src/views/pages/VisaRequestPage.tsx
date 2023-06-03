import { FC } from 'react';
import { FormikProvider, useFormik } from 'formik';
import {
  Button, Divider, IconButton, MenuItem, Paper, Stack, Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { FormikTextField } from '../../components/forms/FormikTextField.tsx';
import {
  GVisaCategoryEnum, GVisaMultiplicityEnum, GVisaRequestStatusEnum, useUserCurrentQuery,
} from '../../api/generated.ts';
import { FormikSelectField } from '../../components/forms/FormikSelectField.tsx';

// TODO: Регистрационный номер заполняется только сотрудником

export const VisaRequestPage: FC = () => {
  const navigate = useNavigate();
  const { data: { current } = {} } = useUserCurrentQuery();
  console.log(current);
  const formik = useFormik({
    initialValues: {

    },
    onSubmit: async values => {
      console.log(values);
    },
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
        <Typography align='center' fontWeight='500' variant='h5'>Визовая анкета</Typography>
      </Stack>
      <Paper className='px-10 py-4 pt-10 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
        <FormikSelectField label='Категория визы' name='category'>
          <MenuItem value={GVisaMultiplicityEnum.Single}>Однократная</MenuItem>
          <MenuItem value={GVisaMultiplicityEnum.Double}>Двукратная</MenuItem>
          <MenuItem value={GVisaMultiplicityEnum.Multiple}>Многократная</MenuItem>
        </FormikSelectField>
        <FormikSelectField label='Кратность визы' name='multiplicity'>
          <MenuItem value={GVisaCategoryEnum.RegularPrivate}>Обыкновенная - Частная</MenuItem>
          <MenuItem value={GVisaCategoryEnum.RegularHumanitarian}>Обыкновенная - Гуманитарная</MenuItem>
          <MenuItem value={GVisaCategoryEnum.RegularBusiness}>Обыкновенная - Деловая</MenuItem>
          <MenuItem value={GVisaCategoryEnum.RegularWorking}>Обыкновенная - Рабочая</MenuItem>
          <MenuItem value={GVisaCategoryEnum.RegularTourist}>Обыкновенная - Туристическая</MenuItem>
          <MenuItem value={GVisaCategoryEnum.RegularGroupTravel}>Обыкновенная - Туристическая групповая</MenuItem>
          <MenuItem value={GVisaCategoryEnum.RegularStudy}>Обыкновенная - Учебная</MenuItem>
          <MenuItem value={GVisaCategoryEnum.RegularNationalEntry}>Обыкновенная - На въезд в РФ в целях приёма в гражданство РФ</MenuItem>
          <MenuItem value={GVisaCategoryEnum.Transit}>Транзитная</MenuItem>
          <MenuItem value={GVisaCategoryEnum.TemporaryResident}>Временно проживающего лица</MenuItem>
        </FormikSelectField>
        <FormikTextField label='В связи с ...' name='reason' />
        <FormikTextField label='Адрес постановки на миграционный учет' name='addressOfMigrationRegistration' />
        <FormikTextField label='Маршрут предполагаемого пребывания' name='estimatedRouteOfStay' />
        <FormikTextField label='Адрес в стране постоянного проживания' name='addressInCountryOfContinuousResidence' />
        <FormikTextField label='Место работы или учёбы, должность' name='placeOfWorkOrStudyAndEmploymentPosition' />
        <FormikTextField label='Родственники на территории РФ' name='russianFederationRelatives' />
        <FormikTextField label='Прилагаемые документы' name='attachedDocuments' />
        <Divider />
        <FormikTextField label='Регистрационный номер' name='registrationNumber' />
        <FormikSelectField label='Статус анкеты' name='status'>
          <MenuItem value={GVisaRequestStatusEnum.Pending}>Ожидает проверки сотрудником</MenuItem>
          <MenuItem value={GVisaRequestStatusEnum.PendingCorrectionsByStudent}>Требуются правки студента</MenuItem>
          <MenuItem value={GVisaRequestStatusEnum.Verified}>Проверена</MenuItem>
          <MenuItem value={GVisaRequestStatusEnum.Finished}>Передана в визовый отдел</MenuItem>
        </FormikSelectField>
        <FormikTextField label='Комментарий сотрудника' name='employeeComment' />
        <Divider />
        <Stack direction='row' gap={2} justifyContent='flex-end'>
          <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>Сохранить</Button>
        </Stack>
      </Paper>
    </FormikProvider>
  );
};
