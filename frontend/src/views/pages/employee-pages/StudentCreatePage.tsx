import { FC } from 'react';
import { FormikProvider, useFormik } from 'formik';

export const StudentCreatePage: FC = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <FormikProvider value={formik}>
      Создание студента
    </FormikProvider>
  );
};
