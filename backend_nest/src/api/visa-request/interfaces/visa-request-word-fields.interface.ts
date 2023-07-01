export interface IVisaRequestWordFields {
  /** ******** Кратность визы ********* */
  // однократная // visaMultiplicityEnumSingle
  vMES: string;
  // двукратная // visaMultiplicityEnumDouble
  vMED: string;
  // многократная // visaMultiplicityEnumMultiple
  vMEM: string;

  /** ******** Категория визы ********* */
  // Обыкновенная ли? // visaCategoryEnumRegular
  vCER: string;
  // обыкновенная - частная // visaCategoryEnumRegularPrivate
  vCERP: string;
  // обыкновенная - гуманитарная // visaCategoryEnumRegularHumanitarian
  vCERH: string;
  // обыкновенная - деловая // visaCategoryEnumRegularBusiness
  vCERB: string;
  // обыкновенная - рабочая // visaCategoryEnumRegularWorking
  vCERW: string;
  // обыкновенная - туристическая // visaCategoryEnumRegularTourist
  vCERT: string;
  // обыкновенная - туристическая групповая // visaCategoryEnumRegularGroupTravel
  vCERGT: string;
  // обыкновенная - учебная // visaCategoryEnumRegularStudy
  vCERS: string;
  // обыкновенная - на въезд в РФ в целях приёма в гражданство РФ // visaCategoryEnumRegularNationalEntry
  vCERNE: string;
  // транзитная // visaCategoryEnumTransit
  vCETr: string;
  // временно проживающего лица // visaCategoryEnumTemporaryResident
  vCETeR: string;

  /** ******** Пол ********* */
  // мужской
  genderEnumMale: string;
  // женский
  genderEnumFemale: string;

  /** ******** Паспорт ********* */
  // Фамилия (кириллица)
  passportLastName: string;
  // Имя (кириллица)
  passportFirstName: string;
  // Отчество (кириллица)
  passportPatronymic: string;
  // Дата рождения
  //    (дд/мм/гггг)
  passportBirthDate: string;
  // Место рождения
  //    (страна, город)
  passportBirthPlace: string;
  // Гражданство
  passportCitizenship: string;
  // Серия
  passportSeries: string;
  // №
  passportNumber: string;
  // Срок действия с
  //    (дд/мм/гггг)
  passportIssueDate: string;
  // Срок действия - "по" (истечение)
  //    (дд/мм/гггг)
  passportExpirationDate: string;

  /** ******** Визовая анкета ********* */
  // Регистрационный №
  visaRequestRegistrationNumber: string;
  // В связи с ...
  visaRequestReason: string;
  // Адрес постановки на миграционный учет
  visaRequestAddressOfMigrationRegistration: string;
  // Маршрут предполагаемого пребывания
  //    (населенные пункты)
  visaRequestEstimatedRouteOfStay: string;
  // Адрес в стране постоянного проживания
  //    (адрес, телефон, факс (при наличии), адрес электронной почты (при наличии))
  visaRequestAddressInCountryOfContinuousResidence: string;
  // Место работы или учебы, должность
  //    (наименование, должность, адрес, телефон, факс (при наличии), адрес электронной почты (при наличии))
  visaRequestPlaceOfWorkOrStudyAndEmploymentPosition: string;
  // Имеете ли Вы родственников на территории Российской Федерации
  //    (если да, то указать фамилию, имя, отчество (при наличии), степень родства, дату рождения, адрес)
  visaRequestRussianFederationRelatives: string;
  // К визовой анкете прилагаю следующие документы:
  visaRequestAttachedDocuments: string;

  /** ******** Виза ********* */
  // Идентификатор визы
  visaId: string;
  // Серия бланка
  visaBlankSeries: string;
  // №
  visaNumber: string;
  // срок действия: с
  visaIssueDate: string;
  // срок действия: по
  visaExpirationDate: string;
  // № приглашения
  visaInvitationNumber: string;

  /** ******** Уведомление о прибытии ********* */
  // Сведения о приглашающей стороне
  //    (для юридического лица – наименование, ИНН, место нахождения, телефон,
  //    адрес электронной почты (при наличии); для физического лица – фамилия,
  //    имя, отчество (при наличии), дата рождения, серия и номер документа, удостоверяющего
  //    личность, адрес, телефон, адрес электронной почты (при наличии))
  arrivalNoticeInvitingSide: string;
  // Сведения о принимающей стороне
  //    (для юридического лица – наименование, ИНН, место нахождения, телефон,
  //    адрес электронной почты (при наличии); для физического лица – фамилия,
  //    имя, отчество (при наличии), дата рождения, серия и номер документа, удостоверяющего
  //    личность, адрес, телефон, адрес электронной почты (при наличии))
  arrivalNoticeReceivingSide: string;

  /** ******** Близкие родственники ********* */
  // TODO: вставить в файл 4 близких родственника...
}
