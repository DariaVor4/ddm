----------------------------------------------------------------
---------- Renaming tables and columns into camelCase ----------
----------------------------------------------------------------

-- TABLE rename file_store into FileEntity
ALTER TABLE "file_store" RENAME TO "FileEntity";
-- COLUMN file_location into dir
ALTER TABLE "FileEntity" RENAME COLUMN "file_location" TO "dir";
-- COLUMN deleted_at into deletedAt
ALTER TABLE "FileEntity" RENAME COLUMN "deleted_at" TO "deletedAt";
-- COLUMN created_at into createdAt
ALTER TABLE "FileEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "FileEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename confirmation_email into ConfirmationEmailEntity
ALTER TABLE "confirmation_email" RENAME TO "ConfirmationEmailEntity";
-- COLUMN is_confirmed into isConfirmed
ALTER TABLE "ConfirmationEmailEntity" RENAME COLUMN "is_confirmed" TO "isConfirmed";
-- COLUMN created_at into createdAt
ALTER TABLE "ConfirmationEmailEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "ConfirmationEmailEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename confirmation_phone into ConfirmationPhoneEntity
ALTER TABLE "confirmation_phone" RENAME TO "ConfirmationPhoneEntity";
-- COLUMN is_confirmed into isConfirmed
ALTER TABLE "ConfirmationPhoneEntity" RENAME COLUMN "is_confirmed" TO "isConfirmed";
-- COLUMN created_at into createdAt
ALTER TABLE "ConfirmationPhoneEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "ConfirmationPhoneEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename user into UserEntity
ALTER TABLE "user" RENAME TO "UserEntity";
-- COLUMN token_hash into tokenHash
ALTER TABLE "UserEntity" RENAME COLUMN "token_hash" TO "tokenHash";
-- COLUMN last_activity into lastActivity
ALTER TABLE "UserEntity" RENAME COLUMN "last_activity" TO "lastActivity";
-- COLUMN created_at into createdAt
ALTER TABLE "UserEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "UserEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename employee into EmployeeEntity
ALTER TABLE "employee" RENAME TO "EmployeeEntity";
-- COLUMN id_user into id
ALTER TABLE "EmployeeEntity" RENAME COLUMN "id_user" TO "id";
-- COLUMN last_name into lastName
ALTER TABLE "EmployeeEntity" RENAME COLUMN "last_name" TO "lastName";
-- COLUMN first_name into firstName
ALTER TABLE "EmployeeEntity" RENAME COLUMN "first_name" TO "firstName";
-- COLUMN is_admin into isAdmin
ALTER TABLE "EmployeeEntity" RENAME COLUMN "is_admin" TO "isAdmin";
-- COLUMN created_at into createdAt
ALTER TABLE "EmployeeEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "EmployeeEntity" RENAME COLUMN "updated_at" TO "updatedAt";


-- TABLE rename notification into NotificationEntity
ALTER TABLE "notification" RENAME TO "NotificationEntity";
-- COLUMN created_at into createdAt
ALTER TABLE "NotificationEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "NotificationEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename notification_to_user into NotificationToUserEntity
ALTER TABLE "notification_to_user" RENAME TO "NotificationToUserEntity";
-- COLUMN id_notification into notificationId
ALTER TABLE "NotificationToUserEntity" RENAME COLUMN "id_notification" TO "notificationId";
-- COLUMN id_user into userId
ALTER TABLE "NotificationToUserEntity" RENAME COLUMN "id_user" TO "userId";
-- COLUMN is_read into isRead
ALTER TABLE "NotificationToUserEntity" RENAME COLUMN "is_read" TO "isRead";
-- COLUMN created_at into createdAt
ALTER TABLE "NotificationToUserEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "NotificationToUserEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename student into StudentEntity
ALTER TABLE "student" RENAME TO "StudentEntity";
-- COLUMN id_user into id
ALTER TABLE "StudentEntity" RENAME COLUMN "id_user" TO "id";
-- COLUMN created_at into createdAt
ALTER TABLE "StudentEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "StudentEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename student_close_relative into StudentCloseRelativeEntity
ALTER TABLE "student_close_relative" RENAME TO "StudentCloseRelativeEntity";
-- COLUMN id_student into studentId
ALTER TABLE "StudentCloseRelativeEntity" RENAME COLUMN "id_student" TO "studentId";
-- COLUMN last_name into lastName
ALTER TABLE "StudentCloseRelativeEntity" RENAME COLUMN "last_name" TO "lastName";
-- COLUMN first_name into firstName
ALTER TABLE "StudentCloseRelativeEntity" RENAME COLUMN "first_name" TO "firstName";
-- COLUMN birth_date into birthDate
ALTER TABLE "StudentCloseRelativeEntity" RENAME COLUMN "birth_date" TO "birthDate";
-- COLUMN address_continuos_residence into addressContinuousResidence
ALTER TABLE "StudentCloseRelativeEntity" RENAME COLUMN "address_continuos_residence" TO "addressContinuousResidence";
-- COLUMN created_at into createdAt
ALTER TABLE "StudentCloseRelativeEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "StudentCloseRelativeEntity" RENAME COLUMN "updated_at" TO "updatedAt";


