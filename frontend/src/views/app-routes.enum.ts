export const AppRoutesEnum = {
  HomeRoute: '/',
  RegisterRoute: '/register',

  AccountSettingsRoute: '/account',

  DocumentsPassportRoute: '/documents/passport',
  DocumentsVisaRoute: '/documents/visa',
  DocumentsMigrationCardRoute: '/documents/migration-card',
  DocumentsArrivalNoticeRoute: '/documents/arrival-notice',
  DocumentsCloseRelativesRoute: '/documents/close-relatives',

  StudentsRoute: '/students',
  StudentCreate: '/students/create',
  StudentRoute: (id:string) => `/students/${id}`,
  StudentPassportRoute: (id:string) => `/students/${id}/passport`,
  StudentVisaRoute: (id:string) => `/students/${id}/visa`,
  StudentMigrationCardRoute: (id:string) => `/students/${id}/migration-card`,
  StudentArrivalNoticeRoute: (id:string) => `/students/${id}/arrival-notice`,
  StudentCloseRelativesRoute: (id:string) => `/students/${id}/close-relatives`,

  EmployeesRoute: '/employees',
  EmployeeCreate: '/employees/create',
  EmployeeRoute: (id:string) => `/employees/${id}`,
  EmployeePattern: '/employees/:employeeId',

  NotificationsRoute: '/notifications',
  NotificationRoute: (id:string) => `/notifications/${id}`,

  AdminsRoute: '/admins',
  AdminRoute: (id:string) => `/admins/${id}`,

  VisaRequestsRoute: '/visa-requests',
  VisaRequestRoute: (id:string) => `/visa-requests/${id}`,

  AnyRoute: '*',
} as const;
