import { Icon } from '@rsuite/icons';
import { TbError404 } from 'react-icons/all';
import { Button } from 'rsuite';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center grow text-xl my-10 text-center gap-10 leading-8'>
      <Icon as={TbError404} pulse className='w-64 h-64' />
      Вы добрались до края света.
      <br />
      Дальше живут драконы.
      <br />
      Возвращайтесь.
      <br />
      <Button onClick={() => navigate(-1)} appearance='subtle'>
        Вернуться
      </Button>
    </div>
  );
}
export default NotFoundPage;
