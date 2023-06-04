import { Reference, TypePolicies } from '@apollo/client';
import { compact } from 'lodash';
import { ReadFieldFunction } from '@apollo/client/cache/core/types/common';
import { GUserRoleEnum } from './generated.ts';

/**
 * При GraphQL запросе считывает поля студента/сотрудника для получения ФИО.
 */
const readFio = (readField: ReadFieldFunction, short = false) => {
  const student: Reference | undefined = readField('student');
  const employee: Reference | undefined = readField('employee');
  const passport: Reference | undefined = readField('passport') || readField('passport', student);
  const data = passport || employee;
  const lastName: string | undefined = readField('lastName') || readField('lastName', data);
  const firstName: string | undefined = readField('firstName') || readField('firstName', data);
  const patronymic: string | undefined = readField('patronymic') || readField('patronymic', data);
  const noName = '<Без Имени>';
  if (short) {
    return compact([lastName, firstName?.replace(/(\S)\S+/, '$1.'), patronymic?.replace(/(\S)\S+/, '$1.')]).join(' ') || noName;
  }
  return compact([lastName, firstName, patronymic]).join(' ') || noName;
};

/**
 * Дополнительные параметры для считывания полей в Apollo Client.
 */
export const typePolicies: TypePolicies = {
  UserCurrentResponse: {
    fields: {
      role: {
        read: (_, { readField }): GUserRoleEnum => {
          const roles: ReadonlyArray<GUserRoleEnum> | undefined = readField('roles');
          return roles?.includes(GUserRoleEnum.Admin) ? GUserRoleEnum.Admin
            : roles?.includes(GUserRoleEnum.Employee) ? GUserRoleEnum.Employee
              : roles?.includes(GUserRoleEnum.Student) ? GUserRoleEnum.Student
                : GUserRoleEnum.Any;
        },
      },
    },
  },
  StudentEntity: {
    fields: {
      initials: {
        read: (_, { readField }) => readFio(readField, true),
      },
      fullName: {
        read: (_, { readField }) => readFio(readField),
      },
    },
  },
  UserEntity: {
    fields: {
      initials: {
        read: (_, { readField }) => readFio(readField, true),
      },
      fullName: {
        read: (_, { readField }) => readFio(readField),
      },
      role: {
        read: (_, { readField }): GUserRoleEnum => {
          const student: Reference | undefined = readField('student');
          const employee: boolean | undefined = readField('isAdmin', readField('employee'));
          return employee === true ? GUserRoleEnum.Admin
            : employee === false ? GUserRoleEnum.Employee
              : student ? GUserRoleEnum.Student
                : GUserRoleEnum.Any;
        },
      },
    },
  },
  EmployeeEntity: {
    fields: {
      initials: {
        read: (_, { readField }) => readFio(readField, true),
      },
      fullName: {
        read: (_, { readField }) => readFio(readField),
      },
    },
  },
};
