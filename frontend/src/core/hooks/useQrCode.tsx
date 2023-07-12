import { Typography } from '@mui/material';
import { cloneDeep } from 'lodash';
import { QRCodeSVG } from 'qrcode.react';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { AppDialog } from '../../components/Dialogs/AppDialog.tsx';

type TParams = {
  title?: string,
  description?: string,
  link: string,
};

const initialState = {
  isOpen: false as boolean,
  title: 'QrCode',
  description: undefined as string | undefined,
  link: '' as string,
};

export const useQrCodeDialog = create(combine(cloneDeep(initialState), set => ({
  open: (params: TParams) => set({
    ...cloneDeep(initialState),
    ...params,
    isOpen: true,
  }),
  close: () => set({ isOpen: false }),
})));

export const QrCodeDialog = () => {
  const {
    isOpen, title, description, close, link,
  } = useQrCodeDialog();

  return (
    <AppDialog
      open={isOpen}
      title={title}
      onClose={close}
    >
      <div className='flex flex-col items-center mx-5 mb-3 gap-3 justify-center'>
        {description && <Typography>{description}</Typography>}
        <QRCodeSVG size={300} value={link} includeMargin />
      </div>
    </AppDialog>
  );
};
