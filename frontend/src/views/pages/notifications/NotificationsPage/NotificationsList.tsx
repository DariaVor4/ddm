import {
  FC, useState, UIEventHandler, useEffect, useCallback,
} from 'react';
import {
  List, ListItemButton, ListItemIcon, ListItemText, TextField, Paper, IconButton, Tooltip, InputAdornment,
} from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { useNotificationsQuery, useNotificationsTotalCountQuery, useNotificationsUnreadCountQuery } from '../../../../api/generated.ts';
import { useNotificationIdParam } from './useNotificationIdParam.ts';
import { AppRoutesEnum } from '../../../../routes/app-routes.enum.ts';

const loadCount = 50;
const pixelsTrigger = 100;

export const NotificationsList: FC = () => {
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const {
    data: { notifications = [] } = {}, loading, fetchMore, refetch,
  } = useNotificationsQuery({ variables: { pagination: { skip, take: loadCount } } });
  const { data: { totalCount = 0 } = {} } = useNotificationsTotalCountQuery();
  const { data: { unreadCount = 0 } = {} } = useNotificationsUnreadCountQuery();
  const navigate = useNavigate();

  const notificationId = useNotificationIdParam();

  const onFetchMore: UIEventHandler<HTMLUListElement> = async e => {
    if (loading || totalCount === notifications.length) return;
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight > scrollHeight - pixelsTrigger) {
      await fetchMore({
        variables: {
          pagination: { skip: skip + loadCount, take: loadCount },
          search: search || undefined,
        },
      });
      setSkip(skip + loadCount);
    }
  };

  const onRefetch = useCallback(async () => {
    await refetch({ pagination: { skip: 0, take: loadCount }, search: search || undefined });
    setSkip(0);
  }, [refetch, search]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await onRefetch();
      setSkip(0);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [onRefetch, search]);

  return (
    <Paper className='flex flex-col gap-3 overflow-hidden p-2 max-w-[350px] min-w-[350px]'>
      <TextField
        helperText={`${notifications.length} из ${totalCount}, непрочитанных: ${unreadCount}`}
        label='Поиск'
        value={search}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              {search && (
                <Tooltip title='Очистить'>
                  <IconButton disabled={loading} onClick={() => setSearch('')}><ClearIcon /></IconButton>
                </Tooltip>
              )}
              <Tooltip title='Обновить'>
                <IconButton disabled={loading} onClick={onRefetch}><ReplayIcon /></IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
        onChange={e => setSearch(e.currentTarget.value)}
      />
      <List className='overflow-y-auto' onScroll={onFetchMore}>
        {notifications.map(notification => (
          <ListItemButton
            key={notification.id}
            selected={notificationId === notification.id}
            onClick={() => navigate(AppRoutesEnum.NotificationRoute(notification.id))}
          >
            {!notification.isRead && (
              <ListItemIcon className='!min-w-0 mr-2'>
                <FiberManualRecordIcon color='info' fontSize='small' />
              </ListItemIcon>
            )}
            <ListItemText primary={notification.title} />
          </ListItemButton>
        ))}
        {!notifications.length && <div className='flex justify-center items-center h-full'>Нет уведомлений</div>}
      </List>
    </Paper>
  );
};
