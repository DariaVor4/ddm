import { FC } from 'react';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { cloneDeep } from 'lodash';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { toast } from 'react-toastify';
import { AppDialog } from '../../components/Dialogs/AppDialog.tsx';
import { onEnterDown } from '../on-enter-down.ts';

type TParams = {
  title?: string;
  message?: string;
  action: () => (unknown | Promise<unknown>);
};

const initialState = {
  isOpen: false as boolean,
  title: 'Подтверждение',
  message: 'Вы действительно хотите сделать это действие?',
  action: (() => undefined) as () => unknown | Promise<unknown>,
};

const useConfirmActionDialog = create(combine(cloneDeep(initialState), (set, get) => ({
  open: (params: TParams) => set({
    ...cloneDeep(initialState),
    ...params,
    isOpen: true,
  }),
  cancel: () => set({ isOpen: false }),
  confirm: () => {
    if (get().action) {
      get().action();
      set({ isOpen: false });
    } else toast.error('Ошибка: Ничего не произошло так как не назначено действие');
  },
})));

export const ConfirmActionDialog: FC = () => {
  const dialog = useConfirmActionDialog();

  return (
    <AppDialog
      open={dialog.isOpen}
      title={dialog.title}
      onClose={dialog.cancel}
      onKeyDown={onEnterDown(dialog.confirm)}
    >
      <DialogContent dividers>{dialog.message}</DialogContent>
      <DialogActions>
        <Button color='error' onClick={dialog.cancel}>Отмена</Button>
        <Button color='primary' autoFocus onClick={dialog.confirm}>Подтвердить</Button>
      </DialogActions>
    </AppDialog>
  );
};

export const useConfirmAction = (params1?: TParams) => {
  const dialog = useConfirmActionDialog();
  return (params2?: Partial<TParams>) => dialog.open({ ...params1, ...params2 } as TParams);
};
