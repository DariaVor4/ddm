import { TbError404 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { FC } from 'react';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center grow text-xl my-10 text-center gap-10 leading-8'>
      <TbError404 className='animate-rotate' size={200} />
      Вы добрались до края света.
      <br />
      Дальше живут драконы.
      <br />
      Возвращайтесь.
      <br />
      <Button onClick={() => navigate(-1)}>
        Вернуться
      </Button>
    </div>
  );
};
