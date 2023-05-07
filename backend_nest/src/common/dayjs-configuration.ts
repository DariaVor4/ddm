import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
// import duration from 'dayjs/plugin/duration';

dayjs.extend(relativeTime);
// dayjs.extend(duration);
dayjs.locale('ru');
