import {
  Chip,
  Divider,
  IconButton, ListItemIcon, ListItemText, Menu, MenuItem,
  Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  GVisaRequestsQuery,
  refetchVisaRequestsQuery,
  useVisaRequestDeleteMutation,
  useVisaRequestsQuery,
} from '../../api/generated.ts';
import { AppRoutesEnum } from '../../routes/app-routes.enum.ts';
import {
  visaRequestStatusColorMapper,
  visaRequestStatusMapper,
} from '../../core/enum-mapper/visa-request-status-mapper.ts';
import { useConfirmAction } from '../../core/hooks/useConfirmAction.tsx';
import {
  CreateVisaRequestDialog, useCreateVisaRequestDialog,
} from '../../components/Dialogs/CreateVisaRequestDialog.tsx';

export const VisaRequestsPage = () => {
  const navigate = useNavigate();
  const dialog = useCreateVisaRequestDialog();

  const { data: { visaRequests } = {} } = useVisaRequestsQuery();

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [menuVisaRequest, setMenuVisaRequest] = useState<GVisaRequestsQuery['visaRequests'][number] | null>(null);
  const onMenuClose = () => {
    setMenuAnchor(null);
    setMenuVisaRequest(null);
  };

  const [deleteVisaRequest] = useVisaRequestDeleteMutation({
    onCompleted: () => {
      onMenuClose();
    },
    refetchQueries: [refetchVisaRequestsQuery()],
  });

  const confirmDelete = useConfirmAction({
    title: 'Удаление визовой анкеты',
    message: 'Внимание! Вы уверены, что хотите удалить визовую анкету?',
    action: deleteVisaRequest,
  });

  return (
    <>
      <Typography align='center' marginBottom={2} variant='h4'>Визовые анкеты</Typography>
      <TableContainer className='m-auto' component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>ФИО</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell align='right' width='min-width'>
                <IconButton size='small' onClick={dialog.open}>
                  <AddCircleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visaRequests?.map((visaRequest, index) => (
              <TableRow key={visaRequest.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {visaRequest.student?.initials}
                </TableCell>
                <TableCell className='!font-bold'>
                  <Chip color={visaRequestStatusColorMapper(visaRequest.status)} label={visaRequestStatusMapper(visaRequest.status)} />
                </TableCell>
                <TableCell align='right'>
                  <IconButton
                    size='small'
                    onClick={e => {
                      setMenuAnchor(e.currentTarget);
                      setMenuVisaRequest(visaRequest);
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        anchorEl={menuAnchor}
        open={!!menuAnchor}
        onClose={onMenuClose}
      >
        <MenuItem onClick={() => navigate(`${AppRoutesEnum.VisaRequestByStudentIdRoute(menuVisaRequest?.studentId!)}`)}>
          <ListItemIcon><EditIcon /></ListItemIcon>
          <ListItemText>Редактировать заявку</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => confirmDelete({
            action: () => deleteVisaRequest({ variables: { visaRequestId: menuVisaRequest?.id! } }),
          })}
        >
          <ListItemIcon><DeleteForeverIcon /></ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </Menu>
      <CreateVisaRequestDialog />
    </>
  );
};