-- TABLE rename student_arrival_notice into StudentArrivalNoticeEntity
ALTER TABLE "student_arrival_notice" RENAME TO "StudentArrivalNoticeEntity";
-- COLUMN id_student into studentId
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "id_student" TO "studentId";
-- COLUMN registration_address into address
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "registration_address" TO "address";
-- COLUMN registration_date into date
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "registration_date" TO "date";
-- COLUMN registration_expires into expires
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "registration_expires" TO "expires";
-- COLUMN inviting_side into invitingSide
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "inviting_side" TO "invitingSide";
-- COLUMN receiving_side into receivingSide
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "receiving_side" TO "receivingSide";
-- COLUMN created_at into createdAt
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "StudentArrivalNoticeEntity" RENAME COLUMN "updated_at" TO "updatedAt";


-- TABLE rename student_migration_card into StudentMigrationCardEntity
ALTER TABLE "student_migration_card" RENAME TO "StudentMigrationCardEntity";
-- COLUMN id_student into studentId
ALTER TABLE "StudentMigrationCardEntity" RENAME COLUMN "id_student" TO "studentId";
-- COLUMN issue_date into issueDate
ALTER TABLE "StudentMigrationCardEntity" RENAME COLUMN "issue_date" TO "issueDate";
-- COLUMN expiration_date into expirationDate
ALTER TABLE "StudentMigrationCardEntity" RENAME COLUMN "expiration_date" TO "expirationDate";
-- COLUMN created_at into createdAt
ALTER TABLE "StudentMigrationCardEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "StudentMigrationCardEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename student_visa into StudentVisaEntity
ALTER TABLE "student_visa" RENAME TO "StudentVisaEntity";
-- COLUMN id_student into studentId
ALTER TABLE "StudentVisaEntity" RENAME COLUMN "id_student" TO "studentId";
-- COLUMN blank_series into blankSeries
ALTER TABLE "StudentVisaEntity" RENAME COLUMN "blank_series" TO "blankSeries";
-- COLUMN issue_date into issueDate
ALTER TABLE "StudentVisaEntity" RENAME COLUMN "issue_date" TO "issueDate";
-- COLUMN expiration_date into expirationDate
ALTER TABLE "StudentVisaEntity" RENAME COLUMN "expiration_date" TO "expirationDate";
-- COLUMN invitation_number into invitationNumber
ALTER TABLE "StudentVisaEntity" RENAME COLUMN "invitation_number" TO "invitationNumber";
-- COLUMN created_at into createdAt
ALTER TABLE "StudentVisaEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "StudentVisaEntity" RENAME COLUMN "updated_at" TO "updatedAt";


-- TABLE rename student_passport into StudentPassportEntity
ALTER TABLE "student_passport" RENAME TO "StudentPassportEntity";
-- COLUMN id_student into studentId
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "id_student" TO "studentId";
-- COLUMN last_name into lastName
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "last_name" TO "lastName";
-- COLUMN first_name into firstName
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "first_name" TO "firstName";
-- COLUMN birth_date into birthDate
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "birth_date" TO "birthDate";
-- COLUMN birth_place into birthPlace
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "birth_place" TO "birthPlace";
-- COLUMN issue_date into issueDate
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "issue_date" TO "issueDate";
-- COLUMN issued_by into issuedBy
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "issued_by" TO "issuedBy";
-- COLUMN expiration_date into expirationDate
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "expiration_date" TO "expirationDate";
-- COLUMN created_at into createdAt
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "StudentPassportEntity" RENAME COLUMN "updated_at" TO "updatedAt";

-- TABLE rename student_visa_request into StudentVisaRequestEntity
ALTER TABLE "student_visa_request" RENAME TO "StudentVisaRequestEntity";
-- COLUMN registration_number into registrationNumber
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "registration_number" TO "registrationNumber";
-- COLUMN address_of_migration_registration into addressOfMigrationRegistration
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "address_of_migration_registration" TO "addressOfMigrationRegistration";
-- COLUMN estimated_route_of_stay into estimatedRouteOfStay
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "estimated_route_of_stay" TO "estimatedRouteOfStay";
-- COLUMN address_in_country_of_continuous_residence into addressInCountryOfContinuousResidence
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "address_in_country_of_continuous_residence" TO "addressInCountryOfContinuousResidence";
-- COLUMN place_of_work_or_study_and_employment_position into placeOfWorkOrStudyAndEmploymentPosition
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "place_of_work_or_study_and_employment_position" TO "placeOfWorkOrStudyAndEmploymentPosition";
-- COLUMN russian_federation_relatives into russianFederationRelatives
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "russian_federation_relatives" TO "russianFederationRelatives";
-- COLUMN attached_documents into attachedDocuments
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "attached_documents" TO "attachedDocuments";
-- COLUMN created_at into createdAt
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "created_at" TO "createdAt";
-- COLUMN updated_at into updatedAt
ALTER TABLE "StudentVisaRequestEntity" RENAME COLUMN "updated_at" TO "updatedAt";
