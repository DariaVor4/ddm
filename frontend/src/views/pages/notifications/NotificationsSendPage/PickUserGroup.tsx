import {
  Tooltip, Checkbox, Autocomplete, TextField,
} from '@mui/material';
import { FC, useMemo } from 'react';
import { FormikProps } from 'formik';
import { compact } from 'lodash';
import {
  GNotificationsSendInput, useStudentsQuery, useEmployeesQuery, GUserRoleEnum, GStudentsQuery, GEmployeesQuery,
} from '../../../../api/generated.ts';

interface PickUserGroupProps {
  formik: FormikProps<GNotificationsSendInput>;
  userType: GUserRoleEnum.Employee | GUserRoleEnum.Student;
  disabled?: boolean;
}

type TStudent = GStudentsQuery['students'][number];
type TEmployee = GEmployeesQuery['employees'][number];

const studentam = {
  [GUserRoleEnum.Student]: 'студентам',
  [GUserRoleEnum.Employee]: 'сотрудникам',
};
const studentov = {
  [GUserRoleEnum.Student]: 'студентов',
  [GUserRoleEnum.Employee]: 'сотрудников',
};
const studenti = {
  [GUserRoleEnum.Student]: 'студенты',
  [GUserRoleEnum.Employee]: 'сотрудники',
};

export const PickUserGroup: FC<PickUserGroupProps> = ({ formik, userType, disabled }) => {
  const { data: { students = [] } = {} } = useStudentsQuery();
  const { data: { employees = [] } = {} } = useEmployeesQuery();

  const isAll = userType === GUserRoleEnum.Student
    ? formik.values.allStudents : formik.values.allEmployees;
  const fieldName: keyof GNotificationsSendInput = userType === GUserRoleEnum.Student
    ? 'allStudents' : 'allEmployees';
  const mainArray: Array<TStudent | TEmployee> = userType === GUserRoleEnum.Student
    ? students : employees;
  const mainMap = useMemo(() => new Map(mainArray.map(entity => [entity.id, entity])), [mainArray]);
  const invertSet = useMemo(() => new Set(
    (userType === GUserRoleEnum.Student
      ? employees : students).map(({ id }) => id),
  ), [students, employees, userType]);

  const memoValue = useMemo(
    () => (compact(formik.values.userIds?.map(uId => mainMap.get(uId)))),
    [formik.values.userIds, mainMap],
  );

  return (
    <div className='flex gap-1 items-center'>
      <Tooltip title={`Отправить всем ${studentam[userType]}?`}>
        <Checkbox
          checked={!!isAll}
          disabled={disabled}
          onBlur={formik.handleBlur('userIds' satisfies keyof GNotificationsSendInput)}
          onChange={e => {
            formik.setFieldValue(fieldName, e.target.checked);
            if (e.target.checked) {
              // formik.setFieldValue('userIds' satisfies keyof GNotificationsSendInput, formik.values.userIds?.filter(uId => mainArray.every(entity => entity.id !== uId)), false);
              formik.setFieldValue('userIds' satisfies keyof GNotificationsSendInput, formik.values.userIds?.filter(uId => !mainMap.has(uId)), false);
            }
            formik.validateField('userIds' satisfies keyof GNotificationsSendInput);
          }}
        />
      </Tooltip>
      <Autocomplete
        className='grow'
        disabled={!!isAll || disabled}
        getOptionLabel={option => option.fullName}
        limitTags={2}
        options={mainArray}
        placeholder={`Поиск ${studentov[userType]}`}
        value={memoValue}
        renderInput={params => (
          <TextField
            {...params}
            disabled={!!isAll}
            error={formik.touched.userIds && !!formik.errors.userIds}
            label={isAll ? `Все ${studenti[userType]}` : `Получатели: ${studenti[userType]}`}
            name={'userIds' satisfies keyof GNotificationsSendInput}
          />
        )}
        disableCloseOnSelect
        disableListWrap
        multiple
        onBlur={formik.handleBlur}
        onChange={(_, value) => {
          formik.setFieldValue(
          'userIds' satisfies keyof GNotificationsSendInput,
          (formik.values.userIds || [])?.filter(uId => invertSet.has(uId))?.concat(value.map(({ id }) => id)),
          );
        }}
      />
    </div>
  );
};

PickUserGroup.defaultProps = {
  disabled: false,
};
