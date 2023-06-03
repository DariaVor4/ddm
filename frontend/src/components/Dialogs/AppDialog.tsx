import { FC } from 'react';
import {
  Dialog, DialogTitle, Grow, IconButton, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { DialogProps } from '@mui/material/Dialog/Dialog';
import CloseIcon from '@mui/icons-material/Close';

type AppDialogProps = DialogProps & {
  title?: string;
  onClose?: () => void;
};

export const AppDialog: FC<AppDialogProps> = ({
  title, children, onClose, ...dialogProps
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Dialog
      fullScreen={!isSmallScreen}
      maxWidth='xs'
      TransitionComponent={Grow}
      transitionDuration={500}
      fullWidth
      {...dialogProps}
      onClose={onClose}
    >
      <DialogTitle className='flex items-center gap-5'>
        <Typography className='grow inline' component='span' variant='h6'>
          {title}
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

AppDialog.defaultProps = {
  title: 'Диалог',
  onClose: () => {},
};
