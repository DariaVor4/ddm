import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Checkbox, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { compact } from 'lodash';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { refetchStudentCloseRelativesQuery, useStudentCloseRelativeDeleteMutation, useStudentCloseRelativesQuery } from '../../../api/generated.ts';
import { CloseRelativeDialog, useCloseRelativeDialog } from '../../../components/Dialogs/CloseRelativeDialog.tsx';
import { strictPick } from '../../../core/strict-lodash/strict-pick.ts';
import { useConfirmAction } from '../../../core/hooks/useConfirmAction.tsx';

type StudentCloseRelativesParams = {
  studentId?: string;
};

// TODO: ограничить ввод родственников до 4 человек

export const StudentCloseRelativesPage: FC = () => {
  const navigate = useNavigate();
  const dialog = useCloseRelativeDialog(state => strictPick(state, ['edit', 'create']));
  const { studentId } = useParams<StudentCloseRelativesParams>();
  const { data: { studentCloseRelatives: relatives } = {} } = useStudentCloseRelativesQuery({ variables: { studentId } });
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [deleteCloseRelatives] = useStudentCloseRelativeDeleteMutation({
    variables: { closeRelativeIds: selectedIds },
    onCompleted: () => setSelectedIds([]),
    refetchQueries: [refetchStudentCloseRelativesQuery({ studentId })],
  });
  const confirmDelete = useConfirmAction({
    title: 'Удаление близких родственников',
    message: 'Вы уверены, что хотите удалить выбранных близких родственников?',
    action: deleteCloseRelatives,
  });

  const onRowSelect = (relativeId: string) => {
    setSelectedIds(prev => (prev.includes(relativeId) ? prev.filter(id => id !== relativeId) : [...prev, relativeId]));
  };
  const onSelectAll = () => {
    setSelectedIds(prev => (prev.length === (relatives?.length || 0) ? [] : relatives?.map(relative => relative.id) || []));
  };

  return (
    <>
      <Stack
        alignItems='center'
        direction='row'
        display='flex'
        gap={2}
        justifyContent='center'
        marginBottom={1}
      >
        <IconButton onClick={() => navigate(-1)}><ArrowBackIcon /></IconButton>
        <Typography align='center' fontWeight='500' variant='h5'>Близкие родственники</Typography>
      </Stack>
      <TableContainer className='m-auto' component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  checked={(relatives?.length || 0) > 0 && selectedIds.length === (relatives?.length || 0)}
                  color='primary'
                  indeterminate={selectedIds.length > 0 && selectedIds.length < (relatives?.length || 0)}
                  onChange={onSelectAll}
                />
              </TableCell>
              <TableCell>№</TableCell>
              <TableCell>ФИО</TableCell>
              <TableCell align='center' width='min-width'>
                {(relatives?.length || 0) < 4 && <IconButton size='small' onClick={() => dialog.create(studentId)}><AddCircleIcon /></IconButton>}
                <IconButton
                  disabled={selectedIds.length === 0}
                  size='small'
                  onClick={() => confirmDelete()}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relatives?.map((relative, index) => (
              <TableRow key={relative.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedIds.includes(relative.id)}
                    color='primary'
                    onChange={() => onRowSelect(relative.id)}
                  />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {compact([relative.lastName, relative.firstName, relative.patronymic]).join(' ') || 'Нет имени'}
                </TableCell>
                <TableCell align='center'>
                  <IconButton size='small' onClick={() => dialog.edit(relative.id)}><EditIcon /></IconButton>
                  <IconButton
                    size='small'
                    onClick={() => confirmDelete({
                      title: 'Удаление близкого родственника',
                      message: `Вы уверены, что хотите удалить ${compact([relative.lastName, relative.firstName, relative.patronymic]).join(' ') || 'БезИмени'} из списка близких родственников?`,
                      action: () => deleteCloseRelatives({ variables: { closeRelativeIds: [relative.id] } }),
                    })}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CloseRelativeDialog />
    </>
  );
};
