import { FC } from 'react';
import {
  Dialog, DialogTitle, Grow, IconButton, Typography,
} from '@mui/material';
import { DialogProps } from '@mui/material/Dialog/Dialog';
import CloseIcon from '@mui/icons-material/Close';

type AppDialogProps = DialogProps & {
  title?: string;
  onClose?: () => void;
};

const AppDialog: FC<AppDialogProps> = ({
  title, children, onClose, ...dialogProps
}) => (
  <Dialog TransitionComponent={Grow} transitionDuration={500} fullWidth maxWidth='xs' {...dialogProps} onClose={onClose}>
    <DialogTitle className='flex items-center gap-5'>
      <Typography className='grow inline' variant='h6' component='span'>
        {title}
      </Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    {children}
  </Dialog>
);

AppDialog.defaultProps = {
  title: 'Диалог',
  onClose: () => {},
};

export default AppDialog;
