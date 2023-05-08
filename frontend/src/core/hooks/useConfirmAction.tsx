import { FC } from 'react';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { cloneDeep } from 'lodash';
import { Button, DialogActions, DialogContent } from '@mui/material';
import AppDialog from '../../components/Dialogs/AppDialog.tsx';
import onEnterDown from '../onEnterDown.ts';

type TParams = {
  title?: string;
  message?: string;
  action: () => (unknown | Promise<unknown>);
};

const initialState = {
  isOpen: false as boolean,
  title: 'Подтверждение',
  message: 'Вы действительно хотите сделать это действие?',
  action: (() => void null) as () => unknown,
};

const useConfirmActionDialog = create(combine(cloneDeep(initialState), (set, get) => ({
  open: (params: TParams) => set({
    ...cloneDeep(initialState),
    ...params,
    isOpen: true,
  }),
  cancel: () => set({ isOpen: false }),
  confirm: () => {
    get().action();
    set({ isOpen: false });
  },
})));

export const ConfirmActionDialog: FC = () => {
  const dialog = useConfirmActionDialog();

  return (
    <AppDialog title={dialog.title} open={dialog.isOpen} onClose={dialog.cancel} onKeyDown={onEnterDown(dialog.confirm)}>
      <DialogContent dividers>{dialog.message}</DialogContent>
      <DialogActions>
        <Button color='error' onClick={dialog.cancel}>Отмена</Button>
        <Button color='primary' onClick={dialog.confirm} autoFocus>Подтвердить</Button>
      </DialogActions>
    </AppDialog>
  );
};

const useConfirmAction = (params1?: TParams) => {
  const dialog = useConfirmActionDialog();
  return (params2?: Partial<TParams>) => dialog.open({ ...params1, ...params2 } as TParams);
};

export default useConfirmAction;
