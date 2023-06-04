import { FC } from 'react';
import {
  Autocomplete, Button, DialogActions, DialogContent, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { cloneDeep } from 'lodash';
import { combine } from 'zustand/middleware';
import { create } from 'zustand';
import { AppRoutesEnum } from '../../routes/app-routes.enum.ts';
import { useStudentsQuery } from '../../api/generated';
import { AppDialog } from './AppDialog.tsx';

const initialState = {
  isOpen: false as boolean,
  studentId: null as string | null,
};

export const useCreateVisaRequestDialog = create(combine(cloneDeep(initialState), (setState, getState) => ({
  open: () => setState({
    ...cloneDeep(initialState),
    isOpen: true,
  }),
  close: () => setState({ isOpen: false }),
  setStudentId: (studentId: string) => setState({ studentId }),
  getStudentId: () => getState().studentId,
})));

export const CreateVisaRequestDialog: FC = () => {
  const dialog = useCreateVisaRequestDialog();
  const navigate = useNavigate();
  const { data: { students = [] } = {} } = useStudentsQuery();

  return (
    <AppDialog open={dialog.isOpen} title='Выберите студента' onClose={dialog.close}>
      <DialogContent className='flex flex-col !py-10'>
        <Autocomplete
          getOptionLabel={option => option.fullName}
          options={students}
          renderInput={params => <TextField label='Студент' {...params} />}
          onChange={(_, student) => {
            dialog.setStudentId(student?.id as string);
          }}
        />

      </DialogContent>
      <DialogActions className='gap-2'>
        <Button
          disabled={!dialog.getStudentId()}
          size='small'
          variant='contained'
          onClick={() => {
            navigate(AppRoutesEnum.VisaRequestByStudentIdRoute(dialog.getStudentId() as string), { state: { isForceCreate: true } });
            dialog.close();
          }}
        >
          Создать
        </Button>
      </DialogActions>
    </AppDialog>
  );
};
