import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FC, useState } from 'react';
import {
  Checkbox, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import PortraitIcon from '@mui/icons-material/Portrait';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import BadgeIcon from '@mui/icons-material/Badge';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SchoolIcon from '@mui/icons-material/School';
import { Link, useNavigate } from 'react-router-dom';
import { useConfirmAction } from '../../../core/hooks/useConfirmAction.tsx';
import {
  GStudentsQuery, refetchStudentsQuery, useStudentsDeleteMutation, useStudentsQuery,
} from '../../../api/generated.ts';
import { AppRoutesEnum } from '../../../routes/app-routes.enum.ts';

export const StudentsPage: FC = () => {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { data: { students = [] } = {} } = useStudentsQuery();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [menuStudent, setMenuStudent] = useState<GStudentsQuery['students'][number] | null>(null);
  const onMenuClose = () => {
    setMenuAnchor(null);
    setMenuStudent(null);
  };
  const [deleteStudents] = useStudentsDeleteMutation({
    variables: { ids: selectedIds },
    onCompleted: () => {
      setSelectedIds([]);
      onMenuClose();
    },
    refetchQueries: [refetchStudentsQuery()],
  });
  const confirmDelete = useConfirmAction({
    title: 'Удаление студентов',
    message: 'Внимание! Удаление студентов приведет к удалению всех связанных с ними данных, всех документов и заявок. Вы уверены, что хотите удалить выбранных студентов?',
    action: deleteStudents,
  });
  const onSelectAll = () => {
    setSelectedIds(prev => (prev.length === (students.length || 0) ? [] : students.map(({ id }) => id) || []));
  };
  const onRowSelect = (studentId: string) => {
    setSelectedIds(prev => (prev.includes(studentId) ? prev.filter(id => id !== studentId) : [...prev, studentId]));
  };

  return (
    <>
      <TableContainer className='m-auto' component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  checked={(students.length || 0) > 0 && selectedIds.length === (students.length || 0)}
                  color='primary'
                  indeterminate={selectedIds.length > 0 && selectedIds.length < (students.length || 0)}
                  onChange={onSelectAll}
                />
              </TableCell>
              <TableCell>№</TableCell>
              <TableCell>ФИО</TableCell>
              <TableCell align='right' width='min-width'>
                <IconButton size='small' onClick={() => navigate(AppRoutesEnum.StudentCreateRoute)}>
                  <AddCircleIcon />
                </IconButton>
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
            {students.map((student, index) => (
              <TableRow key={student.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedIds.includes(student.id)}
                    color='primary'
                    onChange={() => onRowSelect(student.id)}
                  />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {student.fullName}
                </TableCell>
                <TableCell align='right'>
                  <IconButton
                    size='small'
                    onClick={e => {
                      setMenuAnchor(e.currentTarget);
                      setMenuStudent(student);
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
        <MenuItem disabled>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText>{menuStudent?.fullName}</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to={AppRoutesEnum.StudentRoute(menuStudent?.id!)}>
          <ListItemIcon><EditIcon /></ListItemIcon>
          <ListItemText>Редактировать профиль</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={AppRoutesEnum.StudentPassportRoute(menuStudent?.id!)}>
          <ListItemIcon><PortraitIcon /></ListItemIcon>
          <ListItemText>Паспорт</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={AppRoutesEnum.StudentMigrationCardRoute(menuStudent?.id!)}>
          <ListItemIcon><RecentActorsIcon /></ListItemIcon>
          <ListItemText>Миграционная карта</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={AppRoutesEnum.StudentArrivalNoticeRoute(menuStudent?.id!)}>
          <ListItemIcon><FlightLandIcon /></ListItemIcon>
          <ListItemText>Уведомление о прибытии</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={AppRoutesEnum.StudentVisaRoute(menuStudent?.id!)}>
          <ListItemIcon><BadgeIcon /></ListItemIcon>
          <ListItemText>Виза</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={AppRoutesEnum.StudentCloseRelativesRoute(menuStudent?.id!)}>
          <ListItemIcon><FamilyRestroomIcon /></ListItemIcon>
          <ListItemText>Ближайшие родственники</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => confirmDelete({
            title: 'Удаление студента',
            message: `Внимание! Удаление студента приведет к удалению всех связанных с ним данных, всех документов и заявок. Вы уверены, что хотите удалить студента ${menuStudent?.fullName}?`,
            action: () => deleteStudents({ variables: { ids: [menuStudent?.id!] } }),
          })}
        >
          <ListItemIcon><DeleteForeverIcon /></ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
