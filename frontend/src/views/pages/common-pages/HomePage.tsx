import { FC } from 'react';
import {
  Box, Button, Grid, Typography,
} from '@mui/material';
import { useUserCurrentQuery } from '../../../api/generated.ts';
import image from '../../../assets/HomePageImage.svg';
import { loginDialogOpenFn } from '../../../components/Dialogs/LoginDialog.tsx';
import { userMenuToggleFn } from '../../../components/UserSideMenu/user-side-menu-store.ts';

export const HomePage: FC = () => {
  const { data: { current } = {} } = useUserCurrentQuery();

  return (
    <Grid className='columns-2 pt-10 flex justify-center items-center'>
      <Box>
        <Typography variant='h4' gutterBottom>
          Добро пожаловать в визовый центр ВолгГТУ!
        </Typography>
        <Typography variant='h6' gutterBottom>
          Упрощение и оптимизация работы с визовыми документами для иностранных студентов
        </Typography>
        <Button onClick={current ? userMenuToggleFn : loginDialogOpenFn}>Начать работу</Button>
      </Box>
      <img alt='Визовый центр' src={image} width='60%' />
    </Grid>
  );
};
