import {
  Button, Grid, Stack, Typography,
} from '@mui/material';
import { FC } from 'react';
import { useUserCurrentQuery } from '../../../api/generated.ts';
import image from '../../../assets/HomePageImage.svg';
import { loginDialogOpenFn } from '../../../components/Dialogs/LoginDialog.tsx';
import { userMenuToggleFn } from '../../../components/UserSideMenu/user-side-menu-store.ts';

export const HomePage: FC = () => {
  const { data: { current } = {} } = useUserCurrentQuery();

  return (
    <Grid className='columns-2 pt-10 flex justify-center items-center'>
      <Stack spacing={3}>
        <Typography variant='h4'>
          Визовый центр ВолгГТУ
        </Typography>
        <Typography>
          Упрощение и оптимизация работы с визовыми документами для иностранных студентов.
        </Typography>
        <Button size='large' onClick={current ? userMenuToggleFn : loginDialogOpenFn}>Начать работу</Button>
      </Stack>
      <img
        alt='Визовый центр'
        className='max-h-96'
        src={image}
        width='60%'
      />
    </Grid>
  );
};
