import { useMemo, useState } from 'react';
import {
  Checkbox, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { AppRoutesEnum } from '../../../routes/app-routes.enum.ts';
import {
  GEmployeesQuery, refetchEmployeesQuery, useEmployeesDeleteMutation, useEmployeesQuery,
} from '../../../api/generated.ts';
import { useConfirmAction } from '../../../core/hooks/useConfirmAction.tsx';
import { useCurrentUser } from '../../../core/hooks/useCurrentUser.ts';

export const EmployeesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { data: { employees: employeesOriginal = [] } = {} } = useEmployeesQuery();
  const [current] = useCurrentUser();

  const employees = useMemo(() => employeesOriginal.filter(e => e.id !== current?.user.id), [employeesOriginal, current]);

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [menuEmployee, setMenuStudent] = useState<GEmployeesQuery['employees'][number] | null>(null);
  const onMenuClose = () => {
    setMenuAnchor(null);
    setMenuStudent(null);
  };

  const [deletedEmployees] = useEmployeesDeleteMutation({
    variables: { employeeIds: selectedIds },
    onCompleted: () => {
      setSelectedIds([]);
      onMenuClose();
    },
    refetchQueries: [refetchEmployeesQuery()],
  });

  const confirmDelete = useConfirmAction({
    title: 'Удаление сотрудников',
    message: 'Внимание! Удаление сотрудника приведет к удалению всех связанных с ним данных. Вы уверены, что хотите удалить сотрудника?',
    action: deletedEmployees,
  });

  const onSelectAll = () => {
    setSelectedIds(prev => (prev.length === (employees.length || 0) ? [] : employees
      .map(({ id }) => id) || []));
  };

  const onRowSelect = (id: string) => {
    setSelectedIds(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
  };

  return (
    <>
      <Typography align='center' marginBottom={2} variant='h4'>Сотрудники</Typography>
      <TableContainer className='m-auto' component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  checked={(employees.length || 0) > 0 && selectedIds.length === (employees.length || 0)}
                  color='primary'
                  indeterminate={selectedIds.length > 0 && selectedIds.length < (employees.length || 0)}
                  onChange={onSelectAll}
                />
              </TableCell>
              <TableCell>№</TableCell>
              <TableCell>ФИО</TableCell>
              <TableCell align='right' width='min-width'>
                <IconButton size='small' onClick={() => navigate(AppRoutesEnum.EmployeeCreateRoute)}>
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
            {employees.filter(employee => employee.id !== current?.user.id).map((employee, index) => (
              <TableRow key={employee.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedIds.includes(employee.id)}
                    color='primary'
                    onChange={() => onRowSelect(employee.id)}
                  />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {employee.lastName}
                  {' '}
                  {employee.firstName}
                  {' '}
                  {employee.patronymic}
                </TableCell>
                <TableCell align='right'>
                  <IconButton
                    size='small'
                    onClick={e => {
                      setMenuAnchor(e.currentTarget);
                      setMenuStudent(employee);
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
        <MenuItem onClick={() => navigate(`${AppRoutesEnum.EmployeeRoute(menuEmployee?.id!)}`)}>
          <ListItemIcon><EditIcon /></ListItemIcon>
          <ListItemText>Редактировать профиль</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => confirmDelete({
            title: 'Удаление студента',
            message: `Внимание! Удаление сотрудника приведет к удалению всех связанных с ним данных. Вы уверены, что хотите удалить сотрудника ${menuEmployee?.lastName}?`,
            action: () => deletedEmployees({ variables: { employeeIds: [menuEmployee?.id!] } }),
          })}
        >
          <ListItemIcon><DeleteForeverIcon /></ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
