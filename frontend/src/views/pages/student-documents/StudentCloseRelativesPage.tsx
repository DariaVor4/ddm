import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { compact } from 'lodash';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { refetchStudentCloseRelativesQuery, useStudentCloseRelativeDeleteMutation, useStudentCloseRelativesQuery } from '../../../api/generated.ts';
import { CloseRelativeDialog, useCloseRelativeDialog } from '../../../components/Dialogs/CloseRelativeDialog.tsx';
import { strictPick } from '../../../core/strict-lodash/strict-pick.ts';
import { useConfirmAction } from '../../../core/hooks/useConfirmAction.tsx';

type StudentCloseRelativesParams = {
  studentId?: string;
};

export const StudentCloseRelativesPage: FC = () => {
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
      <Typography variant='h4' textAlign='center' gutterBottom>Близкие родственники</Typography>
      <TableContainer component={Paper} className='m-auto'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  indeterminate={selectedIds.length > 0 && selectedIds.length < (relatives?.length || 0)}
                  checked={(relatives?.length || 0) > 0 && selectedIds.length === (relatives?.length || 0)}
                  onChange={onSelectAll}
                />
              </TableCell>
              <TableCell>№</TableCell>
              <TableCell>ФИО</TableCell>
              <TableCell align='center' width='min-width'>
                <IconButton size='small' onClick={() => dialog.create(studentId)}>
                  <AddCircleIcon />
                </IconButton>
                <IconButton
                  size='small'
                  onClick={() => confirmDelete()}
                  disabled={selectedIds.length === 0}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relatives?.map((relative, index) => (
              <TableRow hover key={relative.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell padding='checkbox'>
                  <Checkbox
                    color='primary'
                    checked={selectedIds.includes(relative.id)}
                    onChange={() => onRowSelect(relative.id)}
                  />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {compact([relative.lastName, relative.firstName, relative.patronymic]).join(' ') || 'Нет имени'}
                </TableCell>
                <TableCell align='center'>
                  <IconButton onClick={() => dialog.edit(relative.id)} size='small'><EditIcon /></IconButton>
                  <IconButton
                    onClick={() => confirmDelete({
                      title: 'Удаление близкого родственника',
                      message: `Вы уверены, что хотите удалить ${compact([relative.lastName, relative.firstName, relative.patronymic]).join(' ') || 'БезИмени'} из списка близких родственников?`,
                      action: () => deleteCloseRelatives({ variables: { closeRelativeIds: [relative.id] } }),
                    })}
                    size='small'
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
