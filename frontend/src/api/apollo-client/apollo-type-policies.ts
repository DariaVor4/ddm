/* eslint-disable no-underscore-dangle */
import { Reference, TypePolicies } from '@apollo/client';
import { compact, uniqBy } from 'lodash';
import { ReadFieldFunction } from '@apollo/client/cache/core/types/common';
import {
  GUserRoleEnum, GUserCurrentResponse, GStudentEntity, GUserEntity, GEmployeeEntity, GQuery, GStudentPassportEntity,
} from '../generated.ts';
import { getRole } from '../../core/roles-checker.ts';
import { TypePoliciesOfFieldsType } from '../types/type-policies-of-fields.type.ts';

/**
 * При GraphQL запросе считывает поля студента/сотрудника для получения ФИО.
 */
const readFio = (readField: ReadFieldFunction, short = false) => {
  const studentKey = 'student' satisfies keyof GUserEntity;
  const employeeKey = 'employee' satisfies keyof GUserEntity;
  const passportKey = 'passport' satisfies keyof GStudentEntity;
  const lastNameKey = 'lastName' satisfies keyof (GStudentPassportEntity | GEmployeeEntity);
  const firstNameKey = 'firstName' satisfies keyof (GStudentPassportEntity | GEmployeeEntity);
  const patronymicKey = 'patronymic' satisfies keyof (GStudentPassportEntity | GEmployeeEntity);

  const student: Reference | undefined = readField(studentKey);
  const employee: Reference | undefined = readField(employeeKey);
  const passport: Reference | undefined = readField(passportKey)
    || readField(passportKey, student);
  const data = passport || employee;
  const lastName: string | undefined = readField(lastNameKey) || readField(lastNameKey, data);
  const firstName: string | undefined = readField(firstNameKey) || readField(firstNameKey, data);
  const patronymic: string | undefined = readField(patronymicKey) || readField(patronymicKey, data);
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
  Query: {
    fields: {
      notifications: {
        keyArgs: false,
        merge: (existing = [], incoming = []) => uniqBy([...existing, ...incoming], el => el.__ref),
      },
    } satisfies TypePoliciesOfFieldsType<GQuery>,
  },
  UserCurrentResponse: {
    fields: {
      role: {
        read: (_, { readField }): GUserRoleEnum => {
          const roles: ReadonlyArray<GUserRoleEnum> | undefined = readField('roles' satisfies keyof GUserCurrentResponse);
          return getRole(roles);
        },
      },
    } satisfies TypePoliciesOfFieldsType<GUserCurrentResponse>,
  },
  StudentEntity: {
    fields: {
      initials: {
        read: (_, { readField }) => readFio(readField, true),
      },
      fullName: {
        read: (_, { readField }) => readFio(readField),
      },
    } satisfies TypePoliciesOfFieldsType<GStudentEntity>,
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
          const student: Reference | undefined = readField('student' satisfies keyof GUserEntity);
          const employee: boolean | undefined = readField('isAdmin' satisfies keyof GEmployeeEntity, readField('employee' satisfies keyof GUserEntity));
          return employee === true ? GUserRoleEnum.Admin
            : employee === false ? GUserRoleEnum.Employee
              : student ? GUserRoleEnum.Student
                : GUserRoleEnum.Any;
        },
      },
    } satisfies TypePoliciesOfFieldsType<GUserEntity>,
  },
  EmployeeEntity: {
    fields: {
      initials: {
        read: (_, { readField }) => readFio(readField, true),
      },
      fullName: {
        read: (_, { readField }) => readFio(readField),
      },
    } satisfies TypePoliciesOfFieldsType<GEmployeeEntity>,
  },
};
