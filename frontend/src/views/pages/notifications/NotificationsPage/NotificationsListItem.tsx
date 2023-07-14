/* eslint-disable react/destructuring-assignment */
import { FC } from 'react';
import { Paper } from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CheckIcon from '@mui/icons-material/Check';
import { GNotificationsQuery } from '../../../../api/generated.ts';

type NotificationsListItemProps = Required<GNotificationsQuery['notifications']['notifications'][number]>;

export const NotificationsListItem: FC<NotificationsListItemProps> = props => (
  <Paper className='px-3 py-1 flex gap-3 cursor-pointer items-center'>
    {props.isRead
      ? <CheckIcon color='success' />
      : <NewReleasesIcon color='warning' />}
    {props.title}
  </Paper>
);
