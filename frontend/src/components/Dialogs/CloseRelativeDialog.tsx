import { FC, useEffect } from 'react';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { cloneDeep, compact } from 'lodash';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { AppDialog } from './AppDialog.tsx';
import {
  GStudentCloseRelativeUpsertInput,
  InputMaybe,
  refetchStudentCloseRelativeQuery,
  refetchStudentCloseRelativesQuery,
  useStudentCloseRelativeQuery,
  useStudentCloseRelativeUpsertMutation,
} from '../../api/generated.ts';
import { FormikTextField } from '../forms/FormikTextField.tsx';
import { onEnterDown } from '../../core/onEnterDown.ts';

const initialState = {
  isOpen: false as boolean,
  studentId: undefined as string | undefined,
  closeRelativeId: undefined as string | undefined,
};

interface IFormValues extends Omit<GStudentCloseRelativeUpsertInput, 'birthDate'> {
  birthDate?: InputMaybe<string>;
}

export const useCloseRelativeDialog = create(combine(cloneDeep(initialState), setState => ({
  create: (studentId?: string) => setState({
    ...cloneDeep(initialState),
    studentId,
    isOpen: true,
  }),
  edit: (closeRelativeId: string) => setState({
    ...cloneDeep(initialState),
    closeRelativeId,
    isOpen: true,
  }),
  close: () => setState({ isOpen: false }),
})));

export const CloseRelativeDialog: FC = () => {
  const dialog = useCloseRelativeDialog();

  const { data: { studentCloseRelative } = {} } = useStudentCloseRelativeQuery({
    skip: !dialog.closeRelativeId || !dialog.isOpen,
    variables: { closeRelativeId: dialog.closeRelativeId! },
  });
  const [saveMutation] = useStudentCloseRelativeUpsertMutation({
    refetchQueries: compact([
      dialog.closeRelativeId && refetchStudentCloseRelativeQuery({ closeRelativeId: dialog.closeRelativeId }),
      refetchStudentCloseRelativesQuery({ studentId: dialog.studentId }),
    ]),
  });
  const formik = useFormik<IFormValues>({
    enableReinitialize: true,
    validationSchema: yup.object({
      lastName: yup.string().required('Обязательное поле'),
      firstName: yup.string().required('Обязательное поле'),
      patronymic: yup.string().optional(),
      birthDate: yup.date().required('Обязательное поле'),
      addressContinuousResidence: yup.string().required('Обязательное поле'),
      citizenship: yup.string().required('Обязательное поле'),
    }),
    initialValues: {
      id: studentCloseRelative?.id,
      studentId: studentCloseRelative?.studentId || dialog.studentId,
      lastName: studentCloseRelative?.lastName || '',
      firstName: studentCloseRelative?.firstName || '',
      patronymic: studentCloseRelative?.patronymic || '',
      birthDate: studentCloseRelative?.birthDate?.format('YYYY-MM-DD') || '',
      addressContinuousResidence: studentCloseRelative?.addressContinuousResidence || '',
      citizenship: studentCloseRelative?.citizenship || '',
    },
    onSubmit: async values => {
      await saveMutation({
        variables: {
          data: {
            ...values,
            birthDate: values.birthDate ? dayjs(values.birthDate) : undefined,
          },
        },
      });
      dialog.close();
    },
  });

  useEffect(() => {
    if (!dialog.isOpen) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialog.isOpen]);

  return (
    <AppDialog
      title={`${dialog.closeRelativeId ? 'Редактирование' : 'Создание'} близкого родственника`}
      open={dialog.isOpen}
      onClose={dialog.close}
    >
      <DialogContent dividers className='flex flex-col !py-10 gap-4' onKeyDown={onEnterDown(formik.submitForm)}>
        <FormikProvider value={formik}>
          <FormikTextField name='lastName' label='Фамилия' required />
          <FormikTextField name='firstName' label='Имя' required />
          <FormikTextField name='patronymic' label='Отчество' />
          <FormikTextField name='birthDate' label='Дата рождения' required type='date' />
          <FormikTextField name='addressContinuousResidence' label='Постоянное место жительства' required />
          <FormikTextField name='citizenship' label='Гражданство' required />
        </FormikProvider>
      </DialogContent>
      <DialogActions>
        <Button variant='text' color='warning' onClick={() => formik.resetForm()}>Сброс</Button>
        <Button variant='text' onClick={dialog.close}>Отмена</Button>
        <Button
          onClick={formik.submitForm}
          disabled={formik.isSubmitting || !formik.dirty}
        >
          Сохранить
        </Button>
      </DialogActions>
    </AppDialog>
  );
};
