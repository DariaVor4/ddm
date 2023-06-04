import { FC } from 'react';
import { FormikProvider, useFormik } from 'formik';
import {
  Button, Divider, IconButton, MenuItem, Paper, Stack, TextField, Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { compact, values } from 'lodash';
import { toast } from 'react-toastify';
import { FormikTextField } from '../../components/forms/FormikTextField.tsx';
import {
  GStudentVisaRequestUpsertInput,
  GUserRoleEnum,
  GVisaCategoryEnum,
  GVisaMultiplicityEnum,
  GVisaRequestStatusEnum,
  refetchVisaRequestQuery,
  refetchVisaRequestsQuery,
  useExportDocumentsMutation,
  useStudentQuery,
  useUserCurrentQuery,
  useVisaRequestQuery,
  useVisaRequestUpsertMutation,
} from '../../api/generated.ts';
import { FormikSelectField } from '../../components/forms/FormikSelectField.tsx';
import { yupFormikValidate } from '../../core/yup-formik-validate.ts';
import { useTypedLocation } from '../../core/react-router-dom/use-typed-location.ts';
import { fileDownload } from '../../core/file-download.ts';
import { strictPick } from '../../core/strict-lodash/strict-pick.ts';

enum PageRoleEnum {Employee, Student}
enum PageModeEnum {Create, Update}

type TValidationSchemaCtx = { pageMode: PageModeEnum, pageRole: PageRoleEnum };
const validationSchema = yup.object<TValidationSchemaCtx>({
  category: yup.string().required('Обязательное поле').oneOf(values(GVisaCategoryEnum), 'Некорректное значение'),
  multiplicity: yup.string().required('Обязательное поле').oneOf(values(GVisaMultiplicityEnum), 'Некорректное значение'),
  reason: yup.string().required('Обязательное поле'),
  addressOfMigrationRegistration: yup.string().required('Обязательное поле'),
  estimatedRouteOfStay: yup.string().required('Обязательное поле'),
  addressInCountryOfContinuousResidence: yup.string().required('Обязательное поле'),
  placeOfWorkOrStudyAndEmploymentPosition: yup.string().required('Обязательное поле'),
  russianFederationRelatives: yup.string().optional(),
  // TODO QUESTION: обязательное?
  attachedDocuments: yup.string().optional(),
  // TODO QUESTION: Какой формат? у сотрудника обязательное?
  registrationNumber: yup
    .string()
    .when(['pageRole'], ([pageRole], schema) => (pageRole === PageRoleEnum.Employee
      ? schema.required('Обязательное поле')
      : schema.optional()
    )),
  status: yup.string().oneOf(values(GVisaRequestStatusEnum)).required('Обязательное поле'),
  employeeComment: yup.string().optional(),
});

// TODO QUESTION: Что должно происходить, если визовых анкет несколько?
export const VisaRequestPage: FC = () => {
  // React Router
  const navigate = useNavigate();
  const { isForceCreate } = useTypedLocation<{ isForceCreate?: boolean } | undefined>()?.state || {};
  const { studentId: studentIdParams } = useParams();

  // For update
  const { visaRequestId, studentId } = useParams<{ studentId?: string, visaRequestId?: string }>();
  const { data: { visaRequest } = {} } = useVisaRequestQuery({
    variables: { studentId, visaRequestId },
    skip: isForceCreate,
    fetchPolicy: 'network-only',
  });
  const { data: { student } = {} } = useStudentQuery({
    variables: { studentId: studentIdParams },
  });

  // Page mode
  const { data: { current } = {} } = useUserCurrentQuery();
  const pageRole = current?.role !== GUserRoleEnum.Student ? PageRoleEnum.Employee : PageRoleEnum.Student;
  const pageMode = visaRequest ? PageModeEnum.Update : PageModeEnum.Create;
  const pageTitle = pageMode === PageModeEnum.Create ? 'Создание визовой анкеты' : 'Редактирование визовой анкеты';
  const pageActionTitle = pageMode === PageModeEnum.Create ? 'Создать' : 'Сохранить';

  // Export
  const [exportDocuments] = useExportDocumentsMutation({
    variables: {
      studentId,
      visaRequestId,
    },
    onCompleted: ({ exportDocuments: res }) => fileDownload(res.url),
  });

  const [upsert] = useVisaRequestUpsertMutation({
    refetchQueries: compact([
      refetchVisaRequestQuery({ studentId, visaRequestId }),
      pageRole === PageRoleEnum.Employee && refetchVisaRequestsQuery({ studentId }),
      pageRole === PageRoleEnum.Employee && refetchVisaRequestsQuery(),
    ]),
  });
  const formik = useFormik<GStudentVisaRequestUpsertInput>({
    enableReinitialize: !isForceCreate,
    validateOnChange: false,
    initialValues: {
      category: visaRequest?.category || '' as unknown as null,
      multiplicity: visaRequest?.multiplicity || '' as unknown as null,
      reason: visaRequest?.reason || '',
      addressOfMigrationRegistration: visaRequest?.addressOfMigrationRegistration || '',
      estimatedRouteOfStay: visaRequest?.estimatedRouteOfStay || '',
      addressInCountryOfContinuousResidence: visaRequest?.addressInCountryOfContinuousResidence || '',
      placeOfWorkOrStudyAndEmploymentPosition: visaRequest?.placeOfWorkOrStudyAndEmploymentPosition || '',
      russianFederationRelatives: visaRequest?.russianFederationRelatives || '',
      attachedDocuments: visaRequest?.attachedDocuments || '',
      /* Поля сотрудника */
      registrationNumber: visaRequest?.registrationNumber || '',
      status: visaRequest?.status || '' as unknown as null,
      /* Поле сотрудника, видимое студенту только для чтения */
      employeeComment: visaRequest?.employeeComment || '',
    },
    onSubmit: async input => {
      console.log(isForceCreate);
      const { data } = await toast.promise(upsert({
        variables: {
          input, studentId, visaRequestId, isForceCreate,
        },
      }), {
        pending: 'Сохранение...',
        success: 'Сохранено',
        error: { render: ({ data: err }) => `Ошибка сохранения: ${err}` },
      });
      if (data?.visaRequestUpsert && pageRole === PageRoleEnum.Employee) {
        navigate(-1);
      }
    },
    validate: yupFormikValidate(validationSchema, { context: { pageMode, pageRole } }),
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
        <Typography align='center' fontWeight='500' variant='h5'>{pageTitle}</Typography>
      </Stack>
      <Paper className='px-10 py-4 pt-10 flex flex-col gap-4 mx-auto max-w-lg' elevation={4}>
        {student && (
        <TextField
          defaultValue={student.fullName}
          InputLabelProps={{ shrink: true }}
          label='Студент'
          variant='standard'
          disabled
        />
        )}
        <FormikSelectField label='Категория визы' name='category'>
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
        <FormikSelectField label='Кратность визы' name='multiplicity'>
          <MenuItem value={GVisaMultiplicityEnum.Single}>Однократная</MenuItem>
          <MenuItem value={GVisaMultiplicityEnum.Double}>Двукратная</MenuItem>
          <MenuItem value={GVisaMultiplicityEnum.Multiple}>Многократная</MenuItem>
        </FormikSelectField>
        <FormikTextField label='В связи с ...' name='reason' />
        <FormikTextField label='Адрес постановки на миграционный учет' name='addressOfMigrationRegistration' />
        <FormikTextField label='Маршрут предполагаемого пребывания' name='estimatedRouteOfStay' />
        <FormikTextField label='Адрес в стране постоянного проживания' name='addressInCountryOfContinuousResidence' />
        <FormikTextField label='Место работы или учёбы, должность' name='placeOfWorkOrStudyAndEmploymentPosition' />
        <FormikTextField label='Родственники на территории РФ' name='russianFederationRelatives' />
        <FormikTextField label='Прилагаемые документы' name='attachedDocuments' />
        {(pageRole === PageRoleEnum.Employee || values(strictPick(visaRequest, ['registrationNumber', 'status', 'employeeComment']))) && <Divider />}
        <>
          {pageRole === PageRoleEnum.Employee && (
            <FormikTextField
              // disabled={pageRole === PageRoleEnum.Student}
              label='Регистрационный номер'
              name='registrationNumber'
            />
          )}
          {(pageRole === PageRoleEnum.Employee || visaRequest?.status) && (
            <FormikSelectField
              disabled={pageRole === PageRoleEnum.Student}
              label='Статус анкеты'
              name='status'
            >
              <MenuItem value={GVisaRequestStatusEnum.Pending}>Ожидает проверки сотрудником</MenuItem>
              <MenuItem value={GVisaRequestStatusEnum.PendingCorrectionsByStudent}>Требуются правки студента</MenuItem>
              <MenuItem value={GVisaRequestStatusEnum.Verified}>Проверена</MenuItem>
              <MenuItem value={GVisaRequestStatusEnum.Finished}>Передана в визовый отдел</MenuItem>
            </FormikSelectField>
          )}
          {(pageRole === PageRoleEnum.Employee || visaRequest?.employeeComment) && (
          <FormikTextField
            disabled={pageRole === PageRoleEnum.Student}
            label='Комментарий сотрудника'
            name='employeeComment'
            multiline
          />
          )}
        </>
        <Divider />
        <Stack direction='row' gap={2} justifyContent='flex-end'>
          {(!formik.isSubmitting && formik.dirty) && <Button color='warning' variant='text' onClick={() => formik.resetForm()}>Сброс</Button>}
          <Button onClick={() => exportDocuments()}>Экспорт</Button>
          <Button disabled={formik.isSubmitting || !formik.dirty} onClick={formik.submitForm}>{pageActionTitle}</Button>
        </Stack>
      </Paper>
    </FormikProvider>
  );
};
