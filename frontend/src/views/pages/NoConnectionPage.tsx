import { FC, useState } from 'react';
import {
  Button, Paper, Typography, Zoom,
} from '@mui/material';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import { useReactiveVar } from '@apollo/client';
import { TMuiColor } from '../../styles/mui/theme.ts';
import { client, isConnectionLostVar } from '../../api/apollo-client.tsx';

export const NoConnectionPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const isConnectionLost = useReactiveVar(isConnectionLostVar);

  return (
    <div className='flex flex-col justify-center items-center grow my-10'>
      <Zoom in={isConnectionLost}>
        <Paper
          className='flex flex-col justify-center items-center p-4 gap-2'
          sx={{ bgcolor: 'error.dark' satisfies TMuiColor }}
        >
          <CloudOffIcon fontSize='large' />
          <Typography variant='h5'>Нет соединения с сервером</Typography>
          <Button
            variant='outlined'
            disabled={loading}
            onClick={() => {
              setLoading(true);
              client.resetStore().finally(() => setLoading(false));
            }}
          >
            Повтор
          </Button>
        </Paper>
      </Zoom>
    </div>
  );
};
