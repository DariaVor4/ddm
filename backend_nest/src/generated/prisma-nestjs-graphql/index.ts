import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { registerEnumType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserEntityScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    tokenHash = "tokenHash",
    lastActivity = "lastActivity",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum StudentVisaRequestEntityScalarFieldEnum {
    id = "id",
    studentId = "studentId",
    status = "status",
    employeeComment = "employeeComment",
    registrationNumber = "registrationNumber",
    category = "category",
    multiplicity = "multiplicity",
    reason = "reason",
    addressOfMigrationRegistration = "addressOfMigrationRegistration",
    estimatedRouteOfStay = "estimatedRouteOfStay",
    addressInCountryOfContinuousResidence = "addressInCountryOfContinuousResidence",
    placeOfWorkOrStudyAndEmploymentPosition = "placeOfWorkOrStudyAndEmploymentPosition",
    russianFederationRelatives = "russianFederationRelatives",
    attachedDocuments = "attachedDocuments",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum StudentVisaEntityScalarFieldEnum {
    id = "id",
    studentId = "studentId",
    blankSeries = "blankSeries",
    number = "number",
    issueDate = "issueDate",
    expirationDate = "expirationDate",
    invitationNumber = "invitationNumber",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum StudentPassportEntityScalarFieldEnum {
    id = "id",
    studentId = "studentId",
    lastName = "lastName",
    firstName = "firstName",
    patronymic = "patronymic",
    birthDate = "birthDate",
    birthPlace = "birthPlace",
    gender = "gender",
    citizenship = "citizenship",
    series = "series",
    number = "number",
    issueDate = "issueDate",
    issuedBy = "issuedBy",
    expirationDate = "expirationDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum StudentMigrationCardEntityScalarFieldEnum {
    id = "id",
    studentId = "studentId",
    series = "series",
    number = "number",
    issueDate = "issueDate",
    expirationDate = "expirationDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum StudentEntityScalarFieldEnum {
    id = "id",
    phone = "phone",
    curator = "curator",
    faculty = "faculty",
    course = "course",
    group = "group",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum StudentCloseRelativeEntityScalarFieldEnum {
    id = "id",
    studentId = "studentId",
    lastName = "lastName",
    firstName = "firstName",
    patronymic = "patronymic",
    birthDate = "birthDate",
    citizenship = "citizenship",
    addressContinuousResidence = "addressContinuousResidence",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum StudentArrivalNoticeEntityScalarFieldEnum {
    id = "id",
    studentId = "studentId",
    profession = "profession",
    address = "address",
    date = "date",
    expires = "expires",
    invitingSide = "invitingSide",
    receivingSide = "receivingSide",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum VisaRequestStatusEnum {
    Pending = "Pending",
    PendingCorrectionsByStudent = "PendingCorrectionsByStudent",
    Verified = "Verified",
    Finished = "Finished"
}

export enum VisaMultiplicityEnum {
    Single = "Single",
    Double = "Double",
    Multiple = "Multiple"
}

export enum VisaCategoryEnum {
    RegularPrivate = "RegularPrivate",
    RegularHumanitarian = "RegularHumanitarian",
    RegularBusiness = "RegularBusiness",
    RegularWorking = "RegularWorking",
    RegularTourist = "RegularTourist",
    RegularGroupTravel = "RegularGroupTravel",
    RegularStudy = "RegularStudy",
    RegularNationalEntry = "RegularNationalEntry",
    Transit = "Transit",
    TemporaryResident = "TemporaryResident"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum GenderEnum {
    Male = "Male",
    Female = "Female"
}

export enum NotificationToUserEntityScalarFieldEnum {
    notificationId = "notificationId",
    userId = "userId",
    isRead = "isRead",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum NotificationEntityScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum EmployeeEntityScalarFieldEnum {
    id = "id",
    lastName = "lastName",
    firstName = "firstName",
    patronymic = "patronymic",
    isAdmin = "isAdmin",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ConfirmationPhoneEntityScalarFieldEnum {
    id = "id",
    phone = "phone",
    code = "code",
    isConfirmed = "isConfirmed",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ConfirmationEmailEntityScalarFieldEnum {
    id = "id",
    email = "email",
    code = "code",
    isConfirmed = "isConfirmed",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(ConfirmationEmailEntityScalarFieldEnum, { name: 'ConfirmationEmailEntityScalarFieldEnum', description: undefined })
registerEnumType(ConfirmationPhoneEntityScalarFieldEnum, { name: 'ConfirmationPhoneEntityScalarFieldEnum', description: undefined })
registerEnumType(EmployeeEntityScalarFieldEnum, { name: 'EmployeeEntityScalarFieldEnum', description: undefined })
registerEnumType(NotificationEntityScalarFieldEnum, { name: 'NotificationEntityScalarFieldEnum', description: undefined })
registerEnumType(NotificationToUserEntityScalarFieldEnum, { name: 'NotificationToUserEntityScalarFieldEnum', description: undefined })
registerEnumType(GenderEnum, { name: 'GenderEnum', description: "Пол" })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(VisaCategoryEnum, { name: 'VisaCategoryEnum', description: "Требуемая категория визы в визовой анкете" })
registerEnumType(VisaMultiplicityEnum, { name: 'VisaMultiplicityEnum', description: "Требуемая кратность визы в визовой анкете" })
registerEnumType(VisaRequestStatusEnum, { name: 'VisaRequestStatusEnum', description: "Статус анкеты на визу" })
registerEnumType(StudentArrivalNoticeEntityScalarFieldEnum, { name: 'StudentArrivalNoticeEntityScalarFieldEnum', description: undefined })
registerEnumType(StudentCloseRelativeEntityScalarFieldEnum, { name: 'StudentCloseRelativeEntityScalarFieldEnum', description: undefined })
registerEnumType(StudentEntityScalarFieldEnum, { name: 'StudentEntityScalarFieldEnum', description: undefined })
registerEnumType(StudentMigrationCardEntityScalarFieldEnum, { name: 'StudentMigrationCardEntityScalarFieldEnum', description: undefined })
registerEnumType(StudentPassportEntityScalarFieldEnum, { name: 'StudentPassportEntityScalarFieldEnum', description: undefined })
registerEnumType(StudentVisaEntityScalarFieldEnum, { name: 'StudentVisaEntityScalarFieldEnum', description: undefined })
registerEnumType(StudentVisaRequestEntityScalarFieldEnum, { name: 'StudentVisaRequestEntityScalarFieldEnum', description: undefined })
registerEnumType(UserEntityScalarFieldEnum, { name: 'UserEntityScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateConfirmationEmailEntity {
    @Field(() => ConfirmationEmailEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ConfirmationEmailEntityCountAggregate>;
    @Field(() => ConfirmationEmailEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ConfirmationEmailEntityMinAggregate>;
    @Field(() => ConfirmationEmailEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ConfirmationEmailEntityMaxAggregate>;
}

@ArgsType()
export class ConfirmationEmailEntityAggregateArgs {
    @Field(() => ConfirmationEmailEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationEmailEntityWhereInput)
    where?: InstanceType<typeof ConfirmationEmailEntityWhereInput>;
    @Field(() => [ConfirmationEmailEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationEmailEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ConfirmationEmailEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfirmationEmailEntityCountAggregateInput>;
    @Field(() => ConfirmationEmailEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfirmationEmailEntityMinAggregateInput>;
    @Field(() => ConfirmationEmailEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfirmationEmailEntityMaxAggregateInput>;
}

@InputType()
export class ConfirmationEmailEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ConfirmationEmailEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    isConfirmed!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ConfirmationEmailEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationEmailEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationEmailEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@ArgsType()
export class ConfirmationEmailEntityGroupByArgs {
    @Field(() => ConfirmationEmailEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationEmailEntityWhereInput)
    where?: InstanceType<typeof ConfirmationEmailEntityWhereInput>;
    @Field(() => [ConfirmationEmailEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfirmationEmailEntityOrderByWithAggregationInput>;
    @Field(() => [ConfirmationEmailEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfirmationEmailEntityScalarFieldEnum>;
    @Field(() => ConfirmationEmailEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ConfirmationEmailEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ConfirmationEmailEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfirmationEmailEntityCountAggregateInput>;
    @Field(() => ConfirmationEmailEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfirmationEmailEntityMinAggregateInput>;
    @Field(() => ConfirmationEmailEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfirmationEmailEntityMaxAggregateInput>;
}

@ObjectType()
export class ConfirmationEmailEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:false})
    isConfirmed!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ConfirmationEmailEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ConfirmationEmailEntityCountAggregate>;
    @Field(() => ConfirmationEmailEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ConfirmationEmailEntityMinAggregate>;
    @Field(() => ConfirmationEmailEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ConfirmationEmailEntityMaxAggregate>;
}

@InputType()
export class ConfirmationEmailEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class ConfirmationEmailEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationEmailEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationEmailEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class ConfirmationEmailEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationEmailEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationEmailEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ConfirmationEmailEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfirmationEmailEntityCountOrderByAggregateInput>;
    @Field(() => ConfirmationEmailEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfirmationEmailEntityMaxOrderByAggregateInput>;
    @Field(() => ConfirmationEmailEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfirmationEmailEntityMinOrderByAggregateInput>;
}

@InputType()
export class ConfirmationEmailEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationEmailEntityScalarWhereWithAggregatesInput {
    @Field(() => [ConfirmationEmailEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfirmationEmailEntityScalarWhereWithAggregatesInput>;
    @Field(() => [ConfirmationEmailEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfirmationEmailEntityScalarWhereWithAggregatesInput>;
    @Field(() => [ConfirmationEmailEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfirmationEmailEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ConfirmationEmailEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationEmailEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationEmailEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationEmailEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationEmailEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationEmailEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class ConfirmationEmailEntityWhereInput {
    @Field(() => [ConfirmationEmailEntityWhereInput], {nullable:true})
    AND?: Array<ConfirmationEmailEntityWhereInput>;
    @Field(() => [ConfirmationEmailEntityWhereInput], {nullable:true})
    OR?: Array<ConfirmationEmailEntityWhereInput>;
    @Field(() => [ConfirmationEmailEntityWhereInput], {nullable:true})
    NOT?: Array<ConfirmationEmailEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

/**
 * Подтверждение почтового адреса
 */
@ObjectType({description:'Подтверждение почтового адреса'})
export class ConfirmationEmailEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isConfirmed!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}

@ArgsType()
export class CreateManyConfirmationEmailEntityArgs {
    @Field(() => [ConfirmationEmailEntityCreateManyInput], {nullable:false})
    @Type(() => ConfirmationEmailEntityCreateManyInput)
    data!: Array<ConfirmationEmailEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityCreateInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityCreateInput)
    data!: InstanceType<typeof ConfirmationEmailEntityCreateInput>;
}

@ArgsType()
export class DeleteManyConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationEmailEntityWhereInput)
    where?: InstanceType<typeof ConfirmationEmailEntityWhereInput>;
}

@ArgsType()
export class DeleteOneConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstConfirmationEmailEntityOrThrowArgs {
    @Field(() => ConfirmationEmailEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationEmailEntityWhereInput)
    where?: InstanceType<typeof ConfirmationEmailEntityWhereInput>;
    @Field(() => [ConfirmationEmailEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationEmailEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfirmationEmailEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfirmationEmailEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationEmailEntityWhereInput)
    where?: InstanceType<typeof ConfirmationEmailEntityWhereInput>;
    @Field(() => [ConfirmationEmailEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationEmailEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfirmationEmailEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfirmationEmailEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationEmailEntityWhereInput)
    where?: InstanceType<typeof ConfirmationEmailEntityWhereInput>;
    @Field(() => [ConfirmationEmailEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationEmailEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfirmationEmailEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfirmationEmailEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueConfirmationEmailEntityOrThrowArgs {
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityUpdateManyMutationInput)
    data!: InstanceType<typeof ConfirmationEmailEntityUpdateManyMutationInput>;
    @Field(() => ConfirmationEmailEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationEmailEntityWhereInput)
    where?: InstanceType<typeof ConfirmationEmailEntityWhereInput>;
}

@ArgsType()
export class UpdateOneConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityUpdateInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityUpdateInput)
    data!: InstanceType<typeof ConfirmationEmailEntityUpdateInput>;
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneConfirmationEmailEntityArgs {
    @Field(() => ConfirmationEmailEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationEmailEntityWhereUniqueInput>;
    @Field(() => ConfirmationEmailEntityCreateInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityCreateInput)
    create!: InstanceType<typeof ConfirmationEmailEntityCreateInput>;
    @Field(() => ConfirmationEmailEntityUpdateInput, {nullable:false})
    @Type(() => ConfirmationEmailEntityUpdateInput)
    update!: InstanceType<typeof ConfirmationEmailEntityUpdateInput>;
}

@ObjectType()
export class AggregateConfirmationPhoneEntity {
    @Field(() => ConfirmationPhoneEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ConfirmationPhoneEntityCountAggregate>;
    @Field(() => ConfirmationPhoneEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ConfirmationPhoneEntityMinAggregate>;
    @Field(() => ConfirmationPhoneEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ConfirmationPhoneEntityMaxAggregate>;
}

@ArgsType()
export class ConfirmationPhoneEntityAggregateArgs {
    @Field(() => ConfirmationPhoneEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationPhoneEntityWhereInput)
    where?: InstanceType<typeof ConfirmationPhoneEntityWhereInput>;
    @Field(() => [ConfirmationPhoneEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationPhoneEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ConfirmationPhoneEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfirmationPhoneEntityCountAggregateInput>;
    @Field(() => ConfirmationPhoneEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfirmationPhoneEntityMinAggregateInput>;
    @Field(() => ConfirmationPhoneEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfirmationPhoneEntityMaxAggregateInput>;
}

@InputType()
export class ConfirmationPhoneEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ConfirmationPhoneEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    isConfirmed!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ConfirmationPhoneEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationPhoneEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationPhoneEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@ArgsType()
export class ConfirmationPhoneEntityGroupByArgs {
    @Field(() => ConfirmationPhoneEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationPhoneEntityWhereInput)
    where?: InstanceType<typeof ConfirmationPhoneEntityWhereInput>;
    @Field(() => [ConfirmationPhoneEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfirmationPhoneEntityOrderByWithAggregationInput>;
    @Field(() => [ConfirmationPhoneEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfirmationPhoneEntityScalarFieldEnum>;
    @Field(() => ConfirmationPhoneEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ConfirmationPhoneEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ConfirmationPhoneEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfirmationPhoneEntityCountAggregateInput>;
    @Field(() => ConfirmationPhoneEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfirmationPhoneEntityMinAggregateInput>;
    @Field(() => ConfirmationPhoneEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfirmationPhoneEntityMaxAggregateInput>;
}

@ObjectType()
export class ConfirmationPhoneEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:false})
    isConfirmed!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ConfirmationPhoneEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ConfirmationPhoneEntityCountAggregate>;
    @Field(() => ConfirmationPhoneEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ConfirmationPhoneEntityMinAggregate>;
    @Field(() => ConfirmationPhoneEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ConfirmationPhoneEntityMaxAggregate>;
}

@InputType()
export class ConfirmationPhoneEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class ConfirmationPhoneEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationPhoneEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationPhoneEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class ConfirmationPhoneEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationPhoneEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationPhoneEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ConfirmationPhoneEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ConfirmationPhoneEntityCountOrderByAggregateInput>;
    @Field(() => ConfirmationPhoneEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ConfirmationPhoneEntityMaxOrderByAggregateInput>;
    @Field(() => ConfirmationPhoneEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ConfirmationPhoneEntityMinOrderByAggregateInput>;
}

@InputType()
export class ConfirmationPhoneEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isConfirmed?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ConfirmationPhoneEntityScalarWhereWithAggregatesInput {
    @Field(() => [ConfirmationPhoneEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfirmationPhoneEntityScalarWhereWithAggregatesInput>;
    @Field(() => [ConfirmationPhoneEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfirmationPhoneEntityScalarWhereWithAggregatesInput>;
    @Field(() => [ConfirmationPhoneEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfirmationPhoneEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ConfirmationPhoneEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    isConfirmed?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class ConfirmationPhoneEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationPhoneEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationPhoneEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationPhoneEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ConfirmationPhoneEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class ConfirmationPhoneEntityWhereInput {
    @Field(() => [ConfirmationPhoneEntityWhereInput], {nullable:true})
    AND?: Array<ConfirmationPhoneEntityWhereInput>;
    @Field(() => [ConfirmationPhoneEntityWhereInput], {nullable:true})
    OR?: Array<ConfirmationPhoneEntityWhereInput>;
    @Field(() => [ConfirmationPhoneEntityWhereInput], {nullable:true})
    NOT?: Array<ConfirmationPhoneEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    phone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isConfirmed?: InstanceType<typeof BoolFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

/**
 * Подтверждение номера телефона
 */
@ObjectType({description:'Подтверждение номера телефона'})
export class ConfirmationPhoneEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isConfirmed!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}

@ArgsType()
export class CreateManyConfirmationPhoneEntityArgs {
    @Field(() => [ConfirmationPhoneEntityCreateManyInput], {nullable:false})
    @Type(() => ConfirmationPhoneEntityCreateManyInput)
    data!: Array<ConfirmationPhoneEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityCreateInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityCreateInput)
    data!: InstanceType<typeof ConfirmationPhoneEntityCreateInput>;
}

@ArgsType()
export class DeleteManyConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationPhoneEntityWhereInput)
    where?: InstanceType<typeof ConfirmationPhoneEntityWhereInput>;
}

@ArgsType()
export class DeleteOneConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstConfirmationPhoneEntityOrThrowArgs {
    @Field(() => ConfirmationPhoneEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationPhoneEntityWhereInput)
    where?: InstanceType<typeof ConfirmationPhoneEntityWhereInput>;
    @Field(() => [ConfirmationPhoneEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationPhoneEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfirmationPhoneEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfirmationPhoneEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationPhoneEntityWhereInput)
    where?: InstanceType<typeof ConfirmationPhoneEntityWhereInput>;
    @Field(() => [ConfirmationPhoneEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationPhoneEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfirmationPhoneEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfirmationPhoneEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationPhoneEntityWhereInput)
    where?: InstanceType<typeof ConfirmationPhoneEntityWhereInput>;
    @Field(() => [ConfirmationPhoneEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfirmationPhoneEntityOrderByWithRelationInput>;
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ConfirmationPhoneEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfirmationPhoneEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueConfirmationPhoneEntityOrThrowArgs {
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityUpdateManyMutationInput)
    data!: InstanceType<typeof ConfirmationPhoneEntityUpdateManyMutationInput>;
    @Field(() => ConfirmationPhoneEntityWhereInput, {nullable:true})
    @Type(() => ConfirmationPhoneEntityWhereInput)
    where?: InstanceType<typeof ConfirmationPhoneEntityWhereInput>;
}

@ArgsType()
export class UpdateOneConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityUpdateInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityUpdateInput)
    data!: InstanceType<typeof ConfirmationPhoneEntityUpdateInput>;
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneConfirmationPhoneEntityArgs {
    @Field(() => ConfirmationPhoneEntityWhereUniqueInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityWhereUniqueInput)
    where!: InstanceType<typeof ConfirmationPhoneEntityWhereUniqueInput>;
    @Field(() => ConfirmationPhoneEntityCreateInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityCreateInput)
    create!: InstanceType<typeof ConfirmationPhoneEntityCreateInput>;
    @Field(() => ConfirmationPhoneEntityUpdateInput, {nullable:false})
    @Type(() => ConfirmationPhoneEntityUpdateInput)
    update!: InstanceType<typeof ConfirmationPhoneEntityUpdateInput>;
}

@ObjectType()
export class AggregateEmployeeEntity {
    @Field(() => EmployeeEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmployeeEntityCountAggregate>;
    @Field(() => EmployeeEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmployeeEntityMinAggregate>;
    @Field(() => EmployeeEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmployeeEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyEmployeeEntityArgs {
    @Field(() => [EmployeeEntityCreateManyInput], {nullable:false})
    @Type(() => EmployeeEntityCreateManyInput)
    data!: Array<EmployeeEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneEmployeeEntityArgs {
    @Field(() => EmployeeEntityCreateInput, {nullable:false})
    @Type(() => EmployeeEntityCreateInput)
    data!: InstanceType<typeof EmployeeEntityCreateInput>;
}

@ArgsType()
export class DeleteManyEmployeeEntityArgs {
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    @Type(() => EmployeeEntityWhereInput)
    where?: InstanceType<typeof EmployeeEntityWhereInput>;
}

@ArgsType()
export class DeleteOneEmployeeEntityArgs {
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeEntityWhereUniqueInput)
    where!: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
}

@ArgsType()
export class EmployeeEntityAggregateArgs {
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    @Type(() => EmployeeEntityWhereInput)
    where?: InstanceType<typeof EmployeeEntityWhereInput>;
    @Field(() => [EmployeeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeEntityOrderByWithRelationInput>;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmployeeEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmployeeEntityCountAggregateInput>;
    @Field(() => EmployeeEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmployeeEntityMinAggregateInput>;
    @Field(() => EmployeeEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmployeeEntityMaxAggregateInput>;
}

@InputType()
export class EmployeeEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class EmployeeEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    patronymic!: number;
    @Field(() => Int, {nullable:false})
    isAdmin!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class EmployeeEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeEntityCreateNestedOneWithoutUserInput {
    @Field(() => EmployeeEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateWithoutUserInput)
    create?: InstanceType<typeof EmployeeEntityCreateWithoutUserInput>;
    @Field(() => EmployeeEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof EmployeeEntityCreateOrConnectWithoutUserInput>;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeEntityWhereUniqueInput)
    connect?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
}

@InputType()
export class EmployeeEntityCreateOrConnectWithoutUserInput {
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeEntityWhereUniqueInput)
    where!: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => EmployeeEntityCreateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeEntityCreateWithoutUserInput)
    create!: InstanceType<typeof EmployeeEntityCreateWithoutUserInput>;
}

@InputType()
export class EmployeeEntityCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeEntityCreateInput {
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutEmployeeInput>;
}

@ArgsType()
export class EmployeeEntityGroupByArgs {
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    @Type(() => EmployeeEntityWhereInput)
    where?: InstanceType<typeof EmployeeEntityWhereInput>;
    @Field(() => [EmployeeEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmployeeEntityOrderByWithAggregationInput>;
    @Field(() => [EmployeeEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeeEntityScalarFieldEnum>;
    @Field(() => EmployeeEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof EmployeeEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmployeeEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmployeeEntityCountAggregateInput>;
    @Field(() => EmployeeEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmployeeEntityMinAggregateInput>;
    @Field(() => EmployeeEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmployeeEntityMaxAggregateInput>;
}

@ObjectType()
export class EmployeeEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:false})
    isAdmin!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmployeeEntityCountAggregate>;
    @Field(() => EmployeeEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmployeeEntityMinAggregate>;
    @Field(() => EmployeeEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmployeeEntityMaxAggregate>;
}

@InputType()
export class EmployeeEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class EmployeeEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class EmployeeEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmployeeEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmployeeEntityCountOrderByAggregateInput>;
    @Field(() => EmployeeEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmployeeEntityMaxOrderByAggregateInput>;
    @Field(() => EmployeeEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmployeeEntityMinOrderByAggregateInput>;
}

@InputType()
export class EmployeeEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    user?: InstanceType<typeof UserEntityOrderByWithRelationInput>;
}

@InputType()
export class EmployeeEntityRelationFilter {
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof EmployeeEntityWhereInput>;
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof EmployeeEntityWhereInput>;
}

@InputType()
export class EmployeeEntityScalarWhereWithAggregatesInput {
    @Field(() => [EmployeeEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeEntityScalarWhereWithAggregatesInput>;
    @Field(() => [EmployeeEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeEntityScalarWhereWithAggregatesInput>;
    @Field(() => [EmployeeEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    patronymic?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAdmin?: InstanceType<typeof BoolWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class EmployeeEntityUncheckedCreateNestedOneWithoutUserInput {
    @Field(() => EmployeeEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateWithoutUserInput)
    create?: InstanceType<typeof EmployeeEntityCreateWithoutUserInput>;
    @Field(() => EmployeeEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof EmployeeEntityCreateOrConnectWithoutUserInput>;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeEntityWhereUniqueInput)
    connect?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
}

@InputType()
export class EmployeeEntityUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeEntityUncheckedUpdateOneWithoutUserNestedInput {
    @Field(() => EmployeeEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateWithoutUserInput)
    create?: InstanceType<typeof EmployeeEntityCreateWithoutUserInput>;
    @Field(() => EmployeeEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof EmployeeEntityCreateOrConnectWithoutUserInput>;
    @Field(() => EmployeeEntityUpsertWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityUpsertWithoutUserInput)
    upsert?: InstanceType<typeof EmployeeEntityUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeEntityWhereUniqueInput)
    connect?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => EmployeeEntityUpdateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityUpdateWithoutUserInput)
    update?: InstanceType<typeof EmployeeEntityUpdateWithoutUserInput>;
}

@InputType()
export class EmployeeEntityUncheckedUpdateWithoutUserInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeEntityUpdateManyMutationInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeEntityUpdateOneWithoutUserNestedInput {
    @Field(() => EmployeeEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateWithoutUserInput)
    create?: InstanceType<typeof EmployeeEntityCreateWithoutUserInput>;
    @Field(() => EmployeeEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof EmployeeEntityCreateOrConnectWithoutUserInput>;
    @Field(() => EmployeeEntityUpsertWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityUpsertWithoutUserInput)
    upsert?: InstanceType<typeof EmployeeEntityUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeEntityWhereUniqueInput)
    connect?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => EmployeeEntityUpdateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeEntityUpdateWithoutUserInput)
    update?: InstanceType<typeof EmployeeEntityUpdateWithoutUserInput>;
}

@InputType()
export class EmployeeEntityUpdateWithoutUserInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeEntityUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutEmployeeNestedInput>;
}

@InputType()
export class EmployeeEntityUpsertWithoutUserInput {
    @Field(() => EmployeeEntityUpdateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeEntityUpdateWithoutUserInput)
    update!: InstanceType<typeof EmployeeEntityUpdateWithoutUserInput>;
    @Field(() => EmployeeEntityCreateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeEntityCreateWithoutUserInput)
    create!: InstanceType<typeof EmployeeEntityCreateWithoutUserInput>;
}

@InputType()
export class EmployeeEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class EmployeeEntityWhereInput {
    @Field(() => [EmployeeEntityWhereInput], {nullable:true})
    AND?: Array<EmployeeEntityWhereInput>;
    @Field(() => [EmployeeEntityWhereInput], {nullable:true})
    OR?: Array<EmployeeEntityWhereInput>;
    @Field(() => [EmployeeEntityWhereInput], {nullable:true})
    NOT?: Array<EmployeeEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    patronymic?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isAdmin?: InstanceType<typeof BoolFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    user?: InstanceType<typeof UserEntityRelationFilter>;
}

/**
 * Сотрудник
 */
@ObjectType({description:'Сотрудник'})
export class EmployeeEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    /**
     * Фамилия
     */
    @Field(() => String, {nullable:true,description:'Фамилия'})
    lastName!: string | null;
    /**
     * Имя
     */
    @Field(() => String, {nullable:true,description:'Имя'})
    firstName!: string | null;
    /**
     * Отчество
     */
    @Field(() => String, {nullable:true,description:'Отчество'})
    patronymic!: string | null;
    /**
     * Является ли админом?
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Является ли админом?'})
    isAdmin!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => UserEntity, {nullable:false})
    user?: InstanceType<typeof UserEntity>;
}

@ArgsType()
export class FindFirstEmployeeEntityOrThrowArgs {
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    @Type(() => EmployeeEntityWhereInput)
    where?: InstanceType<typeof EmployeeEntityWhereInput>;
    @Field(() => [EmployeeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeEntityOrderByWithRelationInput>;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmployeeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstEmployeeEntityArgs {
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    @Type(() => EmployeeEntityWhereInput)
    where?: InstanceType<typeof EmployeeEntityWhereInput>;
    @Field(() => [EmployeeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeEntityOrderByWithRelationInput>;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmployeeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyEmployeeEntityArgs {
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    @Type(() => EmployeeEntityWhereInput)
    where?: InstanceType<typeof EmployeeEntityWhereInput>;
    @Field(() => [EmployeeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeEntityOrderByWithRelationInput>;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmployeeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueEmployeeEntityOrThrowArgs {
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeEntityWhereUniqueInput)
    where!: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueEmployeeEntityArgs {
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeEntityWhereUniqueInput)
    where!: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyEmployeeEntityArgs {
    @Field(() => EmployeeEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeeEntityUpdateManyMutationInput)
    data!: InstanceType<typeof EmployeeEntityUpdateManyMutationInput>;
    @Field(() => EmployeeEntityWhereInput, {nullable:true})
    @Type(() => EmployeeEntityWhereInput)
    where?: InstanceType<typeof EmployeeEntityWhereInput>;
}

@ArgsType()
export class UpdateOneEmployeeEntityArgs {
    @Field(() => EmployeeEntityUpdateInput, {nullable:false})
    @Type(() => EmployeeEntityUpdateInput)
    data!: InstanceType<typeof EmployeeEntityUpdateInput>;
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeEntityWhereUniqueInput)
    where!: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneEmployeeEntityArgs {
    @Field(() => EmployeeEntityWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeEntityWhereUniqueInput)
    where!: InstanceType<typeof EmployeeEntityWhereUniqueInput>;
    @Field(() => EmployeeEntityCreateInput, {nullable:false})
    @Type(() => EmployeeEntityCreateInput)
    create!: InstanceType<typeof EmployeeEntityCreateInput>;
    @Field(() => EmployeeEntityUpdateInput, {nullable:false})
    @Type(() => EmployeeEntityUpdateInput)
    update!: InstanceType<typeof EmployeeEntityUpdateInput>;
}

@ObjectType()
export class AggregateNotificationEntity {
    @Field(() => NotificationEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof NotificationEntityCountAggregate>;
    @Field(() => NotificationEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof NotificationEntityMinAggregate>;
    @Field(() => NotificationEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof NotificationEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyNotificationEntityArgs {
    @Field(() => [NotificationEntityCreateManyInput], {nullable:false})
    @Type(() => NotificationEntityCreateManyInput)
    data!: Array<NotificationEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneNotificationEntityArgs {
    @Field(() => NotificationEntityCreateInput, {nullable:false})
    @Type(() => NotificationEntityCreateInput)
    data!: InstanceType<typeof NotificationEntityCreateInput>;
}

@ArgsType()
export class DeleteManyNotificationEntityArgs {
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    @Type(() => NotificationEntityWhereInput)
    where?: InstanceType<typeof NotificationEntityWhereInput>;
}

@ArgsType()
export class DeleteOneNotificationEntityArgs {
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstNotificationEntityOrThrowArgs {
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    @Type(() => NotificationEntityWhereInput)
    where?: InstanceType<typeof NotificationEntityWhereInput>;
    @Field(() => [NotificationEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationEntityOrderByWithRelationInput>;
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NotificationEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstNotificationEntityArgs {
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    @Type(() => NotificationEntityWhereInput)
    where?: InstanceType<typeof NotificationEntityWhereInput>;
    @Field(() => [NotificationEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationEntityOrderByWithRelationInput>;
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NotificationEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyNotificationEntityArgs {
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    @Type(() => NotificationEntityWhereInput)
    where?: InstanceType<typeof NotificationEntityWhereInput>;
    @Field(() => [NotificationEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationEntityOrderByWithRelationInput>;
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NotificationEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueNotificationEntityOrThrowArgs {
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueNotificationEntityArgs {
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationEntityWhereUniqueInput>;
}

@ArgsType()
export class NotificationEntityAggregateArgs {
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    @Type(() => NotificationEntityWhereInput)
    where?: InstanceType<typeof NotificationEntityWhereInput>;
    @Field(() => [NotificationEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationEntityOrderByWithRelationInput>;
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => NotificationEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NotificationEntityCountAggregateInput>;
    @Field(() => NotificationEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NotificationEntityMinAggregateInput>;
    @Field(() => NotificationEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NotificationEntityMaxAggregateInput>;
}

@InputType()
export class NotificationEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class NotificationEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class NotificationEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class NotificationEntityCount {
    @Field(() => Int, {nullable:false})
    users?: number;
}

@InputType()
export class NotificationEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationEntityCreateNestedOneWithoutUsersInput {
    @Field(() => NotificationEntityCreateWithoutUsersInput, {nullable:true})
    @Type(() => NotificationEntityCreateWithoutUsersInput)
    create?: InstanceType<typeof NotificationEntityCreateWithoutUsersInput>;
    @Field(() => NotificationEntityCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => NotificationEntityCreateOrConnectWithoutUsersInput)
    connectOrCreate?: InstanceType<typeof NotificationEntityCreateOrConnectWithoutUsersInput>;
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:true})
    @Type(() => NotificationEntityWhereUniqueInput)
    connect?: InstanceType<typeof NotificationEntityWhereUniqueInput>;
}

@InputType()
export class NotificationEntityCreateOrConnectWithoutUsersInput {
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationEntityWhereUniqueInput>;
    @Field(() => NotificationEntityCreateWithoutUsersInput, {nullable:false})
    @Type(() => NotificationEntityCreateWithoutUsersInput)
    create!: InstanceType<typeof NotificationEntityCreateWithoutUsersInput>;
}

@InputType()
export class NotificationEntityCreateWithoutUsersInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => NotificationToUserEntityCreateNestedManyWithoutNotificationInput, {nullable:true})
    users?: InstanceType<typeof NotificationToUserEntityCreateNestedManyWithoutNotificationInput>;
}

@ArgsType()
export class NotificationEntityGroupByArgs {
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    @Type(() => NotificationEntityWhereInput)
    where?: InstanceType<typeof NotificationEntityWhereInput>;
    @Field(() => [NotificationEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotificationEntityOrderByWithAggregationInput>;
    @Field(() => [NotificationEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotificationEntityScalarFieldEnum>;
    @Field(() => NotificationEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof NotificationEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => NotificationEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NotificationEntityCountAggregateInput>;
    @Field(() => NotificationEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NotificationEntityMinAggregateInput>;
    @Field(() => NotificationEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NotificationEntityMaxAggregateInput>;
}

@ObjectType()
export class NotificationEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => NotificationEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof NotificationEntityCountAggregate>;
    @Field(() => NotificationEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof NotificationEntityMinAggregate>;
    @Field(() => NotificationEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof NotificationEntityMaxAggregate>;
}

@InputType()
export class NotificationEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class NotificationEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NotificationEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class NotificationEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class NotificationEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NotificationEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class NotificationEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => NotificationEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NotificationEntityCountOrderByAggregateInput>;
    @Field(() => NotificationEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NotificationEntityMaxOrderByAggregateInput>;
    @Field(() => NotificationEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NotificationEntityMinOrderByAggregateInput>;
}

@InputType()
export class NotificationEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => NotificationToUserEntityOrderByRelationAggregateInput, {nullable:true})
    users?: InstanceType<typeof NotificationToUserEntityOrderByRelationAggregateInput>;
}

@InputType()
export class NotificationEntityRelationFilter {
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof NotificationEntityWhereInput>;
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof NotificationEntityWhereInput>;
}

@InputType()
export class NotificationEntityScalarWhereWithAggregatesInput {
    @Field(() => [NotificationEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationEntityScalarWhereWithAggregatesInput>;
    @Field(() => [NotificationEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationEntityScalarWhereWithAggregatesInput>;
    @Field(() => [NotificationEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class NotificationEntityUncheckedCreateWithoutUsersInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => NotificationToUserEntityUncheckedCreateNestedManyWithoutNotificationInput, {nullable:true})
    users?: InstanceType<typeof NotificationToUserEntityUncheckedCreateNestedManyWithoutNotificationInput>;
}

@InputType()
export class NotificationEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationEntityUncheckedUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NotificationToUserEntityUncheckedUpdateManyWithoutNotificationNestedInput, {nullable:true})
    users?: InstanceType<typeof NotificationToUserEntityUncheckedUpdateManyWithoutNotificationNestedInput>;
}

@InputType()
export class NotificationEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationEntityUpdateOneRequiredWithoutUsersNestedInput {
    @Field(() => NotificationEntityCreateWithoutUsersInput, {nullable:true})
    @Type(() => NotificationEntityCreateWithoutUsersInput)
    create?: InstanceType<typeof NotificationEntityCreateWithoutUsersInput>;
    @Field(() => NotificationEntityCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => NotificationEntityCreateOrConnectWithoutUsersInput)
    connectOrCreate?: InstanceType<typeof NotificationEntityCreateOrConnectWithoutUsersInput>;
    @Field(() => NotificationEntityUpsertWithoutUsersInput, {nullable:true})
    @Type(() => NotificationEntityUpsertWithoutUsersInput)
    upsert?: InstanceType<typeof NotificationEntityUpsertWithoutUsersInput>;
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:true})
    @Type(() => NotificationEntityWhereUniqueInput)
    connect?: InstanceType<typeof NotificationEntityWhereUniqueInput>;
    @Field(() => NotificationEntityUpdateWithoutUsersInput, {nullable:true})
    @Type(() => NotificationEntityUpdateWithoutUsersInput)
    update?: InstanceType<typeof NotificationEntityUpdateWithoutUsersInput>;
}

@InputType()
export class NotificationEntityUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NotificationToUserEntityUpdateManyWithoutNotificationNestedInput, {nullable:true})
    users?: InstanceType<typeof NotificationToUserEntityUpdateManyWithoutNotificationNestedInput>;
}

@InputType()
export class NotificationEntityUpsertWithoutUsersInput {
    @Field(() => NotificationEntityUpdateWithoutUsersInput, {nullable:false})
    @Type(() => NotificationEntityUpdateWithoutUsersInput)
    update!: InstanceType<typeof NotificationEntityUpdateWithoutUsersInput>;
    @Field(() => NotificationEntityCreateWithoutUsersInput, {nullable:false})
    @Type(() => NotificationEntityCreateWithoutUsersInput)
    create!: InstanceType<typeof NotificationEntityCreateWithoutUsersInput>;
}

@InputType()
export class NotificationEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class NotificationEntityWhereInput {
    @Field(() => [NotificationEntityWhereInput], {nullable:true})
    AND?: Array<NotificationEntityWhereInput>;
    @Field(() => [NotificationEntityWhereInput], {nullable:true})
    OR?: Array<NotificationEntityWhereInput>;
    @Field(() => [NotificationEntityWhereInput], {nullable:true})
    NOT?: Array<NotificationEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => NotificationToUserEntityListRelationFilter, {nullable:true})
    users?: InstanceType<typeof NotificationToUserEntityListRelationFilter>;
}

/**
 * Уведомление
 */
@ObjectType({description:'Уведомление'})
export class NotificationEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    /**
     * Заголовок
     */
    @Field(() => String, {nullable:false,description:'Заголовок'})
    title!: string;
    /**
     * Содержимое
     */
    @Field(() => String, {nullable:false,description:'Содержимое'})
    content!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    /**
     * Получатели
     */
    @Field(() => [NotificationToUserEntity], {nullable:true,description:'Получатели'})
    users?: Array<NotificationToUserEntity>;
    @Field(() => NotificationEntityCount, {nullable:false})
    _count?: InstanceType<typeof NotificationEntityCount>;
}

@ArgsType()
export class UpdateManyNotificationEntityArgs {
    @Field(() => NotificationEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationEntityUpdateManyMutationInput)
    data!: InstanceType<typeof NotificationEntityUpdateManyMutationInput>;
    @Field(() => NotificationEntityWhereInput, {nullable:true})
    @Type(() => NotificationEntityWhereInput)
    where?: InstanceType<typeof NotificationEntityWhereInput>;
}

@ArgsType()
export class UpdateOneNotificationEntityArgs {
    @Field(() => NotificationEntityUpdateInput, {nullable:false})
    @Type(() => NotificationEntityUpdateInput)
    data!: InstanceType<typeof NotificationEntityUpdateInput>;
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneNotificationEntityArgs {
    @Field(() => NotificationEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationEntityWhereUniqueInput>;
    @Field(() => NotificationEntityCreateInput, {nullable:false})
    @Type(() => NotificationEntityCreateInput)
    create!: InstanceType<typeof NotificationEntityCreateInput>;
    @Field(() => NotificationEntityUpdateInput, {nullable:false})
    @Type(() => NotificationEntityUpdateInput)
    update!: InstanceType<typeof NotificationEntityUpdateInput>;
}

@ObjectType()
export class AggregateNotificationToUserEntity {
    @Field(() => NotificationToUserEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof NotificationToUserEntityCountAggregate>;
    @Field(() => NotificationToUserEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof NotificationToUserEntityMinAggregate>;
    @Field(() => NotificationToUserEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof NotificationToUserEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyNotificationToUserEntityArgs {
    @Field(() => [NotificationToUserEntityCreateManyInput], {nullable:false})
    @Type(() => NotificationToUserEntityCreateManyInput)
    data!: Array<NotificationToUserEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityCreateInput, {nullable:false})
    @Type(() => NotificationToUserEntityCreateInput)
    data!: InstanceType<typeof NotificationToUserEntityCreateInput>;
}

@ArgsType()
export class DeleteManyNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    @Type(() => NotificationToUserEntityWhereInput)
    where?: InstanceType<typeof NotificationToUserEntityWhereInput>;
}

@ArgsType()
export class DeleteOneNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstNotificationToUserEntityOrThrowArgs {
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    @Type(() => NotificationToUserEntityWhereInput)
    where?: InstanceType<typeof NotificationToUserEntityWhereInput>;
    @Field(() => [NotificationToUserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationToUserEntityOrderByWithRelationInput>;
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NotificationToUserEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationToUserEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    @Type(() => NotificationToUserEntityWhereInput)
    where?: InstanceType<typeof NotificationToUserEntityWhereInput>;
    @Field(() => [NotificationToUserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationToUserEntityOrderByWithRelationInput>;
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NotificationToUserEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationToUserEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    @Type(() => NotificationToUserEntityWhereInput)
    where?: InstanceType<typeof NotificationToUserEntityWhereInput>;
    @Field(() => [NotificationToUserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationToUserEntityOrderByWithRelationInput>;
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NotificationToUserEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationToUserEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueNotificationToUserEntityOrThrowArgs {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
}

@ArgsType()
export class NotificationToUserEntityAggregateArgs {
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    @Type(() => NotificationToUserEntityWhereInput)
    where?: InstanceType<typeof NotificationToUserEntityWhereInput>;
    @Field(() => [NotificationToUserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationToUserEntityOrderByWithRelationInput>;
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => NotificationToUserEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NotificationToUserEntityCountAggregateInput>;
    @Field(() => NotificationToUserEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NotificationToUserEntityMinAggregateInput>;
    @Field(() => NotificationToUserEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NotificationToUserEntityMaxAggregateInput>;
}

@InputType()
export class NotificationToUserEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    notificationId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    isRead?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class NotificationToUserEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    notificationId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    isRead!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class NotificationToUserEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    notificationId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isRead?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class NotificationToUserEntityCreateManyNotificationInputEnvelope {
    @Field(() => [NotificationToUserEntityCreateManyNotificationInput], {nullable:false})
    @Type(() => NotificationToUserEntityCreateManyNotificationInput)
    data!: Array<NotificationToUserEntityCreateManyNotificationInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class NotificationToUserEntityCreateManyNotificationInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    userId!: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityCreateManyUserInputEnvelope {
    @Field(() => [NotificationToUserEntityCreateManyUserInput], {nullable:false})
    @Type(() => NotificationToUserEntityCreateManyUserInput)
    data!: Array<NotificationToUserEntityCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class NotificationToUserEntityCreateManyUserInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    notificationId!: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    notificationId!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    userId!: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityCreateNestedManyWithoutNotificationInput {
    @Field(() => [NotificationToUserEntityCreateWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutNotificationInput)
    create?: Array<NotificationToUserEntityCreateWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutNotificationInput>;
    @Field(() => NotificationToUserEntityCreateManyNotificationInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyNotificationInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyNotificationInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
}

@InputType()
export class NotificationToUserEntityCreateNestedManyWithoutUserInput {
    @Field(() => [NotificationToUserEntityCreateWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutUserInput)
    create?: Array<NotificationToUserEntityCreateWithoutUserInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutUserInput>;
    @Field(() => NotificationToUserEntityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyUserInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
}

@InputType()
export class NotificationToUserEntityCreateOrConnectWithoutNotificationInput {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => NotificationToUserEntityCreateWithoutNotificationInput, {nullable:false})
    @Type(() => NotificationToUserEntityCreateWithoutNotificationInput)
    create!: InstanceType<typeof NotificationToUserEntityCreateWithoutNotificationInput>;
}

@InputType()
export class NotificationToUserEntityCreateOrConnectWithoutUserInput {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => NotificationToUserEntityCreateWithoutUserInput, {nullable:false})
    @Type(() => NotificationToUserEntityCreateWithoutUserInput)
    create!: InstanceType<typeof NotificationToUserEntityCreateWithoutUserInput>;
}

@InputType()
export class NotificationToUserEntityCreateWithoutNotificationInput {
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutNotificationsInput>;
}

@InputType()
export class NotificationToUserEntityCreateWithoutUserInput {
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => NotificationEntityCreateNestedOneWithoutUsersInput, {nullable:false})
    notification!: InstanceType<typeof NotificationEntityCreateNestedOneWithoutUsersInput>;
}

@InputType()
export class NotificationToUserEntityCreateInput {
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @Field(() => NotificationEntityCreateNestedOneWithoutUsersInput, {nullable:false})
    notification!: InstanceType<typeof NotificationEntityCreateNestedOneWithoutUsersInput>;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutNotificationsInput>;
}

@ArgsType()
export class NotificationToUserEntityGroupByArgs {
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    @Type(() => NotificationToUserEntityWhereInput)
    where?: InstanceType<typeof NotificationToUserEntityWhereInput>;
    @Field(() => [NotificationToUserEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotificationToUserEntityOrderByWithAggregationInput>;
    @Field(() => [NotificationToUserEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotificationToUserEntityScalarFieldEnum>;
    @Field(() => NotificationToUserEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof NotificationToUserEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => NotificationToUserEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NotificationToUserEntityCountAggregateInput>;
    @Field(() => NotificationToUserEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NotificationToUserEntityMinAggregateInput>;
    @Field(() => NotificationToUserEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NotificationToUserEntityMaxAggregateInput>;
}

@ObjectType()
export class NotificationToUserEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    notificationId!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    userId!: string;
    @Field(() => Boolean, {nullable:false})
    isRead!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => NotificationToUserEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof NotificationToUserEntityCountAggregate>;
    @Field(() => NotificationToUserEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof NotificationToUserEntityMinAggregate>;
    @Field(() => NotificationToUserEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof NotificationToUserEntityMaxAggregate>;
}

@InputType()
export class NotificationToUserEntityListRelationFilter {
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    every?: InstanceType<typeof NotificationToUserEntityWhereInput>;
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    some?: InstanceType<typeof NotificationToUserEntityWhereInput>;
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    none?: InstanceType<typeof NotificationToUserEntityWhereInput>;
}

@InputType()
export class NotificationToUserEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    notificationId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    isRead?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class NotificationToUserEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    notificationId?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    userId?: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    notificationId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isRead?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class NotificationToUserEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    notificationId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    isRead?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class NotificationToUserEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    notificationId?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    userId?: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    notificationId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isRead?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class NotificationToUserEntityOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class NotificationToUserEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    notificationId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isRead?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => NotificationToUserEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NotificationToUserEntityCountOrderByAggregateInput>;
    @Field(() => NotificationToUserEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NotificationToUserEntityMaxOrderByAggregateInput>;
    @Field(() => NotificationToUserEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NotificationToUserEntityMinOrderByAggregateInput>;
}

@InputType()
export class NotificationToUserEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    notificationId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isRead?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => NotificationEntityOrderByWithRelationInput, {nullable:true})
    notification?: InstanceType<typeof NotificationEntityOrderByWithRelationInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityOrderByWithRelationInput>;
}

@InputType()
export class NotificationToUserEntityScalarWhereWithAggregatesInput {
    @Field(() => [NotificationToUserEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationToUserEntityScalarWhereWithAggregatesInput>;
    @Field(() => [NotificationToUserEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationToUserEntityScalarWhereWithAggregatesInput>;
    @Field(() => [NotificationToUserEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationToUserEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    notificationId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isRead?: InstanceType<typeof BoolWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class NotificationToUserEntityScalarWhereInput {
    @Field(() => [NotificationToUserEntityScalarWhereInput], {nullable:true})
    AND?: Array<NotificationToUserEntityScalarWhereInput>;
    @Field(() => [NotificationToUserEntityScalarWhereInput], {nullable:true})
    OR?: Array<NotificationToUserEntityScalarWhereInput>;
    @Field(() => [NotificationToUserEntityScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationToUserEntityScalarWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    notificationId?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    userId?: InstanceType<typeof UuidFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isRead?: InstanceType<typeof BoolFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class NotificationToUserEntityUncheckedCreateNestedManyWithoutNotificationInput {
    @Field(() => [NotificationToUserEntityCreateWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutNotificationInput)
    create?: Array<NotificationToUserEntityCreateWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutNotificationInput>;
    @Field(() => NotificationToUserEntityCreateManyNotificationInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyNotificationInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyNotificationInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [NotificationToUserEntityCreateWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutUserInput)
    create?: Array<NotificationToUserEntityCreateWithoutUserInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutUserInput>;
    @Field(() => NotificationToUserEntityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyUserInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedCreateWithoutNotificationInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    userId!: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityUncheckedCreateWithoutUserInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    notificationId!: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    notificationId!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    userId!: string;
    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateManyWithoutNotificationNestedInput {
    @Field(() => [NotificationToUserEntityCreateWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutNotificationInput)
    create?: Array<NotificationToUserEntityCreateWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityUpsertWithWhereUniqueWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpsertWithWhereUniqueWithoutNotificationInput)
    upsert?: Array<NotificationToUserEntityUpsertWithWhereUniqueWithoutNotificationInput>;
    @Field(() => NotificationToUserEntityCreateManyNotificationInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyNotificationInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyNotificationInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    set?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    disconnect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    delete?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityUpdateWithWhereUniqueWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateWithWhereUniqueWithoutNotificationInput)
    update?: Array<NotificationToUserEntityUpdateWithWhereUniqueWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityUpdateManyWithWhereWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateManyWithWhereWithoutNotificationInput)
    updateMany?: Array<NotificationToUserEntityUpdateManyWithWhereWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityScalarWhereInput], {nullable:true})
    @Type(() => NotificationToUserEntityScalarWhereInput)
    deleteMany?: Array<NotificationToUserEntityScalarWhereInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateManyWithoutNotificationsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    notificationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [NotificationToUserEntityCreateWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutUserInput)
    create?: Array<NotificationToUserEntityCreateWithoutUserInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutUserInput>;
    @Field(() => [NotificationToUserEntityUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<NotificationToUserEntityUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => NotificationToUserEntityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyUserInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    set?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    disconnect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    delete?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<NotificationToUserEntityUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [NotificationToUserEntityUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<NotificationToUserEntityUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [NotificationToUserEntityScalarWhereInput], {nullable:true})
    @Type(() => NotificationToUserEntityScalarWhereInput)
    deleteMany?: Array<NotificationToUserEntityScalarWhereInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateManyWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    notificationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateWithoutNotificationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    notificationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationToUserEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    notificationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationToUserEntityUpdateManyMutationInput {
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NotificationToUserEntityUpdateManyWithWhereWithoutNotificationInput {
    @Field(() => NotificationToUserEntityScalarWhereInput, {nullable:false})
    @Type(() => NotificationToUserEntityScalarWhereInput)
    where!: InstanceType<typeof NotificationToUserEntityScalarWhereInput>;
    @Field(() => NotificationToUserEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateManyMutationInput)
    data!: InstanceType<typeof NotificationToUserEntityUpdateManyMutationInput>;
}

@InputType()
export class NotificationToUserEntityUpdateManyWithWhereWithoutUserInput {
    @Field(() => NotificationToUserEntityScalarWhereInput, {nullable:false})
    @Type(() => NotificationToUserEntityScalarWhereInput)
    where!: InstanceType<typeof NotificationToUserEntityScalarWhereInput>;
    @Field(() => NotificationToUserEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateManyMutationInput)
    data!: InstanceType<typeof NotificationToUserEntityUpdateManyMutationInput>;
}

@InputType()
export class NotificationToUserEntityUpdateManyWithoutNotificationNestedInput {
    @Field(() => [NotificationToUserEntityCreateWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutNotificationInput)
    create?: Array<NotificationToUserEntityCreateWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityUpsertWithWhereUniqueWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpsertWithWhereUniqueWithoutNotificationInput)
    upsert?: Array<NotificationToUserEntityUpsertWithWhereUniqueWithoutNotificationInput>;
    @Field(() => NotificationToUserEntityCreateManyNotificationInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyNotificationInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyNotificationInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    set?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    disconnect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    delete?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityUpdateWithWhereUniqueWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateWithWhereUniqueWithoutNotificationInput)
    update?: Array<NotificationToUserEntityUpdateWithWhereUniqueWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityUpdateManyWithWhereWithoutNotificationInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateManyWithWhereWithoutNotificationInput)
    updateMany?: Array<NotificationToUserEntityUpdateManyWithWhereWithoutNotificationInput>;
    @Field(() => [NotificationToUserEntityScalarWhereInput], {nullable:true})
    @Type(() => NotificationToUserEntityScalarWhereInput)
    deleteMany?: Array<NotificationToUserEntityScalarWhereInput>;
}

@InputType()
export class NotificationToUserEntityUpdateManyWithoutUserNestedInput {
    @Field(() => [NotificationToUserEntityCreateWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateWithoutUserInput)
    create?: Array<NotificationToUserEntityCreateWithoutUserInput>;
    @Field(() => [NotificationToUserEntityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NotificationToUserEntityCreateOrConnectWithoutUserInput>;
    @Field(() => [NotificationToUserEntityUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<NotificationToUserEntityUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => NotificationToUserEntityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NotificationToUserEntityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof NotificationToUserEntityCreateManyUserInputEnvelope>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    set?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    disconnect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    delete?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityWhereUniqueInput], {nullable:true})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    connect?: Array<NotificationToUserEntityWhereUniqueInput>;
    @Field(() => [NotificationToUserEntityUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<NotificationToUserEntityUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [NotificationToUserEntityUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => NotificationToUserEntityUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<NotificationToUserEntityUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [NotificationToUserEntityScalarWhereInput], {nullable:true})
    @Type(() => NotificationToUserEntityScalarWhereInput)
    deleteMany?: Array<NotificationToUserEntityScalarWhereInput>;
}

@InputType()
export class NotificationToUserEntityUpdateWithWhereUniqueWithoutNotificationInput {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => NotificationToUserEntityUpdateWithoutNotificationInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateWithoutNotificationInput)
    data!: InstanceType<typeof NotificationToUserEntityUpdateWithoutNotificationInput>;
}

@InputType()
export class NotificationToUserEntityUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => NotificationToUserEntityUpdateWithoutUserInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateWithoutUserInput)
    data!: InstanceType<typeof NotificationToUserEntityUpdateWithoutUserInput>;
}

@InputType()
export class NotificationToUserEntityUpdateWithoutNotificationInput {
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutNotificationsNestedInput>;
}

@InputType()
export class NotificationToUserEntityUpdateWithoutUserInput {
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NotificationEntityUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    notification?: InstanceType<typeof NotificationEntityUpdateOneRequiredWithoutUsersNestedInput>;
}

@InputType()
export class NotificationToUserEntityUpdateInput {
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NotificationEntityUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    notification?: InstanceType<typeof NotificationEntityUpdateOneRequiredWithoutUsersNestedInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutNotificationsNestedInput>;
}

@InputType()
export class NotificationToUserEntityUpsertWithWhereUniqueWithoutNotificationInput {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => NotificationToUserEntityUpdateWithoutNotificationInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateWithoutNotificationInput)
    update!: InstanceType<typeof NotificationToUserEntityUpdateWithoutNotificationInput>;
    @Field(() => NotificationToUserEntityCreateWithoutNotificationInput, {nullable:false})
    @Type(() => NotificationToUserEntityCreateWithoutNotificationInput)
    create!: InstanceType<typeof NotificationToUserEntityCreateWithoutNotificationInput>;
}

@InputType()
export class NotificationToUserEntityUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => NotificationToUserEntityUpdateWithoutUserInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateWithoutUserInput)
    update!: InstanceType<typeof NotificationToUserEntityUpdateWithoutUserInput>;
    @Field(() => NotificationToUserEntityCreateWithoutUserInput, {nullable:false})
    @Type(() => NotificationToUserEntityCreateWithoutUserInput)
    create!: InstanceType<typeof NotificationToUserEntityCreateWithoutUserInput>;
}

@InputType()
export class NotificationToUserEntityUserIdNotificationIdCompoundUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    userId!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    notificationId!: string;
}

@InputType()
export class NotificationToUserEntityWhereUniqueInput {
    @Field(() => NotificationToUserEntityUserIdNotificationIdCompoundUniqueInput, {nullable:true})
    userId_notificationId?: InstanceType<typeof NotificationToUserEntityUserIdNotificationIdCompoundUniqueInput>;
}

@InputType()
export class NotificationToUserEntityWhereInput {
    @Field(() => [NotificationToUserEntityWhereInput], {nullable:true})
    AND?: Array<NotificationToUserEntityWhereInput>;
    @Field(() => [NotificationToUserEntityWhereInput], {nullable:true})
    OR?: Array<NotificationToUserEntityWhereInput>;
    @Field(() => [NotificationToUserEntityWhereInput], {nullable:true})
    NOT?: Array<NotificationToUserEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    notificationId?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    userId?: InstanceType<typeof UuidFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isRead?: InstanceType<typeof BoolFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => NotificationEntityRelationFilter, {nullable:true})
    notification?: InstanceType<typeof NotificationEntityRelationFilter>;
    @HideField()
    user?: InstanceType<typeof UserEntityRelationFilter>;
}

/**
 * Уведомления для пользователей
 */
@ObjectType({description:'Уведомления для пользователей'})
export class NotificationToUserEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    notificationId!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    userId!: string;
    /**
     * Прочитано ли уведомление?
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Прочитано ли уведомление?'})
    isRead!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => NotificationEntity, {nullable:false})
    notification?: InstanceType<typeof NotificationEntity>;
    @Field(() => UserEntity, {nullable:false})
    user?: InstanceType<typeof UserEntity>;
}

@ArgsType()
export class UpdateManyNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateManyMutationInput)
    data!: InstanceType<typeof NotificationToUserEntityUpdateManyMutationInput>;
    @Field(() => NotificationToUserEntityWhereInput, {nullable:true})
    @Type(() => NotificationToUserEntityWhereInput)
    where?: InstanceType<typeof NotificationToUserEntityWhereInput>;
}

@ArgsType()
export class UpdateOneNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityUpdateInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateInput)
    data!: InstanceType<typeof NotificationToUserEntityUpdateInput>;
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneNotificationToUserEntityArgs {
    @Field(() => NotificationToUserEntityWhereUniqueInput, {nullable:false})
    @Type(() => NotificationToUserEntityWhereUniqueInput)
    where!: InstanceType<typeof NotificationToUserEntityWhereUniqueInput>;
    @Field(() => NotificationToUserEntityCreateInput, {nullable:false})
    @Type(() => NotificationToUserEntityCreateInput)
    create!: InstanceType<typeof NotificationToUserEntityCreateInput>;
    @Field(() => NotificationToUserEntityUpdateInput, {nullable:false})
    @Type(() => NotificationToUserEntityUpdateInput)
    update!: InstanceType<typeof NotificationToUserEntityUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolFilter, {nullable:true})
    not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _min?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumGenderEnumFilter {
    @Field(() => GenderEnum, {nullable:true})
    equals?: keyof typeof GenderEnum;
    @Field(() => [GenderEnum], {nullable:true})
    in?: Array<keyof typeof GenderEnum>;
    @Field(() => [GenderEnum], {nullable:true})
    notIn?: Array<keyof typeof GenderEnum>;
    @Field(() => EnumGenderEnumFilter, {nullable:true})
    not?: InstanceType<typeof EnumGenderEnumFilter>;
}

@InputType()
export class EnumGenderEnumWithAggregatesFilter {
    @Field(() => GenderEnum, {nullable:true})
    equals?: keyof typeof GenderEnum;
    @Field(() => [GenderEnum], {nullable:true})
    in?: Array<keyof typeof GenderEnum>;
    @Field(() => [GenderEnum], {nullable:true})
    notIn?: Array<keyof typeof GenderEnum>;
    @Field(() => EnumGenderEnumWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumGenderEnumWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumGenderEnumFilter, {nullable:true})
    _min?: InstanceType<typeof EnumGenderEnumFilter>;
    @Field(() => EnumGenderEnumFilter, {nullable:true})
    _max?: InstanceType<typeof EnumGenderEnumFilter>;
}

@InputType()
export class EnumVisaCategoryEnumFilter {
    @Field(() => VisaCategoryEnum, {nullable:true})
    equals?: keyof typeof VisaCategoryEnum;
    @Field(() => [VisaCategoryEnum], {nullable:true})
    in?: Array<keyof typeof VisaCategoryEnum>;
    @Field(() => [VisaCategoryEnum], {nullable:true})
    notIn?: Array<keyof typeof VisaCategoryEnum>;
    @Field(() => EnumVisaCategoryEnumFilter, {nullable:true})
    not?: InstanceType<typeof EnumVisaCategoryEnumFilter>;
}

@InputType()
export class EnumVisaCategoryEnumWithAggregatesFilter {
    @Field(() => VisaCategoryEnum, {nullable:true})
    equals?: keyof typeof VisaCategoryEnum;
    @Field(() => [VisaCategoryEnum], {nullable:true})
    in?: Array<keyof typeof VisaCategoryEnum>;
    @Field(() => [VisaCategoryEnum], {nullable:true})
    notIn?: Array<keyof typeof VisaCategoryEnum>;
    @Field(() => EnumVisaCategoryEnumWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumVisaCategoryEnumWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumVisaCategoryEnumFilter, {nullable:true})
    _min?: InstanceType<typeof EnumVisaCategoryEnumFilter>;
    @Field(() => EnumVisaCategoryEnumFilter, {nullable:true})
    _max?: InstanceType<typeof EnumVisaCategoryEnumFilter>;
}

@InputType()
export class EnumVisaMultiplicityEnumFilter {
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    equals?: keyof typeof VisaMultiplicityEnum;
    @Field(() => [VisaMultiplicityEnum], {nullable:true})
    in?: Array<keyof typeof VisaMultiplicityEnum>;
    @Field(() => [VisaMultiplicityEnum], {nullable:true})
    notIn?: Array<keyof typeof VisaMultiplicityEnum>;
    @Field(() => EnumVisaMultiplicityEnumFilter, {nullable:true})
    not?: InstanceType<typeof EnumVisaMultiplicityEnumFilter>;
}

@InputType()
export class EnumVisaMultiplicityEnumWithAggregatesFilter {
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    equals?: keyof typeof VisaMultiplicityEnum;
    @Field(() => [VisaMultiplicityEnum], {nullable:true})
    in?: Array<keyof typeof VisaMultiplicityEnum>;
    @Field(() => [VisaMultiplicityEnum], {nullable:true})
    notIn?: Array<keyof typeof VisaMultiplicityEnum>;
    @Field(() => EnumVisaMultiplicityEnumWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumVisaMultiplicityEnumWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumVisaMultiplicityEnumFilter, {nullable:true})
    _min?: InstanceType<typeof EnumVisaMultiplicityEnumFilter>;
    @Field(() => EnumVisaMultiplicityEnumFilter, {nullable:true})
    _max?: InstanceType<typeof EnumVisaMultiplicityEnumFilter>;
}

@InputType()
export class EnumVisaRequestStatusEnumFieldUpdateOperationsInput {
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    set?: keyof typeof VisaRequestStatusEnum;
}

@InputType()
export class EnumVisaRequestStatusEnumFilter {
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    equals?: keyof typeof VisaRequestStatusEnum;
    @Field(() => [VisaRequestStatusEnum], {nullable:true})
    in?: Array<keyof typeof VisaRequestStatusEnum>;
    @Field(() => [VisaRequestStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof VisaRequestStatusEnum>;
    @Field(() => EnumVisaRequestStatusEnumFilter, {nullable:true})
    not?: InstanceType<typeof EnumVisaRequestStatusEnumFilter>;
}

@InputType()
export class EnumVisaRequestStatusEnumWithAggregatesFilter {
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    equals?: keyof typeof VisaRequestStatusEnum;
    @Field(() => [VisaRequestStatusEnum], {nullable:true})
    in?: Array<keyof typeof VisaRequestStatusEnum>;
    @Field(() => [VisaRequestStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof VisaRequestStatusEnum>;
    @Field(() => EnumVisaRequestStatusEnumWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumVisaRequestStatusEnumWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumVisaRequestStatusEnumFilter, {nullable:true})
    _min?: InstanceType<typeof EnumVisaRequestStatusEnumFilter>;
    @Field(() => EnumVisaRequestStatusEnumFilter, {nullable:true})
    _max?: InstanceType<typeof EnumVisaRequestStatusEnumFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class NullableEnumGenderEnumFieldUpdateOperationsInput {
    @Field(() => GenderEnum, {nullable:true})
    set?: keyof typeof GenderEnum;
}

@InputType()
export class NullableEnumVisaCategoryEnumFieldUpdateOperationsInput {
    @Field(() => VisaCategoryEnum, {nullable:true})
    set?: keyof typeof VisaCategoryEnum;
}

@InputType()
export class NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput {
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    set?: keyof typeof VisaMultiplicityEnum;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UuidFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => UuidFilter, {nullable:true})
    not?: InstanceType<typeof UuidFilter>;
}

@InputType()
export class UuidWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateStudentArrivalNoticeEntity {
    @Field(() => StudentArrivalNoticeEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentArrivalNoticeEntityCountAggregate>;
    @Field(() => StudentArrivalNoticeEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentArrivalNoticeEntityMinAggregate>;
    @Field(() => StudentArrivalNoticeEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentArrivalNoticeEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyStudentArrivalNoticeEntityArgs {
    @Field(() => [StudentArrivalNoticeEntityCreateManyInput], {nullable:false})
    @Type(() => StudentArrivalNoticeEntityCreateManyInput)
    data!: Array<StudentArrivalNoticeEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityCreateInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityCreateInput)
    data!: InstanceType<typeof StudentArrivalNoticeEntityCreateInput>;
}

@ArgsType()
export class DeleteManyStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereInput)
    where?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
}

@ArgsType()
export class DeleteOneStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStudentArrivalNoticeEntityOrThrowArgs {
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereInput)
    where?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
    @Field(() => [StudentArrivalNoticeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentArrivalNoticeEntityOrderByWithRelationInput>;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentArrivalNoticeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentArrivalNoticeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereInput)
    where?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
    @Field(() => [StudentArrivalNoticeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentArrivalNoticeEntityOrderByWithRelationInput>;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentArrivalNoticeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentArrivalNoticeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereInput)
    where?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
    @Field(() => [StudentArrivalNoticeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentArrivalNoticeEntityOrderByWithRelationInput>;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentArrivalNoticeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentArrivalNoticeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStudentArrivalNoticeEntityOrThrowArgs {
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
}

@ArgsType()
export class StudentArrivalNoticeEntityAggregateArgs {
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereInput)
    where?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
    @Field(() => [StudentArrivalNoticeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentArrivalNoticeEntityOrderByWithRelationInput>;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentArrivalNoticeEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentArrivalNoticeEntityCountAggregateInput>;
    @Field(() => StudentArrivalNoticeEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentArrivalNoticeEntityMinAggregateInput>;
    @Field(() => StudentArrivalNoticeEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentArrivalNoticeEntityMaxAggregateInput>;
}

@InputType()
export class StudentArrivalNoticeEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    profession?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    date?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    invitingSide?: true;
    @Field(() => Boolean, {nullable:true})
    receivingSide?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StudentArrivalNoticeEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    studentId!: number;
    @Field(() => Int, {nullable:false})
    profession!: number;
    @Field(() => Int, {nullable:false})
    address!: number;
    @Field(() => Int, {nullable:false})
    date!: number;
    @Field(() => Int, {nullable:false})
    expires!: number;
    @Field(() => Int, {nullable:false})
    invitingSide!: number;
    @Field(() => Int, {nullable:false})
    receivingSide!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StudentArrivalNoticeEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    profession?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitingSide?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receivingSide?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentArrivalNoticeEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput {
    @Field(() => StudentArrivalNoticeEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentArrivalNoticeEntityCreateWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
}

@InputType()
export class StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput {
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => StudentArrivalNoticeEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentArrivalNoticeEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentArrivalNoticeEntityCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentArrivalNoticeEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student!: InstanceType<typeof StudentEntityCreateNestedOneWithoutArrivalNoticeInput>;
}

@ArgsType()
export class StudentArrivalNoticeEntityGroupByArgs {
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereInput)
    where?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
    @Field(() => [StudentArrivalNoticeEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentArrivalNoticeEntityOrderByWithAggregationInput>;
    @Field(() => [StudentArrivalNoticeEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentArrivalNoticeEntityScalarFieldEnum>;
    @Field(() => StudentArrivalNoticeEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StudentArrivalNoticeEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentArrivalNoticeEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentArrivalNoticeEntityCountAggregateInput>;
    @Field(() => StudentArrivalNoticeEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentArrivalNoticeEntityMinAggregateInput>;
    @Field(() => StudentArrivalNoticeEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentArrivalNoticeEntityMaxAggregateInput>;
}

@ObjectType()
export class StudentArrivalNoticeEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StudentArrivalNoticeEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentArrivalNoticeEntityCountAggregate>;
    @Field(() => StudentArrivalNoticeEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentArrivalNoticeEntityMinAggregate>;
    @Field(() => StudentArrivalNoticeEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentArrivalNoticeEntityMaxAggregate>;
}

@InputType()
export class StudentArrivalNoticeEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    profession?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    date?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    invitingSide?: true;
    @Field(() => Boolean, {nullable:true})
    receivingSide?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentArrivalNoticeEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentArrivalNoticeEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    profession?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitingSide?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receivingSide?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentArrivalNoticeEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    profession?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    date?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    invitingSide?: true;
    @Field(() => Boolean, {nullable:true})
    receivingSide?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentArrivalNoticeEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentArrivalNoticeEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    profession?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitingSide?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receivingSide?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentArrivalNoticeEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    profession?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitingSide?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receivingSide?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => StudentArrivalNoticeEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentArrivalNoticeEntityCountOrderByAggregateInput>;
    @Field(() => StudentArrivalNoticeEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentArrivalNoticeEntityMaxOrderByAggregateInput>;
    @Field(() => StudentArrivalNoticeEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentArrivalNoticeEntityMinOrderByAggregateInput>;
}

@InputType()
export class StudentArrivalNoticeEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    profession?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitingSide?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receivingSide?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    student?: InstanceType<typeof StudentEntityOrderByWithRelationInput>;
}

@InputType()
export class StudentArrivalNoticeEntityRelationFilter {
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
}

@InputType()
export class StudentArrivalNoticeEntityScalarWhereWithAggregatesInput {
    @Field(() => [StudentArrivalNoticeEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentArrivalNoticeEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentArrivalNoticeEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentArrivalNoticeEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentArrivalNoticeEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentArrivalNoticeEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    profession?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    invitingSide?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    receivingSide?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput {
    @Field(() => StudentArrivalNoticeEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentArrivalNoticeEntityCreateWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUncheckedCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentArrivalNoticeEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    profession?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    date?: Date | string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => String, {nullable:true})
    invitingSide?: string;
    @Field(() => String, {nullable:true})
    receivingSide?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentArrivalNoticeEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profession?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    receivingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentArrivalNoticeEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentArrivalNoticeEntityCreateWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentArrivalNoticeEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => StudentArrivalNoticeEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentArrivalNoticeEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUncheckedUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profession?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    receivingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profession?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    receivingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profession?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    receivingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentArrivalNoticeEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentArrivalNoticeEntityCreateWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentArrivalNoticeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentArrivalNoticeEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => StudentArrivalNoticeEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentArrivalNoticeEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profession?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    receivingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profession?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    receivingSide?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneRequiredWithoutArrivalNoticeNestedInput>;
}

@InputType()
export class StudentArrivalNoticeEntityUpsertWithoutStudentInput {
    @Field(() => StudentArrivalNoticeEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityUpdateWithoutStudentInput)
    update!: InstanceType<typeof StudentArrivalNoticeEntityUpdateWithoutStudentInput>;
    @Field(() => StudentArrivalNoticeEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentArrivalNoticeEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentArrivalNoticeEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
}

@InputType()
export class StudentArrivalNoticeEntityWhereInput {
    @Field(() => [StudentArrivalNoticeEntityWhereInput], {nullable:true})
    AND?: Array<StudentArrivalNoticeEntityWhereInput>;
    @Field(() => [StudentArrivalNoticeEntityWhereInput], {nullable:true})
    OR?: Array<StudentArrivalNoticeEntityWhereInput>;
    @Field(() => [StudentArrivalNoticeEntityWhereInput], {nullable:true})
    NOT?: Array<StudentArrivalNoticeEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    profession?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    address?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    date?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    invitingSide?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    receivingSide?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    student?: InstanceType<typeof StudentEntityRelationFilter>;
}

/**
 * Уведомление о прибытии студента
 */
@ObjectType({description:'Уведомление о прибытии студента'})
export class StudentArrivalNoticeEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    /**
     * Профессия. Заполняется только сотрудниками.
     */
    @Field(() => String, {nullable:true,description:'Профессия. Заполняется только сотрудниками.'})
    profession!: string | null;
    /**
     * Адрес регистрации
     */
    @Field(() => String, {nullable:true,description:'Адрес регистрации'})
    address!: string | null;
    /**
     * Дата регистрации
     */
    @Field(() => Date, {nullable:true,description:'Дата регистрации'})
    date!: Date | null;
    /**
     * Дата окончания регистрации
     */
    @Field(() => Date, {nullable:true,description:'Дата окончания регистрации'})
    expires!: Date | null;
    /**
     * Приглашающая сторона
     */
    @Field(() => String, {nullable:true,description:'Приглашающая сторона'})
    invitingSide!: string | null;
    /**
     * Принимающая сторона
     */
    @Field(() => String, {nullable:true,description:'Принимающая сторона'})
    receivingSide!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => StudentEntity, {nullable:false})
    student?: InstanceType<typeof StudentEntity>;
}

@ArgsType()
export class UpdateManyStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentArrivalNoticeEntityUpdateManyMutationInput>;
    @Field(() => StudentArrivalNoticeEntityWhereInput, {nullable:true})
    @Type(() => StudentArrivalNoticeEntityWhereInput)
    where?: InstanceType<typeof StudentArrivalNoticeEntityWhereInput>;
}

@ArgsType()
export class UpdateOneStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityUpdateInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityUpdateInput)
    data!: InstanceType<typeof StudentArrivalNoticeEntityUpdateInput>;
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStudentArrivalNoticeEntityArgs {
    @Field(() => StudentArrivalNoticeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentArrivalNoticeEntityWhereUniqueInput>;
    @Field(() => StudentArrivalNoticeEntityCreateInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityCreateInput)
    create!: InstanceType<typeof StudentArrivalNoticeEntityCreateInput>;
    @Field(() => StudentArrivalNoticeEntityUpdateInput, {nullable:false})
    @Type(() => StudentArrivalNoticeEntityUpdateInput)
    update!: InstanceType<typeof StudentArrivalNoticeEntityUpdateInput>;
}

@ObjectType()
export class AggregateStudentCloseRelativeEntity {
    @Field(() => StudentCloseRelativeEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentCloseRelativeEntityCountAggregate>;
    @Field(() => StudentCloseRelativeEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentCloseRelativeEntityMinAggregate>;
    @Field(() => StudentCloseRelativeEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentCloseRelativeEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyStudentCloseRelativeEntityArgs {
    @Field(() => [StudentCloseRelativeEntityCreateManyInput], {nullable:false})
    @Type(() => StudentCloseRelativeEntityCreateManyInput)
    data!: Array<StudentCloseRelativeEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityCreateInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityCreateInput)
    data!: InstanceType<typeof StudentCloseRelativeEntityCreateInput>;
}

@ArgsType()
export class DeleteManyStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereInput)
    where?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
}

@ArgsType()
export class DeleteOneStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStudentCloseRelativeEntityOrThrowArgs {
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereInput)
    where?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
    @Field(() => [StudentCloseRelativeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentCloseRelativeEntityOrderByWithRelationInput>;
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentCloseRelativeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentCloseRelativeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereInput)
    where?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
    @Field(() => [StudentCloseRelativeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentCloseRelativeEntityOrderByWithRelationInput>;
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentCloseRelativeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentCloseRelativeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereInput)
    where?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
    @Field(() => [StudentCloseRelativeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentCloseRelativeEntityOrderByWithRelationInput>;
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentCloseRelativeEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentCloseRelativeEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStudentCloseRelativeEntityOrThrowArgs {
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
}

@ArgsType()
export class StudentCloseRelativeEntityAggregateArgs {
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereInput)
    where?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
    @Field(() => [StudentCloseRelativeEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentCloseRelativeEntityOrderByWithRelationInput>;
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentCloseRelativeEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentCloseRelativeEntityCountAggregateInput>;
    @Field(() => StudentCloseRelativeEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentCloseRelativeEntityMinAggregateInput>;
    @Field(() => StudentCloseRelativeEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentCloseRelativeEntityMaxAggregateInput>;
}

@InputType()
export class StudentCloseRelativeEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    citizenship?: true;
    @Field(() => Boolean, {nullable:true})
    addressContinuousResidence?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StudentCloseRelativeEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    studentId!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    patronymic!: number;
    @Field(() => Int, {nullable:false})
    birthDate!: number;
    @Field(() => Int, {nullable:false})
    citizenship!: number;
    @Field(() => Int, {nullable:false})
    addressContinuousResidence!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StudentCloseRelativeEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressContinuousResidence?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentCloseRelativeEntityCreateManyStudentInputEnvelope {
    @Field(() => [StudentCloseRelativeEntityCreateManyStudentInput], {nullable:false})
    @Type(() => StudentCloseRelativeEntityCreateManyStudentInput)
    data!: Array<StudentCloseRelativeEntityCreateManyStudentInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class StudentCloseRelativeEntityCreateManyStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentCloseRelativeEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput {
    @Field(() => [StudentCloseRelativeEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateWithoutStudentInput)
    create?: Array<StudentCloseRelativeEntityCreateWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentCloseRelativeEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    connect?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
}

@InputType()
export class StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput {
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => StudentCloseRelativeEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentCloseRelativeEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentCloseRelativeEntityCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentCloseRelativeEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student!: InstanceType<typeof StudentEntityCreateNestedOneWithoutCloseRelativesInput>;
}

@ArgsType()
export class StudentCloseRelativeEntityGroupByArgs {
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereInput)
    where?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
    @Field(() => [StudentCloseRelativeEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentCloseRelativeEntityOrderByWithAggregationInput>;
    @Field(() => [StudentCloseRelativeEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentCloseRelativeEntityScalarFieldEnum>;
    @Field(() => StudentCloseRelativeEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StudentCloseRelativeEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentCloseRelativeEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentCloseRelativeEntityCountAggregateInput>;
    @Field(() => StudentCloseRelativeEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentCloseRelativeEntityMinAggregateInput>;
    @Field(() => StudentCloseRelativeEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentCloseRelativeEntityMaxAggregateInput>;
}

@ObjectType()
export class StudentCloseRelativeEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StudentCloseRelativeEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentCloseRelativeEntityCountAggregate>;
    @Field(() => StudentCloseRelativeEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentCloseRelativeEntityMinAggregate>;
    @Field(() => StudentCloseRelativeEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentCloseRelativeEntityMaxAggregate>;
}

@InputType()
export class StudentCloseRelativeEntityListRelationFilter {
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    every?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    some?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    none?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
}

@InputType()
export class StudentCloseRelativeEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    citizenship?: true;
    @Field(() => Boolean, {nullable:true})
    addressContinuousResidence?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentCloseRelativeEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentCloseRelativeEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressContinuousResidence?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentCloseRelativeEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    citizenship?: true;
    @Field(() => Boolean, {nullable:true})
    addressContinuousResidence?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentCloseRelativeEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentCloseRelativeEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressContinuousResidence?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentCloseRelativeEntityOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class StudentCloseRelativeEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressContinuousResidence?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => StudentCloseRelativeEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentCloseRelativeEntityCountOrderByAggregateInput>;
    @Field(() => StudentCloseRelativeEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentCloseRelativeEntityMaxOrderByAggregateInput>;
    @Field(() => StudentCloseRelativeEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentCloseRelativeEntityMinOrderByAggregateInput>;
}

@InputType()
export class StudentCloseRelativeEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressContinuousResidence?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    student?: InstanceType<typeof StudentEntityOrderByWithRelationInput>;
}

@InputType()
export class StudentCloseRelativeEntityScalarWhereWithAggregatesInput {
    @Field(() => [StudentCloseRelativeEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentCloseRelativeEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentCloseRelativeEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentCloseRelativeEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentCloseRelativeEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentCloseRelativeEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    patronymic?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    citizenship?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StudentCloseRelativeEntityScalarWhereInput {
    @Field(() => [StudentCloseRelativeEntityScalarWhereInput], {nullable:true})
    AND?: Array<StudentCloseRelativeEntityScalarWhereInput>;
    @Field(() => [StudentCloseRelativeEntityScalarWhereInput], {nullable:true})
    OR?: Array<StudentCloseRelativeEntityScalarWhereInput>;
    @Field(() => [StudentCloseRelativeEntityScalarWhereInput], {nullable:true})
    NOT?: Array<StudentCloseRelativeEntityScalarWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    patronymic?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    citizenship?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput {
    @Field(() => [StudentCloseRelativeEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateWithoutStudentInput)
    create?: Array<StudentCloseRelativeEntityCreateWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentCloseRelativeEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    connect?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    addressContinuousResidence?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedUpdateManyWithoutCloseRelativesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput {
    @Field(() => [StudentCloseRelativeEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateWithoutStudentInput)
    create?: Array<StudentCloseRelativeEntityCreateWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityUpsertWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityUpsertWithWhereUniqueWithoutStudentInput)
    upsert?: Array<StudentCloseRelativeEntityUpsertWithWhereUniqueWithoutStudentInput>;
    @Field(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentCloseRelativeEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    set?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    disconnect?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    delete?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    connect?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityUpdateWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityUpdateWithWhereUniqueWithoutStudentInput)
    update?: Array<StudentCloseRelativeEntityUpdateWithWhereUniqueWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityUpdateManyWithWhereWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityUpdateManyWithWhereWithoutStudentInput)
    updateMany?: Array<StudentCloseRelativeEntityUpdateManyWithWhereWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityScalarWhereInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityScalarWhereInput)
    deleteMany?: Array<StudentCloseRelativeEntityScalarWhereInput>;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentCloseRelativeEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentCloseRelativeEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentCloseRelativeEntityUpdateManyWithWhereWithoutStudentInput {
    @Field(() => StudentCloseRelativeEntityScalarWhereInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityScalarWhereInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityScalarWhereInput>;
    @Field(() => StudentCloseRelativeEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentCloseRelativeEntityUpdateManyMutationInput>;
}

@InputType()
export class StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput {
    @Field(() => [StudentCloseRelativeEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateWithoutStudentInput)
    create?: Array<StudentCloseRelativeEntityCreateWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentCloseRelativeEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityUpsertWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityUpsertWithWhereUniqueWithoutStudentInput)
    upsert?: Array<StudentCloseRelativeEntityUpsertWithWhereUniqueWithoutStudentInput>;
    @Field(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentCloseRelativeEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentCloseRelativeEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    set?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    disconnect?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    delete?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    connect?: Array<StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => [StudentCloseRelativeEntityUpdateWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityUpdateWithWhereUniqueWithoutStudentInput)
    update?: Array<StudentCloseRelativeEntityUpdateWithWhereUniqueWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityUpdateManyWithWhereWithoutStudentInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityUpdateManyWithWhereWithoutStudentInput)
    updateMany?: Array<StudentCloseRelativeEntityUpdateManyWithWhereWithoutStudentInput>;
    @Field(() => [StudentCloseRelativeEntityScalarWhereInput], {nullable:true})
    @Type(() => StudentCloseRelativeEntityScalarWhereInput)
    deleteMany?: Array<StudentCloseRelativeEntityScalarWhereInput>;
}

@InputType()
export class StudentCloseRelativeEntityUpdateWithWhereUniqueWithoutStudentInput {
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => StudentCloseRelativeEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityUpdateWithoutStudentInput)
    data!: InstanceType<typeof StudentCloseRelativeEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentCloseRelativeEntityUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentCloseRelativeEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneRequiredWithoutCloseRelativesNestedInput>;
}

@InputType()
export class StudentCloseRelativeEntityUpsertWithWhereUniqueWithoutStudentInput {
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => StudentCloseRelativeEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityUpdateWithoutStudentInput)
    update!: InstanceType<typeof StudentCloseRelativeEntityUpdateWithoutStudentInput>;
    @Field(() => StudentCloseRelativeEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentCloseRelativeEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentCloseRelativeEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class StudentCloseRelativeEntityWhereInput {
    @Field(() => [StudentCloseRelativeEntityWhereInput], {nullable:true})
    AND?: Array<StudentCloseRelativeEntityWhereInput>;
    @Field(() => [StudentCloseRelativeEntityWhereInput], {nullable:true})
    OR?: Array<StudentCloseRelativeEntityWhereInput>;
    @Field(() => [StudentCloseRelativeEntityWhereInput], {nullable:true})
    NOT?: Array<StudentCloseRelativeEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    patronymic?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    citizenship?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    addressContinuousResidence?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    student?: InstanceType<typeof StudentEntityRelationFilter>;
}

/**
 * Близкие родственники студента
 */
@ObjectType({description:'Близкие родственники студента'})
export class StudentCloseRelativeEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    /**
     * Фамилия
     */
    @Field(() => String, {nullable:true,description:'Фамилия'})
    lastName!: string | null;
    /**
     * Имя
     */
    @Field(() => String, {nullable:true,description:'Имя'})
    firstName!: string | null;
    /**
     * Отчество
     */
    @Field(() => String, {nullable:true,description:'Отчество'})
    patronymic!: string | null;
    /**
     * Дата рождения
     */
    @Field(() => Date, {nullable:true,description:'Дата рождения'})
    birthDate!: Date | null;
    /**
     * Гражданство
     */
    @Field(() => String, {nullable:true,description:'Гражданство'})
    citizenship!: string | null;
    /**
     * Постоянное место жительства
     */
    @Field(() => String, {nullable:true,description:'Постоянное место жительства'})
    addressContinuousResidence!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => StudentEntity, {nullable:false})
    student?: InstanceType<typeof StudentEntity>;
}

@ArgsType()
export class UpdateManyStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentCloseRelativeEntityUpdateManyMutationInput>;
    @Field(() => StudentCloseRelativeEntityWhereInput, {nullable:true})
    @Type(() => StudentCloseRelativeEntityWhereInput)
    where?: InstanceType<typeof StudentCloseRelativeEntityWhereInput>;
}

@ArgsType()
export class UpdateOneStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityUpdateInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityUpdateInput)
    data!: InstanceType<typeof StudentCloseRelativeEntityUpdateInput>;
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStudentCloseRelativeEntityArgs {
    @Field(() => StudentCloseRelativeEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentCloseRelativeEntityWhereUniqueInput>;
    @Field(() => StudentCloseRelativeEntityCreateInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityCreateInput)
    create!: InstanceType<typeof StudentCloseRelativeEntityCreateInput>;
    @Field(() => StudentCloseRelativeEntityUpdateInput, {nullable:false})
    @Type(() => StudentCloseRelativeEntityUpdateInput)
    update!: InstanceType<typeof StudentCloseRelativeEntityUpdateInput>;
}

@ObjectType()
export class AggregateStudentEntity {
    @Field(() => StudentEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentEntityCountAggregate>;
    @Field(() => StudentEntityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof StudentEntityAvgAggregate>;
    @Field(() => StudentEntitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof StudentEntitySumAggregate>;
    @Field(() => StudentEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentEntityMinAggregate>;
    @Field(() => StudentEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyStudentEntityArgs {
    @Field(() => [StudentEntityCreateManyInput], {nullable:false})
    @Type(() => StudentEntityCreateManyInput)
    data!: Array<StudentEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStudentEntityArgs {
    @Field(() => StudentEntityCreateInput, {nullable:false})
    @Type(() => StudentEntityCreateInput)
    data!: InstanceType<typeof StudentEntityCreateInput>;
}

@ArgsType()
export class DeleteManyStudentEntityArgs {
    @Field(() => StudentEntityWhereInput, {nullable:true})
    @Type(() => StudentEntityWhereInput)
    where?: InstanceType<typeof StudentEntityWhereInput>;
}

@ArgsType()
export class DeleteOneStudentEntityArgs {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStudentEntityOrThrowArgs {
    @Field(() => StudentEntityWhereInput, {nullable:true})
    @Type(() => StudentEntityWhereInput)
    where?: InstanceType<typeof StudentEntityWhereInput>;
    @Field(() => [StudentEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentEntityOrderByWithRelationInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStudentEntityArgs {
    @Field(() => StudentEntityWhereInput, {nullable:true})
    @Type(() => StudentEntityWhereInput)
    where?: InstanceType<typeof StudentEntityWhereInput>;
    @Field(() => [StudentEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentEntityOrderByWithRelationInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyStudentEntityArgs {
    @Field(() => StudentEntityWhereInput, {nullable:true})
    @Type(() => StudentEntityWhereInput)
    where?: InstanceType<typeof StudentEntityWhereInput>;
    @Field(() => [StudentEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentEntityOrderByWithRelationInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStudentEntityOrThrowArgs {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStudentEntityArgs {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@ArgsType()
export class StudentEntityAggregateArgs {
    @Field(() => StudentEntityWhereInput, {nullable:true})
    @Type(() => StudentEntityWhereInput)
    where?: InstanceType<typeof StudentEntityWhereInput>;
    @Field(() => [StudentEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentEntityOrderByWithRelationInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentEntityCountAggregateInput>;
    @Field(() => StudentEntityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof StudentEntityAvgAggregateInput>;
    @Field(() => StudentEntitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof StudentEntitySumAggregateInput>;
    @Field(() => StudentEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentEntityMinAggregateInput>;
    @Field(() => StudentEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentEntityMaxAggregateInput>;
}

@InputType()
export class StudentEntityAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    course?: true;
}

@ObjectType()
export class StudentEntityAvgAggregate {
    @Field(() => Float, {nullable:true})
    course?: number;
}

@InputType()
export class StudentEntityAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    course?: keyof typeof SortOrder;
}

@InputType()
export class StudentEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    curator?: true;
    @Field(() => Boolean, {nullable:true})
    faculty?: true;
    @Field(() => Boolean, {nullable:true})
    course?: true;
    @Field(() => Boolean, {nullable:true})
    group?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StudentEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @Field(() => Int, {nullable:false})
    curator!: number;
    @Field(() => Int, {nullable:false})
    faculty!: number;
    @Field(() => Int, {nullable:false})
    course!: number;
    @Field(() => Int, {nullable:false})
    group!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StudentEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    curator?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    faculty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    course?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class StudentEntityCount {
    @Field(() => Int, {nullable:false})
    closeRelatives?: number;
    @Field(() => Int, {nullable:false})
    visaRequests?: number;
}

@InputType()
export class StudentEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentEntityCreateNestedOneWithoutArrivalNoticeInput {
    @Field(() => StudentEntityCreateWithoutArrivalNoticeInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutArrivalNoticeInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutArrivalNoticeInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutArrivalNoticeInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutArrivalNoticeInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutArrivalNoticeInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityCreateNestedOneWithoutCloseRelativesInput {
    @Field(() => StudentEntityCreateWithoutCloseRelativesInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutCloseRelativesInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutCloseRelativesInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutCloseRelativesInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutCloseRelativesInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutCloseRelativesInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityCreateNestedOneWithoutMigrationCardInput {
    @Field(() => StudentEntityCreateWithoutMigrationCardInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutMigrationCardInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutMigrationCardInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutMigrationCardInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutMigrationCardInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutMigrationCardInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityCreateNestedOneWithoutPassportInput {
    @Field(() => StudentEntityCreateWithoutPassportInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutPassportInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutPassportInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutPassportInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutPassportInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutPassportInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityCreateNestedOneWithoutUserInput {
    @Field(() => StudentEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutUserInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutUserInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutUserInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityCreateNestedOneWithoutVisaRequestsInput {
    @Field(() => StudentEntityCreateWithoutVisaRequestsInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutVisaRequestsInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutVisaRequestsInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutVisaRequestsInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutVisaRequestsInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutVisaRequestsInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityCreateNestedOneWithoutVisaInput {
    @Field(() => StudentEntityCreateWithoutVisaInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutVisaInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutVisaInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutVisaInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutVisaInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutVisaInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityCreateOrConnectWithoutArrivalNoticeInput {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateWithoutArrivalNoticeInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutArrivalNoticeInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutArrivalNoticeInput>;
}

@InputType()
export class StudentEntityCreateOrConnectWithoutCloseRelativesInput {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateWithoutCloseRelativesInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutCloseRelativesInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutCloseRelativesInput>;
}

@InputType()
export class StudentEntityCreateOrConnectWithoutMigrationCardInput {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateWithoutMigrationCardInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutMigrationCardInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutMigrationCardInput>;
}

@InputType()
export class StudentEntityCreateOrConnectWithoutPassportInput {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateWithoutPassportInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutPassportInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutPassportInput>;
}

@InputType()
export class StudentEntityCreateOrConnectWithoutUserInput {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateWithoutUserInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutUserInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutUserInput>;
}

@InputType()
export class StudentEntityCreateOrConnectWithoutVisaRequestsInput {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateWithoutVisaRequestsInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutVisaRequestsInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutVisaRequestsInput>;
}

@InputType()
export class StudentEntityCreateOrConnectWithoutVisaInput {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateWithoutVisaInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutVisaInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutVisaInput>;
}

@InputType()
export class StudentEntityCreateWithoutArrivalNoticeInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityCreateWithoutCloseRelativesInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityCreateWithoutMigrationCardInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityCreateWithoutPassportInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityCreateWithoutVisaRequestsInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityCreateWithoutVisaInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityCreateInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    user!: InstanceType<typeof UserEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityCreateNestedManyWithoutStudentInput>;
}

@ArgsType()
export class StudentEntityGroupByArgs {
    @Field(() => StudentEntityWhereInput, {nullable:true})
    @Type(() => StudentEntityWhereInput)
    where?: InstanceType<typeof StudentEntityWhereInput>;
    @Field(() => [StudentEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentEntityOrderByWithAggregationInput>;
    @Field(() => [StudentEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentEntityScalarFieldEnum>;
    @Field(() => StudentEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StudentEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentEntityCountAggregateInput>;
    @Field(() => StudentEntityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof StudentEntityAvgAggregateInput>;
    @Field(() => StudentEntitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof StudentEntitySumAggregateInput>;
    @Field(() => StudentEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentEntityMinAggregateInput>;
    @Field(() => StudentEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentEntityMaxAggregateInput>;
}

@ObjectType()
export class StudentEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StudentEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentEntityCountAggregate>;
    @Field(() => StudentEntityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof StudentEntityAvgAggregate>;
    @Field(() => StudentEntitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof StudentEntitySumAggregate>;
    @Field(() => StudentEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentEntityMinAggregate>;
    @Field(() => StudentEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentEntityMaxAggregate>;
}

@InputType()
export class StudentEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    curator?: true;
    @Field(() => Boolean, {nullable:true})
    faculty?: true;
    @Field(() => Boolean, {nullable:true})
    course?: true;
    @Field(() => Boolean, {nullable:true})
    group?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    curator?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    faculty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    course?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    curator?: true;
    @Field(() => Boolean, {nullable:true})
    faculty?: true;
    @Field(() => Boolean, {nullable:true})
    course?: true;
    @Field(() => Boolean, {nullable:true})
    group?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    curator?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    faculty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    course?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    curator?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    faculty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    course?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => StudentEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentEntityCountOrderByAggregateInput>;
    @Field(() => StudentEntityAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof StudentEntityAvgOrderByAggregateInput>;
    @Field(() => StudentEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentEntityMaxOrderByAggregateInput>;
    @Field(() => StudentEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentEntityMinOrderByAggregateInput>;
    @Field(() => StudentEntitySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof StudentEntitySumOrderByAggregateInput>;
}

@InputType()
export class StudentEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    curator?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    faculty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    course?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    user?: InstanceType<typeof UserEntityOrderByWithRelationInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityOrderByWithRelationInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityOrderByWithRelationInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityOrderByWithRelationInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityOrderByWithRelationInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityOrderByRelationAggregateInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityOrderByRelationAggregateInput>;
}

@InputType()
export class StudentEntityRelationFilter {
    @Field(() => StudentEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof StudentEntityWhereInput>;
    @Field(() => StudentEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof StudentEntityWhereInput>;
}

@InputType()
export class StudentEntityScalarWhereWithAggregatesInput {
    @Field(() => [StudentEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    curator?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    faculty?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    course?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    group?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StudentEntitySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    course?: true;
}

@ObjectType()
export class StudentEntitySumAggregate {
    @Field(() => Int, {nullable:true})
    course?: number;
}

@InputType()
export class StudentEntitySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    course?: keyof typeof SortOrder;
}

@InputType()
export class StudentEntityUncheckedCreateNestedOneWithoutUserInput {
    @Field(() => StudentEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutUserInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutUserInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutUserInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@InputType()
export class StudentEntityUncheckedCreateWithoutArrivalNoticeInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedCreateWithoutCloseRelativesInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedCreateWithoutMigrationCardInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedCreateWithoutPassportInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedCreateWithoutVisaRequestsInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedCreateWithoutVisaInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    curator?: string;
    @Field(() => String, {nullable:true})
    faculty?: string;
    @Field(() => Int, {nullable:true})
    course?: number;
    @Field(() => String, {nullable:true})
    group?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedCreateNestedManyWithoutStudentInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateOneWithoutUserNestedInput {
    @Field(() => StudentEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutUserInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutUserInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutUserInput>;
    @Field(() => StudentEntityUpsertWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutUserInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutUserInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutUserInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateWithoutArrivalNoticeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateWithoutCloseRelativesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateWithoutMigrationCardInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateWithoutPassportInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateWithoutUserInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateWithoutVisaRequestsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateWithoutVisaInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUncheckedUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateManyMutationInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentEntityUpdateOneRequiredWithoutArrivalNoticeNestedInput {
    @Field(() => StudentEntityCreateWithoutArrivalNoticeInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutArrivalNoticeInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutArrivalNoticeInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutArrivalNoticeInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutArrivalNoticeInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutArrivalNoticeInput>;
    @Field(() => StudentEntityUpsertWithoutArrivalNoticeInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutArrivalNoticeInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutArrivalNoticeInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutArrivalNoticeInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutArrivalNoticeInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutArrivalNoticeInput>;
}

@InputType()
export class StudentEntityUpdateOneRequiredWithoutCloseRelativesNestedInput {
    @Field(() => StudentEntityCreateWithoutCloseRelativesInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutCloseRelativesInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutCloseRelativesInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutCloseRelativesInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutCloseRelativesInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutCloseRelativesInput>;
    @Field(() => StudentEntityUpsertWithoutCloseRelativesInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutCloseRelativesInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutCloseRelativesInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutCloseRelativesInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutCloseRelativesInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutCloseRelativesInput>;
}

@InputType()
export class StudentEntityUpdateOneRequiredWithoutMigrationCardNestedInput {
    @Field(() => StudentEntityCreateWithoutMigrationCardInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutMigrationCardInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutMigrationCardInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutMigrationCardInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutMigrationCardInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutMigrationCardInput>;
    @Field(() => StudentEntityUpsertWithoutMigrationCardInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutMigrationCardInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutMigrationCardInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutMigrationCardInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutMigrationCardInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutMigrationCardInput>;
}

@InputType()
export class StudentEntityUpdateOneRequiredWithoutPassportNestedInput {
    @Field(() => StudentEntityCreateWithoutPassportInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutPassportInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutPassportInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutPassportInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutPassportInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutPassportInput>;
    @Field(() => StudentEntityUpsertWithoutPassportInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutPassportInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutPassportInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutPassportInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutPassportInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutPassportInput>;
}

@InputType()
export class StudentEntityUpdateOneRequiredWithoutVisaNestedInput {
    @Field(() => StudentEntityCreateWithoutVisaInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutVisaInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutVisaInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutVisaInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutVisaInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutVisaInput>;
    @Field(() => StudentEntityUpsertWithoutVisaInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutVisaInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutVisaInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutVisaInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutVisaInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutVisaInput>;
}

@InputType()
export class StudentEntityUpdateOneRequiredWithoutVisaRequestsNestedInput {
    @Field(() => StudentEntityCreateWithoutVisaRequestsInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutVisaRequestsInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutVisaRequestsInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutVisaRequestsInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutVisaRequestsInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutVisaRequestsInput>;
    @Field(() => StudentEntityUpsertWithoutVisaRequestsInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutVisaRequestsInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutVisaRequestsInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutVisaRequestsInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutVisaRequestsInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutVisaRequestsInput>;
}

@InputType()
export class StudentEntityUpdateOneWithoutUserNestedInput {
    @Field(() => StudentEntityCreateWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateWithoutUserInput)
    create?: InstanceType<typeof StudentEntityCreateWithoutUserInput>;
    @Field(() => StudentEntityCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof StudentEntityCreateOrConnectWithoutUserInput>;
    @Field(() => StudentEntityUpsertWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityUpsertWithoutUserInput)
    upsert?: InstanceType<typeof StudentEntityUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityUpdateWithoutUserInput, {nullable:true})
    @Type(() => StudentEntityUpdateWithoutUserInput)
    update?: InstanceType<typeof StudentEntityUpdateWithoutUserInput>;
}

@InputType()
export class StudentEntityUpdateWithoutArrivalNoticeInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateWithoutCloseRelativesInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutStudentNestedInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateWithoutMigrationCardInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutStudentNestedInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateWithoutPassportInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutStudentNestedInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateWithoutUserInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateWithoutVisaRequestsInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutStudentNestedInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateWithoutVisaInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutStudentNestedInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    curator?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faculty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    course?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    group?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    user?: InstanceType<typeof UserEntityUpdateOneRequiredWithoutStudentNestedInput>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityUpdateOneWithoutStudentNestedInput>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityUpdateManyWithoutStudentNestedInput>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput>;
}

@InputType()
export class StudentEntityUpsertWithoutArrivalNoticeInput {
    @Field(() => StudentEntityUpdateWithoutArrivalNoticeInput, {nullable:false})
    @Type(() => StudentEntityUpdateWithoutArrivalNoticeInput)
    update!: InstanceType<typeof StudentEntityUpdateWithoutArrivalNoticeInput>;
    @Field(() => StudentEntityCreateWithoutArrivalNoticeInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutArrivalNoticeInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutArrivalNoticeInput>;
}

@InputType()
export class StudentEntityUpsertWithoutCloseRelativesInput {
    @Field(() => StudentEntityUpdateWithoutCloseRelativesInput, {nullable:false})
    @Type(() => StudentEntityUpdateWithoutCloseRelativesInput)
    update!: InstanceType<typeof StudentEntityUpdateWithoutCloseRelativesInput>;
    @Field(() => StudentEntityCreateWithoutCloseRelativesInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutCloseRelativesInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutCloseRelativesInput>;
}

@InputType()
export class StudentEntityUpsertWithoutMigrationCardInput {
    @Field(() => StudentEntityUpdateWithoutMigrationCardInput, {nullable:false})
    @Type(() => StudentEntityUpdateWithoutMigrationCardInput)
    update!: InstanceType<typeof StudentEntityUpdateWithoutMigrationCardInput>;
    @Field(() => StudentEntityCreateWithoutMigrationCardInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutMigrationCardInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutMigrationCardInput>;
}

@InputType()
export class StudentEntityUpsertWithoutPassportInput {
    @Field(() => StudentEntityUpdateWithoutPassportInput, {nullable:false})
    @Type(() => StudentEntityUpdateWithoutPassportInput)
    update!: InstanceType<typeof StudentEntityUpdateWithoutPassportInput>;
    @Field(() => StudentEntityCreateWithoutPassportInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutPassportInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutPassportInput>;
}

@InputType()
export class StudentEntityUpsertWithoutUserInput {
    @Field(() => StudentEntityUpdateWithoutUserInput, {nullable:false})
    @Type(() => StudentEntityUpdateWithoutUserInput)
    update!: InstanceType<typeof StudentEntityUpdateWithoutUserInput>;
    @Field(() => StudentEntityCreateWithoutUserInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutUserInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutUserInput>;
}

@InputType()
export class StudentEntityUpsertWithoutVisaRequestsInput {
    @Field(() => StudentEntityUpdateWithoutVisaRequestsInput, {nullable:false})
    @Type(() => StudentEntityUpdateWithoutVisaRequestsInput)
    update!: InstanceType<typeof StudentEntityUpdateWithoutVisaRequestsInput>;
    @Field(() => StudentEntityCreateWithoutVisaRequestsInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutVisaRequestsInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutVisaRequestsInput>;
}

@InputType()
export class StudentEntityUpsertWithoutVisaInput {
    @Field(() => StudentEntityUpdateWithoutVisaInput, {nullable:false})
    @Type(() => StudentEntityUpdateWithoutVisaInput)
    update!: InstanceType<typeof StudentEntityUpdateWithoutVisaInput>;
    @Field(() => StudentEntityCreateWithoutVisaInput, {nullable:false})
    @Type(() => StudentEntityCreateWithoutVisaInput)
    create!: InstanceType<typeof StudentEntityCreateWithoutVisaInput>;
}

@InputType()
export class StudentEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class StudentEntityWhereInput {
    @Field(() => [StudentEntityWhereInput], {nullable:true})
    AND?: Array<StudentEntityWhereInput>;
    @Field(() => [StudentEntityWhereInput], {nullable:true})
    OR?: Array<StudentEntityWhereInput>;
    @Field(() => [StudentEntityWhereInput], {nullable:true})
    NOT?: Array<StudentEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    phone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    curator?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    faculty?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    course?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    group?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    user?: InstanceType<typeof UserEntityRelationFilter>;
    @HideField()
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntityRelationFilter>;
    @HideField()
    migrationCard?: InstanceType<typeof StudentMigrationCardEntityRelationFilter>;
    @HideField()
    visa?: InstanceType<typeof StudentVisaEntityRelationFilter>;
    @HideField()
    passport?: InstanceType<typeof StudentPassportEntityRelationFilter>;
    @HideField()
    closeRelatives?: InstanceType<typeof StudentCloseRelativeEntityListRelationFilter>;
    @HideField()
    visaRequests?: InstanceType<typeof StudentVisaRequestEntityListRelationFilter>;
}

/**
 * Студент
 */
@ObjectType({description:'Студент'})
export class StudentEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    /**
     * Телефон
     */
    @Field(() => String, {nullable:true,description:'Телефон'})
    phone!: string | null;
    /**
     * Куратор
     */
    @Field(() => String, {nullable:true,description:'Куратор'})
    curator!: string | null;
    /**
     * Факультет
     */
    @Field(() => String, {nullable:true,description:'Факультет'})
    faculty!: string | null;
    /**
     * Курс
     */
    @Field(() => Int, {nullable:true,description:'Курс'})
    course!: number | null;
    /**
     * Группа
     */
    @Field(() => String, {nullable:true,description:'Группа'})
    group!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => UserEntity, {nullable:false})
    user?: InstanceType<typeof UserEntity>;
    /**
     * Уведомление о прибытии
     */
    @Field(() => StudentArrivalNoticeEntity, {nullable:true,description:'Уведомление о прибытии'})
    arrivalNotice?: InstanceType<typeof StudentArrivalNoticeEntity> | null;
    /**
     * Миграционная карта
     */
    @Field(() => StudentMigrationCardEntity, {nullable:true,description:'Миграционная карта'})
    migrationCard?: InstanceType<typeof StudentMigrationCardEntity> | null;
    /**
     * Виза
     */
    @Field(() => StudentVisaEntity, {nullable:true,description:'Виза'})
    visa?: InstanceType<typeof StudentVisaEntity> | null;
    /**
     * Паспорт
     */
    @Field(() => StudentPassportEntity, {nullable:true,description:'Паспорт'})
    passport?: InstanceType<typeof StudentPassportEntity> | null;
    /**
     * Близкие родственники
     */
    @Field(() => [StudentCloseRelativeEntity], {nullable:true,description:'Близкие родственники'})
    closeRelatives?: Array<StudentCloseRelativeEntity>;
    /**
     * Визовые анкеты
     */
    @Field(() => [StudentVisaRequestEntity], {nullable:true,description:'Визовые анкеты'})
    visaRequests?: Array<StudentVisaRequestEntity>;
    @Field(() => StudentEntityCount, {nullable:false})
    _count?: InstanceType<typeof StudentEntityCount>;
}

@ArgsType()
export class UpdateManyStudentEntityArgs {
    @Field(() => StudentEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentEntityUpdateManyMutationInput>;
    @Field(() => StudentEntityWhereInput, {nullable:true})
    @Type(() => StudentEntityWhereInput)
    where?: InstanceType<typeof StudentEntityWhereInput>;
}

@ArgsType()
export class UpdateOneStudentEntityArgs {
    @Field(() => StudentEntityUpdateInput, {nullable:false})
    @Type(() => StudentEntityUpdateInput)
    data!: InstanceType<typeof StudentEntityUpdateInput>;
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStudentEntityArgs {
    @Field(() => StudentEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentEntityWhereUniqueInput>;
    @Field(() => StudentEntityCreateInput, {nullable:false})
    @Type(() => StudentEntityCreateInput)
    create!: InstanceType<typeof StudentEntityCreateInput>;
    @Field(() => StudentEntityUpdateInput, {nullable:false})
    @Type(() => StudentEntityUpdateInput)
    update!: InstanceType<typeof StudentEntityUpdateInput>;
}

@ObjectType()
export class AggregateStudentMigrationCardEntity {
    @Field(() => StudentMigrationCardEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentMigrationCardEntityCountAggregate>;
    @Field(() => StudentMigrationCardEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentMigrationCardEntityMinAggregate>;
    @Field(() => StudentMigrationCardEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentMigrationCardEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyStudentMigrationCardEntityArgs {
    @Field(() => [StudentMigrationCardEntityCreateManyInput], {nullable:false})
    @Type(() => StudentMigrationCardEntityCreateManyInput)
    data!: Array<StudentMigrationCardEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityCreateInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityCreateInput)
    data!: InstanceType<typeof StudentMigrationCardEntityCreateInput>;
}

@ArgsType()
export class DeleteManyStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereInput)
    where?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
}

@ArgsType()
export class DeleteOneStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStudentMigrationCardEntityOrThrowArgs {
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereInput)
    where?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
    @Field(() => [StudentMigrationCardEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentMigrationCardEntityOrderByWithRelationInput>;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentMigrationCardEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentMigrationCardEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereInput)
    where?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
    @Field(() => [StudentMigrationCardEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentMigrationCardEntityOrderByWithRelationInput>;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentMigrationCardEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentMigrationCardEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereInput)
    where?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
    @Field(() => [StudentMigrationCardEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentMigrationCardEntityOrderByWithRelationInput>;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentMigrationCardEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentMigrationCardEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStudentMigrationCardEntityOrThrowArgs {
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
}

@ArgsType()
export class StudentMigrationCardEntityAggregateArgs {
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereInput)
    where?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
    @Field(() => [StudentMigrationCardEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentMigrationCardEntityOrderByWithRelationInput>;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentMigrationCardEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentMigrationCardEntityCountAggregateInput>;
    @Field(() => StudentMigrationCardEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentMigrationCardEntityMinAggregateInput>;
    @Field(() => StudentMigrationCardEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentMigrationCardEntityMaxAggregateInput>;
}

@InputType()
export class StudentMigrationCardEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    series?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StudentMigrationCardEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    studentId!: number;
    @Field(() => Int, {nullable:false})
    series!: number;
    @Field(() => Int, {nullable:false})
    number!: number;
    @Field(() => Int, {nullable:false})
    issueDate!: number;
    @Field(() => Int, {nullable:false})
    expirationDate!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StudentMigrationCardEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentMigrationCardEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentMigrationCardEntityCreateNestedOneWithoutStudentInput {
    @Field(() => StudentMigrationCardEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentMigrationCardEntityCreateWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentMigrationCardEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
}

@InputType()
export class StudentMigrationCardEntityCreateOrConnectWithoutStudentInput {
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => StudentMigrationCardEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentMigrationCardEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentMigrationCardEntityCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentMigrationCardEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student!: InstanceType<typeof StudentEntityCreateNestedOneWithoutMigrationCardInput>;
}

@ArgsType()
export class StudentMigrationCardEntityGroupByArgs {
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereInput)
    where?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
    @Field(() => [StudentMigrationCardEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentMigrationCardEntityOrderByWithAggregationInput>;
    @Field(() => [StudentMigrationCardEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentMigrationCardEntityScalarFieldEnum>;
    @Field(() => StudentMigrationCardEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StudentMigrationCardEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentMigrationCardEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentMigrationCardEntityCountAggregateInput>;
    @Field(() => StudentMigrationCardEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentMigrationCardEntityMinAggregateInput>;
    @Field(() => StudentMigrationCardEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentMigrationCardEntityMaxAggregateInput>;
}

@ObjectType()
export class StudentMigrationCardEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StudentMigrationCardEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentMigrationCardEntityCountAggregate>;
    @Field(() => StudentMigrationCardEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentMigrationCardEntityMinAggregate>;
    @Field(() => StudentMigrationCardEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentMigrationCardEntityMaxAggregate>;
}

@InputType()
export class StudentMigrationCardEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    series?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentMigrationCardEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentMigrationCardEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentMigrationCardEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    series?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentMigrationCardEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentMigrationCardEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentMigrationCardEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => StudentMigrationCardEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentMigrationCardEntityCountOrderByAggregateInput>;
    @Field(() => StudentMigrationCardEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentMigrationCardEntityMaxOrderByAggregateInput>;
    @Field(() => StudentMigrationCardEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentMigrationCardEntityMinOrderByAggregateInput>;
}

@InputType()
export class StudentMigrationCardEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    student?: InstanceType<typeof StudentEntityOrderByWithRelationInput>;
}

@InputType()
export class StudentMigrationCardEntityRelationFilter {
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
}

@InputType()
export class StudentMigrationCardEntityScalarWhereWithAggregatesInput {
    @Field(() => [StudentMigrationCardEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentMigrationCardEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentMigrationCardEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentMigrationCardEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentMigrationCardEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentMigrationCardEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    series?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    number?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    issueDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expirationDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StudentMigrationCardEntityUncheckedCreateNestedOneWithoutStudentInput {
    @Field(() => StudentMigrationCardEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentMigrationCardEntityCreateWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentMigrationCardEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
}

@InputType()
export class StudentMigrationCardEntityUncheckedCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentMigrationCardEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentMigrationCardEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentMigrationCardEntityUncheckedUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentMigrationCardEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentMigrationCardEntityCreateWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentMigrationCardEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentMigrationCardEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => StudentMigrationCardEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentMigrationCardEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentMigrationCardEntityUncheckedUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentMigrationCardEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentMigrationCardEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentMigrationCardEntityUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentMigrationCardEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentMigrationCardEntityCreateWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentMigrationCardEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentMigrationCardEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => StudentMigrationCardEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentMigrationCardEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentMigrationCardEntityUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentMigrationCardEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneRequiredWithoutMigrationCardNestedInput>;
}

@InputType()
export class StudentMigrationCardEntityUpsertWithoutStudentInput {
    @Field(() => StudentMigrationCardEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityUpdateWithoutStudentInput)
    update!: InstanceType<typeof StudentMigrationCardEntityUpdateWithoutStudentInput>;
    @Field(() => StudentMigrationCardEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentMigrationCardEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentMigrationCardEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
}

@InputType()
export class StudentMigrationCardEntityWhereInput {
    @Field(() => [StudentMigrationCardEntityWhereInput], {nullable:true})
    AND?: Array<StudentMigrationCardEntityWhereInput>;
    @Field(() => [StudentMigrationCardEntityWhereInput], {nullable:true})
    OR?: Array<StudentMigrationCardEntityWhereInput>;
    @Field(() => [StudentMigrationCardEntityWhereInput], {nullable:true})
    NOT?: Array<StudentMigrationCardEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    series?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    number?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    issueDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expirationDate?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    student?: InstanceType<typeof StudentEntityRelationFilter>;
}

/**
 * Миграционная карта студента
 */
@ObjectType({description:'Миграционная карта студента'})
export class StudentMigrationCardEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    /**
     * Серия
     */
    @Field(() => String, {nullable:true,description:'Серия'})
    series!: string | null;
    /**
     * Номер
     */
    @Field(() => String, {nullable:true,description:'Номер'})
    number!: string | null;
    /**
     * Дата выдачи
     */
    @Field(() => Date, {nullable:true,description:'Дата выдачи'})
    issueDate!: Date | null;
    /**
     * Дата истечения
     */
    @Field(() => Date, {nullable:true,description:'Дата истечения'})
    expirationDate!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => StudentEntity, {nullable:false})
    student?: InstanceType<typeof StudentEntity>;
}

@ArgsType()
export class UpdateManyStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentMigrationCardEntityUpdateManyMutationInput>;
    @Field(() => StudentMigrationCardEntityWhereInput, {nullable:true})
    @Type(() => StudentMigrationCardEntityWhereInput)
    where?: InstanceType<typeof StudentMigrationCardEntityWhereInput>;
}

@ArgsType()
export class UpdateOneStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityUpdateInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityUpdateInput)
    data!: InstanceType<typeof StudentMigrationCardEntityUpdateInput>;
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStudentMigrationCardEntityArgs {
    @Field(() => StudentMigrationCardEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentMigrationCardEntityWhereUniqueInput>;
    @Field(() => StudentMigrationCardEntityCreateInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityCreateInput)
    create!: InstanceType<typeof StudentMigrationCardEntityCreateInput>;
    @Field(() => StudentMigrationCardEntityUpdateInput, {nullable:false})
    @Type(() => StudentMigrationCardEntityUpdateInput)
    update!: InstanceType<typeof StudentMigrationCardEntityUpdateInput>;
}

@ObjectType()
export class AggregateStudentPassportEntity {
    @Field(() => StudentPassportEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentPassportEntityCountAggregate>;
    @Field(() => StudentPassportEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentPassportEntityMinAggregate>;
    @Field(() => StudentPassportEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentPassportEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyStudentPassportEntityArgs {
    @Field(() => [StudentPassportEntityCreateManyInput], {nullable:false})
    @Type(() => StudentPassportEntityCreateManyInput)
    data!: Array<StudentPassportEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityCreateInput, {nullable:false})
    @Type(() => StudentPassportEntityCreateInput)
    data!: InstanceType<typeof StudentPassportEntityCreateInput>;
}

@ArgsType()
export class DeleteManyStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereInput)
    where?: InstanceType<typeof StudentPassportEntityWhereInput>;
}

@ArgsType()
export class DeleteOneStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStudentPassportEntityOrThrowArgs {
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereInput)
    where?: InstanceType<typeof StudentPassportEntityWhereInput>;
    @Field(() => [StudentPassportEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentPassportEntityOrderByWithRelationInput>;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentPassportEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentPassportEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereInput)
    where?: InstanceType<typeof StudentPassportEntityWhereInput>;
    @Field(() => [StudentPassportEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentPassportEntityOrderByWithRelationInput>;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentPassportEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentPassportEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereInput)
    where?: InstanceType<typeof StudentPassportEntityWhereInput>;
    @Field(() => [StudentPassportEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentPassportEntityOrderByWithRelationInput>;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentPassportEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentPassportEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStudentPassportEntityOrThrowArgs {
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
}

@ArgsType()
export class StudentPassportEntityAggregateArgs {
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereInput)
    where?: InstanceType<typeof StudentPassportEntityWhereInput>;
    @Field(() => [StudentPassportEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentPassportEntityOrderByWithRelationInput>;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentPassportEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentPassportEntityCountAggregateInput>;
    @Field(() => StudentPassportEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentPassportEntityMinAggregateInput>;
    @Field(() => StudentPassportEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentPassportEntityMaxAggregateInput>;
}

@InputType()
export class StudentPassportEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    birthPlace?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    citizenship?: true;
    @Field(() => Boolean, {nullable:true})
    series?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    issuedBy?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StudentPassportEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    studentId!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    patronymic!: number;
    @Field(() => Int, {nullable:false})
    birthDate!: number;
    @Field(() => Int, {nullable:false})
    birthPlace!: number;
    @Field(() => Int, {nullable:false})
    gender!: number;
    @Field(() => Int, {nullable:false})
    citizenship!: number;
    @Field(() => Int, {nullable:false})
    series!: number;
    @Field(() => Int, {nullable:false})
    number!: number;
    @Field(() => Int, {nullable:false})
    issueDate!: number;
    @Field(() => Int, {nullable:false})
    issuedBy!: number;
    @Field(() => Int, {nullable:false})
    expirationDate!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StudentPassportEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthPlace?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentPassportEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentPassportEntityCreateNestedOneWithoutStudentInput {
    @Field(() => StudentPassportEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentPassportEntityCreateWithoutStudentInput>;
    @Field(() => StudentPassportEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentPassportEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
}

@InputType()
export class StudentPassportEntityCreateOrConnectWithoutStudentInput {
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => StudentPassportEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentPassportEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentPassportEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentPassportEntityCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentPassportEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student!: InstanceType<typeof StudentEntityCreateNestedOneWithoutPassportInput>;
}

@ArgsType()
export class StudentPassportEntityGroupByArgs {
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereInput)
    where?: InstanceType<typeof StudentPassportEntityWhereInput>;
    @Field(() => [StudentPassportEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentPassportEntityOrderByWithAggregationInput>;
    @Field(() => [StudentPassportEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentPassportEntityScalarFieldEnum>;
    @Field(() => StudentPassportEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StudentPassportEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentPassportEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentPassportEntityCountAggregateInput>;
    @Field(() => StudentPassportEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentPassportEntityMinAggregateInput>;
    @Field(() => StudentPassportEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentPassportEntityMaxAggregateInput>;
}

@ObjectType()
export class StudentPassportEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StudentPassportEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentPassportEntityCountAggregate>;
    @Field(() => StudentPassportEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentPassportEntityMinAggregate>;
    @Field(() => StudentPassportEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentPassportEntityMaxAggregate>;
}

@InputType()
export class StudentPassportEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    birthPlace?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    citizenship?: true;
    @Field(() => Boolean, {nullable:true})
    series?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    issuedBy?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentPassportEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentPassportEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthPlace?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentPassportEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    patronymic?: true;
    @Field(() => Boolean, {nullable:true})
    birthDate?: true;
    @Field(() => Boolean, {nullable:true})
    birthPlace?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    citizenship?: true;
    @Field(() => Boolean, {nullable:true})
    series?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    issuedBy?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentPassportEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentPassportEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthPlace?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentPassportEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthPlace?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => StudentPassportEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentPassportEntityCountOrderByAggregateInput>;
    @Field(() => StudentPassportEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentPassportEntityMaxOrderByAggregateInput>;
    @Field(() => StudentPassportEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentPassportEntityMinOrderByAggregateInput>;
}

@InputType()
export class StudentPassportEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    patronymic?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    birthPlace?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    citizenship?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    student?: InstanceType<typeof StudentEntityOrderByWithRelationInput>;
}

@InputType()
export class StudentPassportEntityRelationFilter {
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof StudentPassportEntityWhereInput>;
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof StudentPassportEntityWhereInput>;
}

@InputType()
export class StudentPassportEntityScalarWhereWithAggregatesInput {
    @Field(() => [StudentPassportEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentPassportEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentPassportEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentPassportEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentPassportEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentPassportEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    patronymic?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    birthPlace?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumGenderEnumWithAggregatesFilter, {nullable:true})
    gender?: InstanceType<typeof EnumGenderEnumWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    citizenship?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    series?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    number?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    issueDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    issuedBy?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expirationDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StudentPassportEntityUncheckedCreateNestedOneWithoutStudentInput {
    @Field(() => StudentPassportEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentPassportEntityCreateWithoutStudentInput>;
    @Field(() => StudentPassportEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentPassportEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
}

@InputType()
export class StudentPassportEntityUncheckedCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentPassportEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    patronymic?: string;
    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;
    @Field(() => String, {nullable:true})
    birthPlace?: string;
    @Field(() => GenderEnum, {nullable:true})
    gender?: keyof typeof GenderEnum;
    @Field(() => String, {nullable:true})
    citizenship?: string;
    @Field(() => String, {nullable:true})
    series?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => String, {nullable:true})
    issuedBy?: string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentPassportEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    birthPlace?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumGenderEnumFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    issuedBy?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentPassportEntityUncheckedUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentPassportEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentPassportEntityCreateWithoutStudentInput>;
    @Field(() => StudentPassportEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentPassportEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentPassportEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentPassportEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => StudentPassportEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentPassportEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentPassportEntityUncheckedUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    birthPlace?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumGenderEnumFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    issuedBy?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentPassportEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    birthPlace?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumGenderEnumFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    issuedBy?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentPassportEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    birthPlace?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumGenderEnumFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    issuedBy?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentPassportEntityUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentPassportEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentPassportEntityCreateWithoutStudentInput>;
    @Field(() => StudentPassportEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentPassportEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentPassportEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentPassportEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => StudentPassportEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentPassportEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentPassportEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentPassportEntityUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    birthPlace?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumGenderEnumFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    issuedBy?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentPassportEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    patronymic?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    birthPlace?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumGenderEnumFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof NullableEnumGenderEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    citizenship?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    series?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    issuedBy?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneRequiredWithoutPassportNestedInput>;
}

@InputType()
export class StudentPassportEntityUpsertWithoutStudentInput {
    @Field(() => StudentPassportEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentPassportEntityUpdateWithoutStudentInput)
    update!: InstanceType<typeof StudentPassportEntityUpdateWithoutStudentInput>;
    @Field(() => StudentPassportEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentPassportEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentPassportEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentPassportEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
}

@InputType()
export class StudentPassportEntityWhereInput {
    @Field(() => [StudentPassportEntityWhereInput], {nullable:true})
    AND?: Array<StudentPassportEntityWhereInput>;
    @Field(() => [StudentPassportEntityWhereInput], {nullable:true})
    OR?: Array<StudentPassportEntityWhereInput>;
    @Field(() => [StudentPassportEntityWhereInput], {nullable:true})
    NOT?: Array<StudentPassportEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    patronymic?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    birthDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    birthPlace?: InstanceType<typeof StringFilter>;
    @Field(() => EnumGenderEnumFilter, {nullable:true})
    gender?: InstanceType<typeof EnumGenderEnumFilter>;
    @Field(() => StringFilter, {nullable:true})
    citizenship?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    series?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    number?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    issueDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    issuedBy?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expirationDate?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    student?: InstanceType<typeof StudentEntityRelationFilter>;
}

/**
 * Паспорт студента
 */
@ObjectType({description:'Паспорт студента'})
export class StudentPassportEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    /**
     * Фамилия
     */
    @Field(() => String, {nullable:true,description:'Фамилия'})
    lastName!: string | null;
    /**
     * Имя
     */
    @Field(() => String, {nullable:true,description:'Имя'})
    firstName!: string | null;
    /**
     * Отчество
     */
    @Field(() => String, {nullable:true,description:'Отчество'})
    patronymic!: string | null;
    /**
     * Дата рождения
     */
    @Field(() => Date, {nullable:true,description:'Дата рождения'})
    birthDate!: Date | null;
    /**
     * Место рождения
     */
    @Field(() => String, {nullable:true,description:'Место рождения'})
    birthPlace!: string | null;
    /**
     * Пол
     */
    @Field(() => GenderEnum, {nullable:true,description:'Пол'})
    gender!: keyof typeof GenderEnum | null;
    /**
     * Гражданство
     */
    @Field(() => String, {nullable:true,description:'Гражданство'})
    citizenship!: string | null;
    /**
     * Серия
     */
    @Field(() => String, {nullable:true,description:'Серия'})
    series!: string | null;
    /**
     * Номер
     */
    @Field(() => String, {nullable:true,description:'Номер'})
    number!: string | null;
    /**
     * Дата выдачи
     */
    @Field(() => Date, {nullable:true,description:'Дата выдачи'})
    issueDate!: Date | null;
    /**
     * Кем выдан
     */
    @Field(() => String, {nullable:true,description:'Кем выдан'})
    issuedBy!: string | null;
    /**
     * Дата истечения
     */
    @Field(() => Date, {nullable:true,description:'Дата истечения'})
    expirationDate!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => StudentEntity, {nullable:false})
    student?: InstanceType<typeof StudentEntity>;
}

@ArgsType()
export class UpdateManyStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentPassportEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentPassportEntityUpdateManyMutationInput>;
    @Field(() => StudentPassportEntityWhereInput, {nullable:true})
    @Type(() => StudentPassportEntityWhereInput)
    where?: InstanceType<typeof StudentPassportEntityWhereInput>;
}

@ArgsType()
export class UpdateOneStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityUpdateInput, {nullable:false})
    @Type(() => StudentPassportEntityUpdateInput)
    data!: InstanceType<typeof StudentPassportEntityUpdateInput>;
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStudentPassportEntityArgs {
    @Field(() => StudentPassportEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentPassportEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentPassportEntityWhereUniqueInput>;
    @Field(() => StudentPassportEntityCreateInput, {nullable:false})
    @Type(() => StudentPassportEntityCreateInput)
    create!: InstanceType<typeof StudentPassportEntityCreateInput>;
    @Field(() => StudentPassportEntityUpdateInput, {nullable:false})
    @Type(() => StudentPassportEntityUpdateInput)
    update!: InstanceType<typeof StudentPassportEntityUpdateInput>;
}

@ObjectType()
export class AggregateStudentVisaEntity {
    @Field(() => StudentVisaEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentVisaEntityCountAggregate>;
    @Field(() => StudentVisaEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentVisaEntityMinAggregate>;
    @Field(() => StudentVisaEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentVisaEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyStudentVisaEntityArgs {
    @Field(() => [StudentVisaEntityCreateManyInput], {nullable:false})
    @Type(() => StudentVisaEntityCreateManyInput)
    data!: Array<StudentVisaEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityCreateInput, {nullable:false})
    @Type(() => StudentVisaEntityCreateInput)
    data!: InstanceType<typeof StudentVisaEntityCreateInput>;
}

@ArgsType()
export class DeleteManyStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereInput)
    where?: InstanceType<typeof StudentVisaEntityWhereInput>;
}

@ArgsType()
export class DeleteOneStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStudentVisaEntityOrThrowArgs {
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereInput)
    where?: InstanceType<typeof StudentVisaEntityWhereInput>;
    @Field(() => [StudentVisaEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentVisaEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentVisaEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereInput)
    where?: InstanceType<typeof StudentVisaEntityWhereInput>;
    @Field(() => [StudentVisaEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentVisaEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentVisaEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereInput)
    where?: InstanceType<typeof StudentVisaEntityWhereInput>;
    @Field(() => [StudentVisaEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentVisaEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentVisaEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStudentVisaEntityOrThrowArgs {
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
}

@ArgsType()
export class StudentVisaEntityAggregateArgs {
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereInput)
    where?: InstanceType<typeof StudentVisaEntityWhereInput>;
    @Field(() => [StudentVisaEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentVisaEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentVisaEntityCountAggregateInput>;
    @Field(() => StudentVisaEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentVisaEntityMinAggregateInput>;
    @Field(() => StudentVisaEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentVisaEntityMaxAggregateInput>;
}

@InputType()
export class StudentVisaEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    blankSeries?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @Field(() => Boolean, {nullable:true})
    invitationNumber?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StudentVisaEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    studentId!: number;
    @Field(() => Int, {nullable:false})
    blankSeries!: number;
    @Field(() => Int, {nullable:false})
    number!: number;
    @Field(() => Int, {nullable:false})
    issueDate!: number;
    @Field(() => Int, {nullable:false})
    expirationDate!: number;
    @Field(() => Int, {nullable:false})
    invitationNumber!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StudentVisaEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    blankSeries?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitationNumber?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentVisaEntityCreateManyInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaEntityCreateNestedOneWithoutStudentInput {
    @Field(() => StudentVisaEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentVisaEntityCreateWithoutStudentInput>;
    @Field(() => StudentVisaEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentVisaEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
}

@InputType()
export class StudentVisaEntityCreateOrConnectWithoutStudentInput {
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => StudentVisaEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentVisaEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentVisaEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentVisaEntityCreateWithoutStudentInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaEntityCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student!: InstanceType<typeof StudentEntityCreateNestedOneWithoutVisaInput>;
}

@ArgsType()
export class StudentVisaEntityGroupByArgs {
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereInput)
    where?: InstanceType<typeof StudentVisaEntityWhereInput>;
    @Field(() => [StudentVisaEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentVisaEntityOrderByWithAggregationInput>;
    @Field(() => [StudentVisaEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentVisaEntityScalarFieldEnum>;
    @Field(() => StudentVisaEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StudentVisaEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentVisaEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentVisaEntityCountAggregateInput>;
    @Field(() => StudentVisaEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentVisaEntityMinAggregateInput>;
    @Field(() => StudentVisaEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentVisaEntityMaxAggregateInput>;
}

@ObjectType()
export class StudentVisaEntityGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StudentVisaEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentVisaEntityCountAggregate>;
    @Field(() => StudentVisaEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentVisaEntityMinAggregate>;
    @Field(() => StudentVisaEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentVisaEntityMaxAggregate>;
}

@InputType()
export class StudentVisaEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    blankSeries?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @Field(() => Boolean, {nullable:true})
    invitationNumber?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentVisaEntityMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    blankSeries?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitationNumber?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentVisaEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    blankSeries?: true;
    @Field(() => Boolean, {nullable:true})
    number?: true;
    @Field(() => Boolean, {nullable:true})
    issueDate?: true;
    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
    @Field(() => Boolean, {nullable:true})
    invitationNumber?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentVisaEntityMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    blankSeries?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitationNumber?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentVisaEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    blankSeries?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitationNumber?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => StudentVisaEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentVisaEntityCountOrderByAggregateInput>;
    @Field(() => StudentVisaEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentVisaEntityMaxOrderByAggregateInput>;
    @Field(() => StudentVisaEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentVisaEntityMinOrderByAggregateInput>;
}

@InputType()
export class StudentVisaEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    blankSeries?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    invitationNumber?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    student?: InstanceType<typeof StudentEntityOrderByWithRelationInput>;
}

@InputType()
export class StudentVisaEntityRelationFilter {
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof StudentVisaEntityWhereInput>;
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof StudentVisaEntityWhereInput>;
}

@InputType()
export class StudentVisaEntityScalarWhereWithAggregatesInput {
    @Field(() => [StudentVisaEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentVisaEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentVisaEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentVisaEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentVisaEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentVisaEntityScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    blankSeries?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    number?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    issueDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expirationDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    invitationNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StudentVisaEntityUncheckedCreateNestedOneWithoutStudentInput {
    @Field(() => StudentVisaEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentVisaEntityCreateWithoutStudentInput>;
    @Field(() => StudentVisaEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentVisaEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
}

@InputType()
export class StudentVisaEntityUncheckedCreateWithoutStudentInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaEntityUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => String, {nullable:true})
    blankSeries?: string;
    @Field(() => String, {nullable:true})
    number?: string;
    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;
    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
    @Field(() => String, {nullable:true})
    invitationNumber?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    blankSeries?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaEntityUncheckedUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentVisaEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentVisaEntityCreateWithoutStudentInput>;
    @Field(() => StudentVisaEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentVisaEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentVisaEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentVisaEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => StudentVisaEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentVisaEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentVisaEntityUncheckedUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    blankSeries?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    blankSeries?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    blankSeries?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaEntityUpdateOneWithoutStudentNestedInput {
    @Field(() => StudentVisaEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof StudentVisaEntityCreateWithoutStudentInput>;
    @Field(() => StudentVisaEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof StudentVisaEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentVisaEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof StudentVisaEntityUpsertWithoutStudentInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    connect?: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => StudentVisaEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => StudentVisaEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof StudentVisaEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentVisaEntityUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    blankSeries?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    blankSeries?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    number?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    invitationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneRequiredWithoutVisaNestedInput>;
}

@InputType()
export class StudentVisaEntityUpsertWithoutStudentInput {
    @Field(() => StudentVisaEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentVisaEntityUpdateWithoutStudentInput)
    update!: InstanceType<typeof StudentVisaEntityUpdateWithoutStudentInput>;
    @Field(() => StudentVisaEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentVisaEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentVisaEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentVisaEntityWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
}

@InputType()
export class StudentVisaEntityWhereInput {
    @Field(() => [StudentVisaEntityWhereInput], {nullable:true})
    AND?: Array<StudentVisaEntityWhereInput>;
    @Field(() => [StudentVisaEntityWhereInput], {nullable:true})
    OR?: Array<StudentVisaEntityWhereInput>;
    @Field(() => [StudentVisaEntityWhereInput], {nullable:true})
    NOT?: Array<StudentVisaEntityWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    blankSeries?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    number?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    issueDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expirationDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    invitationNumber?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    student?: InstanceType<typeof StudentEntityRelationFilter>;
}

/**
 * Виза студента
 */
@ObjectType({description:'Виза студента'})
export class StudentVisaEntity {
    /**
     * Идентификатор визы
     */
    @Field(() => ID, {nullable:false,description:'Идентификатор визы'})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    /**
     * Серия бланка
     */
    @Field(() => String, {nullable:true,description:'Серия бланка'})
    blankSeries!: string | null;
    /**
     * Номер
     */
    @Field(() => String, {nullable:true,description:'Номер'})
    number!: string | null;
    /**
     * Дата выдачи
     */
    @Field(() => Date, {nullable:true,description:'Дата выдачи'})
    issueDate!: Date | null;
    /**
     * Дата истечения
     */
    @Field(() => Date, {nullable:true,description:'Дата истечения'})
    expirationDate!: Date | null;
    /**
     * Номер приглашения
     */
    @Field(() => String, {nullable:true,description:'Номер приглашения'})
    invitationNumber!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => StudentEntity, {nullable:false})
    student?: InstanceType<typeof StudentEntity>;
}

@ArgsType()
export class UpdateManyStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentVisaEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentVisaEntityUpdateManyMutationInput>;
    @Field(() => StudentVisaEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaEntityWhereInput)
    where?: InstanceType<typeof StudentVisaEntityWhereInput>;
}

@ArgsType()
export class UpdateOneStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityUpdateInput, {nullable:false})
    @Type(() => StudentVisaEntityUpdateInput)
    data!: InstanceType<typeof StudentVisaEntityUpdateInput>;
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStudentVisaEntityArgs {
    @Field(() => StudentVisaEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaEntityWhereUniqueInput>;
    @Field(() => StudentVisaEntityCreateInput, {nullable:false})
    @Type(() => StudentVisaEntityCreateInput)
    create!: InstanceType<typeof StudentVisaEntityCreateInput>;
    @Field(() => StudentVisaEntityUpdateInput, {nullable:false})
    @Type(() => StudentVisaEntityUpdateInput)
    update!: InstanceType<typeof StudentVisaEntityUpdateInput>;
}

@ObjectType()
export class AggregateStudentVisaRequestEntity {
    @Field(() => StudentVisaRequestEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentVisaRequestEntityCountAggregate>;
    @Field(() => StudentVisaRequestEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentVisaRequestEntityMinAggregate>;
    @Field(() => StudentVisaRequestEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentVisaRequestEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyStudentVisaRequestEntityArgs {
    @Field(() => [StudentVisaRequestEntityCreateManyInput], {nullable:false})
    @Type(() => StudentVisaRequestEntityCreateManyInput)
    data!: Array<StudentVisaRequestEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityCreateInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityCreateInput)
    data!: InstanceType<typeof StudentVisaRequestEntityCreateInput>;
}

@ArgsType()
export class DeleteManyStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereInput)
    where?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
}

@ArgsType()
export class DeleteOneStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStudentVisaRequestEntityOrThrowArgs {
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereInput)
    where?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
    @Field(() => [StudentVisaRequestEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaRequestEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentVisaRequestEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentVisaRequestEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereInput)
    where?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
    @Field(() => [StudentVisaRequestEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaRequestEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentVisaRequestEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentVisaRequestEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereInput)
    where?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
    @Field(() => [StudentVisaRequestEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaRequestEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StudentVisaRequestEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentVisaRequestEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStudentVisaRequestEntityOrThrowArgs {
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
}

@ArgsType()
export class StudentVisaRequestEntityAggregateArgs {
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereInput)
    where?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
    @Field(() => [StudentVisaRequestEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentVisaRequestEntityOrderByWithRelationInput>;
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentVisaRequestEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentVisaRequestEntityCountAggregateInput>;
    @Field(() => StudentVisaRequestEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentVisaRequestEntityMinAggregateInput>;
    @Field(() => StudentVisaRequestEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentVisaRequestEntityMaxAggregateInput>;
}

@InputType()
export class StudentVisaRequestEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    employeeComment?: true;
    @Field(() => Boolean, {nullable:true})
    registrationNumber?: true;
    @Field(() => Boolean, {nullable:true})
    category?: true;
    @Field(() => Boolean, {nullable:true})
    multiplicity?: true;
    @Field(() => Boolean, {nullable:true})
    reason?: true;
    @Field(() => Boolean, {nullable:true})
    addressOfMigrationRegistration?: true;
    @Field(() => Boolean, {nullable:true})
    estimatedRouteOfStay?: true;
    @Field(() => Boolean, {nullable:true})
    addressInCountryOfContinuousResidence?: true;
    @Field(() => Boolean, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: true;
    @Field(() => Boolean, {nullable:true})
    russianFederationRelatives?: true;
    @Field(() => Boolean, {nullable:true})
    attachedDocuments?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StudentVisaRequestEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    studentId!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    employeeComment!: number;
    @Field(() => Int, {nullable:false})
    registrationNumber!: number;
    @Field(() => Int, {nullable:false})
    category!: number;
    @Field(() => Int, {nullable:false})
    multiplicity!: number;
    @Field(() => Int, {nullable:false})
    reason!: number;
    @Field(() => Int, {nullable:false})
    addressOfMigrationRegistration!: number;
    @Field(() => Int, {nullable:false})
    estimatedRouteOfStay!: number;
    @Field(() => Int, {nullable:false})
    addressInCountryOfContinuousResidence!: number;
    @Field(() => Int, {nullable:false})
    placeOfWorkOrStudyAndEmploymentPosition!: number;
    @Field(() => Int, {nullable:false})
    russianFederationRelatives!: number;
    @Field(() => Int, {nullable:false})
    attachedDocuments!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StudentVisaRequestEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employeeComment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    registrationNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    multiplicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressOfMigrationRegistration?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    estimatedRouteOfStay?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressInCountryOfContinuousResidence?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    russianFederationRelatives?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    attachedDocuments?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentVisaRequestEntityCreateManyStudentInputEnvelope {
    @Field(() => [StudentVisaRequestEntityCreateManyStudentInput], {nullable:false})
    @Type(() => StudentVisaRequestEntityCreateManyStudentInput)
    data!: Array<StudentVisaRequestEntityCreateManyStudentInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class StudentVisaRequestEntityCreateManyStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaRequestEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaRequestEntityCreateNestedManyWithoutStudentInput {
    @Field(() => [StudentVisaRequestEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateWithoutStudentInput)
    create?: Array<StudentVisaRequestEntityCreateWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentVisaRequestEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentVisaRequestEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    connect?: Array<StudentVisaRequestEntityWhereUniqueInput>;
}

@InputType()
export class StudentVisaRequestEntityCreateOrConnectWithoutStudentInput {
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => StudentVisaRequestEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentVisaRequestEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentVisaRequestEntityCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaRequestEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student!: InstanceType<typeof StudentEntityCreateNestedOneWithoutVisaRequestsInput>;
}

@ArgsType()
export class StudentVisaRequestEntityGroupByArgs {
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereInput)
    where?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
    @Field(() => [StudentVisaRequestEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentVisaRequestEntityOrderByWithAggregationInput>;
    @Field(() => [StudentVisaRequestEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentVisaRequestEntityScalarFieldEnum>;
    @Field(() => StudentVisaRequestEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StudentVisaRequestEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StudentVisaRequestEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentVisaRequestEntityCountAggregateInput>;
    @Field(() => StudentVisaRequestEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentVisaRequestEntityMinAggregateInput>;
    @Field(() => StudentVisaRequestEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentVisaRequestEntityMaxAggregateInput>;
}

@ObjectType()
export class StudentVisaRequestEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => VisaRequestStatusEnum, {nullable:false})
    status!: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StudentVisaRequestEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StudentVisaRequestEntityCountAggregate>;
    @Field(() => StudentVisaRequestEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StudentVisaRequestEntityMinAggregate>;
    @Field(() => StudentVisaRequestEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StudentVisaRequestEntityMaxAggregate>;
}

@InputType()
export class StudentVisaRequestEntityListRelationFilter {
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    every?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    some?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    none?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
}

@InputType()
export class StudentVisaRequestEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    employeeComment?: true;
    @Field(() => Boolean, {nullable:true})
    registrationNumber?: true;
    @Field(() => Boolean, {nullable:true})
    category?: true;
    @Field(() => Boolean, {nullable:true})
    multiplicity?: true;
    @Field(() => Boolean, {nullable:true})
    reason?: true;
    @Field(() => Boolean, {nullable:true})
    addressOfMigrationRegistration?: true;
    @Field(() => Boolean, {nullable:true})
    estimatedRouteOfStay?: true;
    @Field(() => Boolean, {nullable:true})
    addressInCountryOfContinuousResidence?: true;
    @Field(() => Boolean, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: true;
    @Field(() => Boolean, {nullable:true})
    russianFederationRelatives?: true;
    @Field(() => Boolean, {nullable:true})
    attachedDocuments?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentVisaRequestEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaRequestEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employeeComment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    registrationNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    multiplicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressOfMigrationRegistration?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    estimatedRouteOfStay?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressInCountryOfContinuousResidence?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    russianFederationRelatives?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    attachedDocuments?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentVisaRequestEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    studentId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    employeeComment?: true;
    @Field(() => Boolean, {nullable:true})
    registrationNumber?: true;
    @Field(() => Boolean, {nullable:true})
    category?: true;
    @Field(() => Boolean, {nullable:true})
    multiplicity?: true;
    @Field(() => Boolean, {nullable:true})
    reason?: true;
    @Field(() => Boolean, {nullable:true})
    addressOfMigrationRegistration?: true;
    @Field(() => Boolean, {nullable:true})
    estimatedRouteOfStay?: true;
    @Field(() => Boolean, {nullable:true})
    addressInCountryOfContinuousResidence?: true;
    @Field(() => Boolean, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: true;
    @Field(() => Boolean, {nullable:true})
    russianFederationRelatives?: true;
    @Field(() => Boolean, {nullable:true})
    attachedDocuments?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class StudentVisaRequestEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    studentId?: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaRequestEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employeeComment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    registrationNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    multiplicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressOfMigrationRegistration?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    estimatedRouteOfStay?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressInCountryOfContinuousResidence?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    russianFederationRelatives?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    attachedDocuments?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class StudentVisaRequestEntityOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class StudentVisaRequestEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employeeComment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    registrationNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    multiplicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressOfMigrationRegistration?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    estimatedRouteOfStay?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressInCountryOfContinuousResidence?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    russianFederationRelatives?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    attachedDocuments?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => StudentVisaRequestEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StudentVisaRequestEntityCountOrderByAggregateInput>;
    @Field(() => StudentVisaRequestEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StudentVisaRequestEntityMaxOrderByAggregateInput>;
    @Field(() => StudentVisaRequestEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StudentVisaRequestEntityMinOrderByAggregateInput>;
}

@InputType()
export class StudentVisaRequestEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employeeComment?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    registrationNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    multiplicity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressOfMigrationRegistration?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    estimatedRouteOfStay?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    addressInCountryOfContinuousResidence?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    russianFederationRelatives?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    attachedDocuments?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    student?: InstanceType<typeof StudentEntityOrderByWithRelationInput>;
}

@InputType()
export class StudentVisaRequestEntityScalarWhereWithAggregatesInput {
    @Field(() => [StudentVisaRequestEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentVisaRequestEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentVisaRequestEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentVisaRequestEntityScalarWhereWithAggregatesInput>;
    @Field(() => [StudentVisaRequestEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentVisaRequestEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => EnumVisaRequestStatusEnumWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    employeeComment?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    registrationNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumVisaCategoryEnumWithAggregatesFilter, {nullable:true})
    category?: InstanceType<typeof EnumVisaCategoryEnumWithAggregatesFilter>;
    @Field(() => EnumVisaMultiplicityEnumWithAggregatesFilter, {nullable:true})
    multiplicity?: InstanceType<typeof EnumVisaMultiplicityEnumWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reason?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    attachedDocuments?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StudentVisaRequestEntityScalarWhereInput {
    @Field(() => [StudentVisaRequestEntityScalarWhereInput], {nullable:true})
    AND?: Array<StudentVisaRequestEntityScalarWhereInput>;
    @Field(() => [StudentVisaRequestEntityScalarWhereInput], {nullable:true})
    OR?: Array<StudentVisaRequestEntityScalarWhereInput>;
    @Field(() => [StudentVisaRequestEntityScalarWhereInput], {nullable:true})
    NOT?: Array<StudentVisaRequestEntityScalarWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => EnumVisaRequestStatusEnumFilter, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFilter>;
    @Field(() => StringFilter, {nullable:true})
    employeeComment?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    registrationNumber?: InstanceType<typeof StringFilter>;
    @Field(() => EnumVisaCategoryEnumFilter, {nullable:true})
    category?: InstanceType<typeof EnumVisaCategoryEnumFilter>;
    @Field(() => EnumVisaMultiplicityEnumFilter, {nullable:true})
    multiplicity?: InstanceType<typeof EnumVisaMultiplicityEnumFilter>;
    @Field(() => StringFilter, {nullable:true})
    reason?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    attachedDocuments?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class StudentVisaRequestEntityUncheckedCreateNestedManyWithoutStudentInput {
    @Field(() => [StudentVisaRequestEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateWithoutStudentInput)
    create?: Array<StudentVisaRequestEntityCreateWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentVisaRequestEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentVisaRequestEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    connect?: Array<StudentVisaRequestEntityWhereUniqueInput>;
}

@InputType()
export class StudentVisaRequestEntityUncheckedCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaRequestEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    @Field(() => VisaRequestStatusEnum, {nullable:true})
    status?: keyof typeof VisaRequestStatusEnum;
    @Field(() => String, {nullable:true})
    employeeComment?: string;
    @Field(() => String, {nullable:true})
    registrationNumber?: string;
    @Field(() => VisaCategoryEnum, {nullable:true})
    category?: keyof typeof VisaCategoryEnum;
    @Field(() => VisaMultiplicityEnum, {nullable:true})
    multiplicity?: keyof typeof VisaMultiplicityEnum;
    @Field(() => String, {nullable:true})
    reason?: string;
    @Field(() => String, {nullable:true})
    addressOfMigrationRegistration?: string;
    @Field(() => String, {nullable:true})
    estimatedRouteOfStay?: string;
    @Field(() => String, {nullable:true})
    addressInCountryOfContinuousResidence?: string;
    @Field(() => String, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: string;
    @Field(() => String, {nullable:true})
    russianFederationRelatives?: string;
    @Field(() => String, {nullable:true})
    attachedDocuments?: string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class StudentVisaRequestEntityUncheckedUpdateManyWithoutStudentNestedInput {
    @Field(() => [StudentVisaRequestEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateWithoutStudentInput)
    create?: Array<StudentVisaRequestEntityCreateWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentVisaRequestEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityUpsertWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityUpsertWithWhereUniqueWithoutStudentInput)
    upsert?: Array<StudentVisaRequestEntityUpsertWithWhereUniqueWithoutStudentInput>;
    @Field(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentVisaRequestEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    set?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    disconnect?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    delete?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    connect?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityUpdateWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityUpdateWithWhereUniqueWithoutStudentInput)
    update?: Array<StudentVisaRequestEntityUpdateWithWhereUniqueWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityUpdateManyWithWhereWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityUpdateManyWithWhereWithoutStudentInput)
    updateMany?: Array<StudentVisaRequestEntityUpdateManyWithWhereWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityScalarWhereInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityScalarWhereInput)
    deleteMany?: Array<StudentVisaRequestEntityScalarWhereInput>;
}

@InputType()
export class StudentVisaRequestEntityUncheckedUpdateManyWithoutVisaRequestsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumVisaRequestStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeComment?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    registrationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: InstanceType<typeof NullableEnumVisaCategoryEnumFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput, {nullable:true})
    multiplicity?: InstanceType<typeof NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    attachedDocuments?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaRequestEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumVisaRequestStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeComment?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    registrationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: InstanceType<typeof NullableEnumVisaCategoryEnumFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput, {nullable:true})
    multiplicity?: InstanceType<typeof NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    attachedDocuments?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaRequestEntityUncheckedUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumVisaRequestStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeComment?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    registrationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: InstanceType<typeof NullableEnumVisaCategoryEnumFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput, {nullable:true})
    multiplicity?: InstanceType<typeof NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    attachedDocuments?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaRequestEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    studentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumVisaRequestStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeComment?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    registrationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: InstanceType<typeof NullableEnumVisaCategoryEnumFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput, {nullable:true})
    multiplicity?: InstanceType<typeof NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    attachedDocuments?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaRequestEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumVisaRequestStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeComment?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    registrationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: InstanceType<typeof NullableEnumVisaCategoryEnumFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput, {nullable:true})
    multiplicity?: InstanceType<typeof NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    attachedDocuments?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaRequestEntityUpdateManyWithWhereWithoutStudentInput {
    @Field(() => StudentVisaRequestEntityScalarWhereInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityScalarWhereInput)
    where!: InstanceType<typeof StudentVisaRequestEntityScalarWhereInput>;
    @Field(() => StudentVisaRequestEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentVisaRequestEntityUpdateManyMutationInput>;
}

@InputType()
export class StudentVisaRequestEntityUpdateManyWithoutStudentNestedInput {
    @Field(() => [StudentVisaRequestEntityCreateWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateWithoutStudentInput)
    create?: Array<StudentVisaRequestEntityCreateWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityCreateOrConnectWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: Array<StudentVisaRequestEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityUpsertWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityUpsertWithWhereUniqueWithoutStudentInput)
    upsert?: Array<StudentVisaRequestEntityUpsertWithWhereUniqueWithoutStudentInput>;
    @Field(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope, {nullable:true})
    @Type(() => StudentVisaRequestEntityCreateManyStudentInputEnvelope)
    createMany?: InstanceType<typeof StudentVisaRequestEntityCreateManyStudentInputEnvelope>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    set?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    disconnect?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    delete?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityWhereUniqueInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    connect?: Array<StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => [StudentVisaRequestEntityUpdateWithWhereUniqueWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityUpdateWithWhereUniqueWithoutStudentInput)
    update?: Array<StudentVisaRequestEntityUpdateWithWhereUniqueWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityUpdateManyWithWhereWithoutStudentInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityUpdateManyWithWhereWithoutStudentInput)
    updateMany?: Array<StudentVisaRequestEntityUpdateManyWithWhereWithoutStudentInput>;
    @Field(() => [StudentVisaRequestEntityScalarWhereInput], {nullable:true})
    @Type(() => StudentVisaRequestEntityScalarWhereInput)
    deleteMany?: Array<StudentVisaRequestEntityScalarWhereInput>;
}

@InputType()
export class StudentVisaRequestEntityUpdateWithWhereUniqueWithoutStudentInput {
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => StudentVisaRequestEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityUpdateWithoutStudentInput)
    data!: InstanceType<typeof StudentVisaRequestEntityUpdateWithoutStudentInput>;
}

@InputType()
export class StudentVisaRequestEntityUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumVisaRequestStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeComment?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    registrationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: InstanceType<typeof NullableEnumVisaCategoryEnumFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput, {nullable:true})
    multiplicity?: InstanceType<typeof NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    attachedDocuments?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StudentVisaRequestEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumVisaRequestStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeComment?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    registrationNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: InstanceType<typeof NullableEnumVisaCategoryEnumFieldUpdateOperationsInput>;
    @Field(() => NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput, {nullable:true})
    multiplicity?: InstanceType<typeof NullableEnumVisaMultiplicityEnumFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    attachedDocuments?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneRequiredWithoutVisaRequestsNestedInput>;
}

@InputType()
export class StudentVisaRequestEntityUpsertWithWhereUniqueWithoutStudentInput {
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => StudentVisaRequestEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityUpdateWithoutStudentInput)
    update!: InstanceType<typeof StudentVisaRequestEntityUpdateWithoutStudentInput>;
    @Field(() => StudentVisaRequestEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof StudentVisaRequestEntityCreateWithoutStudentInput>;
}

@InputType()
export class StudentVisaRequestEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class StudentVisaRequestEntityWhereInput {
    @Field(() => [StudentVisaRequestEntityWhereInput], {nullable:true})
    AND?: Array<StudentVisaRequestEntityWhereInput>;
    @Field(() => [StudentVisaRequestEntityWhereInput], {nullable:true})
    OR?: Array<StudentVisaRequestEntityWhereInput>;
    @Field(() => [StudentVisaRequestEntityWhereInput], {nullable:true})
    NOT?: Array<StudentVisaRequestEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => UuidFilter, {nullable:true})
    studentId?: InstanceType<typeof UuidFilter>;
    @Field(() => EnumVisaRequestStatusEnumFilter, {nullable:true})
    status?: InstanceType<typeof EnumVisaRequestStatusEnumFilter>;
    @Field(() => StringFilter, {nullable:true})
    employeeComment?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    registrationNumber?: InstanceType<typeof StringFilter>;
    @Field(() => EnumVisaCategoryEnumFilter, {nullable:true})
    category?: InstanceType<typeof EnumVisaCategoryEnumFilter>;
    @Field(() => EnumVisaMultiplicityEnumFilter, {nullable:true})
    multiplicity?: InstanceType<typeof EnumVisaMultiplicityEnumFilter>;
    @Field(() => StringFilter, {nullable:true})
    reason?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    addressOfMigrationRegistration?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    estimatedRouteOfStay?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    addressInCountryOfContinuousResidence?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    placeOfWorkOrStudyAndEmploymentPosition?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    russianFederationRelatives?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    attachedDocuments?: InstanceType<typeof StringFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    student?: InstanceType<typeof StudentEntityRelationFilter>;
}

/**
 * Визовая анкета студента
 */
@ObjectType({description:'Визовая анкета студента'})
export class StudentVisaRequestEntity {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    studentId!: string;
    /**
     * Статус визовой анкеты
     */
    @Field(() => VisaRequestStatusEnum, {nullable:false,defaultValue:'Pending',description:'Статус визовой анкеты'})
    status!: keyof typeof VisaRequestStatusEnum;
    /**
     * Комментарий сотрудника
     */
    @Field(() => String, {nullable:true,description:'Комментарий сотрудника'})
    employeeComment!: string | null;
    /**
     * Регистрационный номер заполняемый только сотрудником
     */
    @Field(() => String, {nullable:true,description:'Регистрационный номер заполняемый только сотрудником'})
    registrationNumber!: string | null;
    /**
     * Категория визы
     */
    @Field(() => VisaCategoryEnum, {nullable:true,description:'Категория визы'})
    category!: keyof typeof VisaCategoryEnum | null;
    /**
     * Кратность визы
     */
    @Field(() => VisaMultiplicityEnum, {nullable:true,description:'Кратность визы'})
    multiplicity!: keyof typeof VisaMultiplicityEnum | null;
    /**
     * В связи с ...
     */
    @Field(() => String, {nullable:true,description:'В связи с ...'})
    reason!: string | null;
    /**
     * Адрес постановки на миграционный учет
     */
    @Field(() => String, {nullable:true,description:'Адрес постановки на миграционный учет'})
    addressOfMigrationRegistration!: string | null;
    /**
     * Маршрут предполагаемого пребывания
     */
    @Field(() => String, {nullable:true,description:'Маршрут предполагаемого пребывания'})
    estimatedRouteOfStay!: string | null;
    /**
     * Адрес в стране постоянного проживания
     */
    @Field(() => String, {nullable:true,description:'Адрес в стране постоянного проживания'})
    addressInCountryOfContinuousResidence!: string | null;
    /**
     * Место работы или учёбы, должность
     */
    @Field(() => String, {nullable:true,description:'Место работы или учёбы, должность'})
    placeOfWorkOrStudyAndEmploymentPosition!: string | null;
    /**
     * Родственники на территории РФ
     */
    @Field(() => String, {nullable:true,description:'Родственники на территории РФ'})
    russianFederationRelatives!: string | null;
    /**
     * Прилагаемые документы
     */
    @Field(() => String, {nullable:true,description:'Прилагаемые документы'})
    attachedDocuments!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => StudentEntity, {nullable:false})
    student?: InstanceType<typeof StudentEntity>;
}

@ArgsType()
export class UpdateManyStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityUpdateManyMutationInput)
    data!: InstanceType<typeof StudentVisaRequestEntityUpdateManyMutationInput>;
    @Field(() => StudentVisaRequestEntityWhereInput, {nullable:true})
    @Type(() => StudentVisaRequestEntityWhereInput)
    where?: InstanceType<typeof StudentVisaRequestEntityWhereInput>;
}

@ArgsType()
export class UpdateOneStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityUpdateInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityUpdateInput)
    data!: InstanceType<typeof StudentVisaRequestEntityUpdateInput>;
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStudentVisaRequestEntityArgs {
    @Field(() => StudentVisaRequestEntityWhereUniqueInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityWhereUniqueInput)
    where!: InstanceType<typeof StudentVisaRequestEntityWhereUniqueInput>;
    @Field(() => StudentVisaRequestEntityCreateInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityCreateInput)
    create!: InstanceType<typeof StudentVisaRequestEntityCreateInput>;
    @Field(() => StudentVisaRequestEntityUpdateInput, {nullable:false})
    @Type(() => StudentVisaRequestEntityUpdateInput)
    update!: InstanceType<typeof StudentVisaRequestEntityUpdateInput>;
}

@ObjectType()
export class AggregateUserEntity {
    @Field(() => UserEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserEntityCountAggregate>;
    @Field(() => UserEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserEntityMinAggregate>;
    @Field(() => UserEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserEntityMaxAggregate>;
}

@ArgsType()
export class CreateManyUserEntityArgs {
    @Field(() => [UserEntityCreateManyInput], {nullable:false})
    @Type(() => UserEntityCreateManyInput)
    data!: Array<UserEntityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserEntityArgs {
    @Field(() => UserEntityCreateInput, {nullable:false})
    @Type(() => UserEntityCreateInput)
    data!: InstanceType<typeof UserEntityCreateInput>;
}

@ArgsType()
export class DeleteManyUserEntityArgs {
    @Field(() => UserEntityWhereInput, {nullable:true})
    @Type(() => UserEntityWhereInput)
    where?: InstanceType<typeof UserEntityWhereInput>;
}

@ArgsType()
export class DeleteOneUserEntityArgs {
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserEntityOrThrowArgs {
    @Field(() => UserEntityWhereInput, {nullable:true})
    @Type(() => UserEntityWhereInput)
    where?: InstanceType<typeof UserEntityWhereInput>;
    @Field(() => [UserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserEntityOrderByWithRelationInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserEntityScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserEntityArgs {
    @Field(() => UserEntityWhereInput, {nullable:true})
    @Type(() => UserEntityWhereInput)
    where?: InstanceType<typeof UserEntityWhereInput>;
    @Field(() => [UserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserEntityOrderByWithRelationInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserEntityScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserEntityArgs {
    @Field(() => UserEntityWhereInput, {nullable:true})
    @Type(() => UserEntityWhereInput)
    where?: InstanceType<typeof UserEntityWhereInput>;
    @Field(() => [UserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserEntityOrderByWithRelationInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserEntityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserEntityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserEntityOrThrowArgs {
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserEntityArgs {
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserEntityArgs {
    @Field(() => UserEntityUpdateManyMutationInput, {nullable:false})
    @Type(() => UserEntityUpdateManyMutationInput)
    data!: InstanceType<typeof UserEntityUpdateManyMutationInput>;
    @Field(() => UserEntityWhereInput, {nullable:true})
    @Type(() => UserEntityWhereInput)
    where?: InstanceType<typeof UserEntityWhereInput>;
}

@ArgsType()
export class UpdateOneUserEntityArgs {
    @Field(() => UserEntityUpdateInput, {nullable:false})
    @Type(() => UserEntityUpdateInput)
    data!: InstanceType<typeof UserEntityUpdateInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserEntityArgs {
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => UserEntityCreateInput, {nullable:false})
    @Type(() => UserEntityCreateInput)
    create!: InstanceType<typeof UserEntityCreateInput>;
    @Field(() => UserEntityUpdateInput, {nullable:false})
    @Type(() => UserEntityUpdateInput)
    update!: InstanceType<typeof UserEntityUpdateInput>;
}

@ArgsType()
export class UserEntityAggregateArgs {
    @Field(() => UserEntityWhereInput, {nullable:true})
    @Type(() => UserEntityWhereInput)
    where?: InstanceType<typeof UserEntityWhereInput>;
    @Field(() => [UserEntityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserEntityOrderByWithRelationInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserEntityCountAggregateInput>;
    @Field(() => UserEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserEntityMinAggregateInput>;
    @Field(() => UserEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserEntityMaxAggregateInput>;
}

@InputType()
export class UserEntityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @HideField()
    tokenHash?: true;
    @HideField()
    lastActivity?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserEntityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @HideField()
    password!: number;
    @HideField()
    tokenHash!: number;
    @Field(() => Int, {nullable:false})
    lastActivity!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserEntityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @HideField()
    tokenHash?: keyof typeof SortOrder;
    @HideField()
    lastActivity?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserEntityCount {
    @Field(() => Int, {nullable:false})
    notifications?: number;
}

@InputType()
export class UserEntityCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
}

@InputType()
export class UserEntityCreateNestedOneWithoutEmployeeInput {
    @Field(() => UserEntityCreateWithoutEmployeeInput, {nullable:true})
    @Type(() => UserEntityCreateWithoutEmployeeInput)
    create?: InstanceType<typeof UserEntityCreateWithoutEmployeeInput>;
    @Field(() => UserEntityCreateOrConnectWithoutEmployeeInput, {nullable:true})
    @Type(() => UserEntityCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: InstanceType<typeof UserEntityCreateOrConnectWithoutEmployeeInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    @Type(() => UserEntityWhereUniqueInput)
    connect?: InstanceType<typeof UserEntityWhereUniqueInput>;
}

@InputType()
export class UserEntityCreateNestedOneWithoutNotificationsInput {
    @Field(() => UserEntityCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => UserEntityCreateWithoutNotificationsInput)
    create?: InstanceType<typeof UserEntityCreateWithoutNotificationsInput>;
    @Field(() => UserEntityCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => UserEntityCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: InstanceType<typeof UserEntityCreateOrConnectWithoutNotificationsInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    @Type(() => UserEntityWhereUniqueInput)
    connect?: InstanceType<typeof UserEntityWhereUniqueInput>;
}

@InputType()
export class UserEntityCreateNestedOneWithoutStudentInput {
    @Field(() => UserEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => UserEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof UserEntityCreateWithoutStudentInput>;
    @Field(() => UserEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => UserEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof UserEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    @Type(() => UserEntityWhereUniqueInput)
    connect?: InstanceType<typeof UserEntityWhereUniqueInput>;
}

@InputType()
export class UserEntityCreateOrConnectWithoutEmployeeInput {
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => UserEntityCreateWithoutEmployeeInput, {nullable:false})
    @Type(() => UserEntityCreateWithoutEmployeeInput)
    create!: InstanceType<typeof UserEntityCreateWithoutEmployeeInput>;
}

@InputType()
export class UserEntityCreateOrConnectWithoutNotificationsInput {
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => UserEntityCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => UserEntityCreateWithoutNotificationsInput)
    create!: InstanceType<typeof UserEntityCreateWithoutNotificationsInput>;
}

@InputType()
export class UserEntityCreateOrConnectWithoutStudentInput {
    @Field(() => UserEntityWhereUniqueInput, {nullable:false})
    @Type(() => UserEntityWhereUniqueInput)
    where!: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => UserEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => UserEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof UserEntityCreateWithoutStudentInput>;
}

@InputType()
export class UserEntityCreateWithoutEmployeeInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student?: InstanceType<typeof StudentEntityCreateNestedOneWithoutUserInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserEntityCreateWithoutNotificationsInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityCreateNestedOneWithoutUserInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UserEntityCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityCreateNestedOneWithoutUserInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserEntityCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityCreateNestedOneWithoutUserInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityCreateNestedOneWithoutUserInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserEntityGroupByArgs {
    @Field(() => UserEntityWhereInput, {nullable:true})
    @Type(() => UserEntityWhereInput)
    where?: InstanceType<typeof UserEntityWhereInput>;
    @Field(() => [UserEntityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserEntityOrderByWithAggregationInput>;
    @Field(() => [UserEntityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserEntityScalarFieldEnum>;
    @Field(() => UserEntityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserEntityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserEntityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserEntityCountAggregateInput>;
    @Field(() => UserEntityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserEntityMinAggregateInput>;
    @Field(() => UserEntityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserEntityMaxAggregateInput>;
}

@ObjectType()
export class UserEntityGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @HideField()
    password!: string;
    @HideField()
    tokenHash?: string;
    @Field(() => Date, {nullable:true})
    lastActivity?: Date | string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserEntityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserEntityCountAggregate>;
    @Field(() => UserEntityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserEntityMinAggregate>;
    @Field(() => UserEntityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserEntityMaxAggregate>;
}

@InputType()
export class UserEntityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @HideField()
    tokenHash?: true;
    @HideField()
    lastActivity?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class UserEntityMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @HideField()
    password?: string;
    @HideField()
    tokenHash?: string;
    @Field(() => Date, {nullable:true})
    lastActivity?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserEntityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @HideField()
    tokenHash?: keyof typeof SortOrder;
    @HideField()
    lastActivity?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserEntityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @HideField()
    tokenHash?: true;
    @HideField()
    lastActivity?: true;
    @HideField()
    createdAt?: true;
    @HideField()
    updatedAt?: true;
}

@ObjectType()
export class UserEntityMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @HideField()
    password?: string;
    @HideField()
    tokenHash?: string;
    @Field(() => Date, {nullable:true})
    lastActivity?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserEntityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @HideField()
    tokenHash?: keyof typeof SortOrder;
    @HideField()
    lastActivity?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserEntityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @HideField()
    tokenHash?: keyof typeof SortOrder;
    @HideField()
    lastActivity?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserEntityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserEntityCountOrderByAggregateInput>;
    @Field(() => UserEntityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserEntityMaxOrderByAggregateInput>;
    @Field(() => UserEntityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserEntityMinOrderByAggregateInput>;
}

@InputType()
export class UserEntityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @HideField()
    tokenHash?: keyof typeof SortOrder;
    @HideField()
    lastActivity?: keyof typeof SortOrder;
    @HideField()
    createdAt?: keyof typeof SortOrder;
    @HideField()
    updatedAt?: keyof typeof SortOrder;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityOrderByWithRelationInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityOrderByWithRelationInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityOrderByRelationAggregateInput>;
}

@InputType()
export class UserEntityRelationFilter {
    @Field(() => UserEntityWhereInput, {nullable:true})
    is?: InstanceType<typeof UserEntityWhereInput>;
    @Field(() => UserEntityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserEntityWhereInput>;
}

@InputType()
export class UserEntityScalarWhereWithAggregatesInput {
    @Field(() => [UserEntityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserEntityScalarWhereWithAggregatesInput>;
    @Field(() => [UserEntityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserEntityScalarWhereWithAggregatesInput>;
    @Field(() => [UserEntityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserEntityScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    tokenHash?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    lastActivity?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserEntityUncheckedCreateWithoutEmployeeInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    student?: InstanceType<typeof StudentEntityUncheckedCreateNestedOneWithoutUserInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserEntityUncheckedCreateWithoutNotificationsInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUncheckedCreateNestedOneWithoutUserInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUncheckedCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UserEntityUncheckedCreateWithoutStudentInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUncheckedCreateNestedOneWithoutUserInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserEntityUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @HideField()
    tokenHash?: string;
    @HideField()
    lastActivity?: Date | string;
    @HideField()
    createdAt?: Date | string;
    @HideField()
    updatedAt?: Date | string;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUncheckedCreateNestedOneWithoutUserInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUncheckedCreateNestedOneWithoutUserInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserEntityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserEntityUncheckedUpdateWithoutEmployeeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUncheckedUpdateOneWithoutUserNestedInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUncheckedUpdateWithoutNotificationsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUncheckedUpdateOneWithoutUserNestedInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUncheckedUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUncheckedUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUncheckedUpdateOneWithoutUserNestedInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUncheckedUpdateOneWithoutUserNestedInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUncheckedUpdateOneWithoutUserNestedInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserEntityUpdateOneRequiredWithoutEmployeeNestedInput {
    @Field(() => UserEntityCreateWithoutEmployeeInput, {nullable:true})
    @Type(() => UserEntityCreateWithoutEmployeeInput)
    create?: InstanceType<typeof UserEntityCreateWithoutEmployeeInput>;
    @Field(() => UserEntityCreateOrConnectWithoutEmployeeInput, {nullable:true})
    @Type(() => UserEntityCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: InstanceType<typeof UserEntityCreateOrConnectWithoutEmployeeInput>;
    @Field(() => UserEntityUpsertWithoutEmployeeInput, {nullable:true})
    @Type(() => UserEntityUpsertWithoutEmployeeInput)
    upsert?: InstanceType<typeof UserEntityUpsertWithoutEmployeeInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    @Type(() => UserEntityWhereUniqueInput)
    connect?: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => UserEntityUpdateWithoutEmployeeInput, {nullable:true})
    @Type(() => UserEntityUpdateWithoutEmployeeInput)
    update?: InstanceType<typeof UserEntityUpdateWithoutEmployeeInput>;
}

@InputType()
export class UserEntityUpdateOneRequiredWithoutNotificationsNestedInput {
    @Field(() => UserEntityCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => UserEntityCreateWithoutNotificationsInput)
    create?: InstanceType<typeof UserEntityCreateWithoutNotificationsInput>;
    @Field(() => UserEntityCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => UserEntityCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: InstanceType<typeof UserEntityCreateOrConnectWithoutNotificationsInput>;
    @Field(() => UserEntityUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => UserEntityUpsertWithoutNotificationsInput)
    upsert?: InstanceType<typeof UserEntityUpsertWithoutNotificationsInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    @Type(() => UserEntityWhereUniqueInput)
    connect?: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => UserEntityUpdateWithoutNotificationsInput, {nullable:true})
    @Type(() => UserEntityUpdateWithoutNotificationsInput)
    update?: InstanceType<typeof UserEntityUpdateWithoutNotificationsInput>;
}

@InputType()
export class UserEntityUpdateOneRequiredWithoutStudentNestedInput {
    @Field(() => UserEntityCreateWithoutStudentInput, {nullable:true})
    @Type(() => UserEntityCreateWithoutStudentInput)
    create?: InstanceType<typeof UserEntityCreateWithoutStudentInput>;
    @Field(() => UserEntityCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => UserEntityCreateOrConnectWithoutStudentInput)
    connectOrCreate?: InstanceType<typeof UserEntityCreateOrConnectWithoutStudentInput>;
    @Field(() => UserEntityUpsertWithoutStudentInput, {nullable:true})
    @Type(() => UserEntityUpsertWithoutStudentInput)
    upsert?: InstanceType<typeof UserEntityUpsertWithoutStudentInput>;
    @Field(() => UserEntityWhereUniqueInput, {nullable:true})
    @Type(() => UserEntityWhereUniqueInput)
    connect?: InstanceType<typeof UserEntityWhereUniqueInput>;
    @Field(() => UserEntityUpdateWithoutStudentInput, {nullable:true})
    @Type(() => UserEntityUpdateWithoutStudentInput)
    update?: InstanceType<typeof UserEntityUpdateWithoutStudentInput>;
}

@InputType()
export class UserEntityUpdateWithoutEmployeeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneWithoutUserNestedInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUpdateWithoutNotificationsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUpdateOneWithoutUserNestedInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUpdateWithoutStudentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUpdateOneWithoutUserNestedInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    tokenHash?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @HideField()
    lastActivity?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @HideField()
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityUpdateOneWithoutUserNestedInput>;
    @HideField()
    student?: InstanceType<typeof StudentEntityUpdateOneWithoutUserNestedInput>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserEntityUpsertWithoutEmployeeInput {
    @Field(() => UserEntityUpdateWithoutEmployeeInput, {nullable:false})
    @Type(() => UserEntityUpdateWithoutEmployeeInput)
    update!: InstanceType<typeof UserEntityUpdateWithoutEmployeeInput>;
    @Field(() => UserEntityCreateWithoutEmployeeInput, {nullable:false})
    @Type(() => UserEntityCreateWithoutEmployeeInput)
    create!: InstanceType<typeof UserEntityCreateWithoutEmployeeInput>;
}

@InputType()
export class UserEntityUpsertWithoutNotificationsInput {
    @Field(() => UserEntityUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => UserEntityUpdateWithoutNotificationsInput)
    update!: InstanceType<typeof UserEntityUpdateWithoutNotificationsInput>;
    @Field(() => UserEntityCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => UserEntityCreateWithoutNotificationsInput)
    create!: InstanceType<typeof UserEntityCreateWithoutNotificationsInput>;
}

@InputType()
export class UserEntityUpsertWithoutStudentInput {
    @Field(() => UserEntityUpdateWithoutStudentInput, {nullable:false})
    @Type(() => UserEntityUpdateWithoutStudentInput)
    update!: InstanceType<typeof UserEntityUpdateWithoutStudentInput>;
    @Field(() => UserEntityCreateWithoutStudentInput, {nullable:false})
    @Type(() => UserEntityCreateWithoutStudentInput)
    create!: InstanceType<typeof UserEntityCreateWithoutStudentInput>;
}

@InputType()
export class UserEntityWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
}

@InputType()
export class UserEntityWhereInput {
    @Field(() => [UserEntityWhereInput], {nullable:true})
    AND?: Array<UserEntityWhereInput>;
    @Field(() => [UserEntityWhereInput], {nullable:true})
    OR?: Array<UserEntityWhereInput>;
    @Field(() => [UserEntityWhereInput], {nullable:true})
    NOT?: Array<UserEntityWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @HideField()
    tokenHash?: InstanceType<typeof StringFilter>;
    @HideField()
    lastActivity?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @HideField()
    employee?: InstanceType<typeof EmployeeEntityRelationFilter>;
    @HideField()
    student?: InstanceType<typeof StudentEntityRelationFilter>;
    @HideField()
    notifications?: InstanceType<typeof NotificationToUserEntityListRelationFilter>;
}

/**
 * Пользователь
 */
@ObjectType({description:'Пользователь'})
export class UserEntity {
    /**
     * Идентификатор пользователя
     */
    @Field(() => Scalars.GraphQLUUID, {nullable:false,description:'Идентификатор пользователя'})
    id!: string;
    /**
     * Электронная почта (должна быть подтверждена)
     */
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false,description:'Электронная почта (должна быть подтверждена)'})
    email!: string;
    /**
     * Bcrypt хэш пароля
     */
    @HideField()
    password!: string;
    /**
     * Авторизован ли сейчас пользователь?
     */
    @HideField()
    tokenHash!: string | null;
    /**
     * Последняя активность
     */
    @Field(() => Date, {nullable:true,description:'Последняя активность'})
    lastActivity!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    /**
     * Если пользователь - сотрудник
     */
    @Field(() => EmployeeEntity, {nullable:true,description:'Если пользователь - сотрудник'})
    employee?: InstanceType<typeof EmployeeEntity> | null;
    /**
     * Если пользователь - студент
     */
    @Field(() => StudentEntity, {nullable:true,description:'Если пользователь - студент'})
    student?: InstanceType<typeof StudentEntity> | null;
    /**
     * Уведомления пользователя
     */
    @Field(() => [NotificationToUserEntity], {nullable:true,description:'Уведомления пользователя'})
    notifications?: Array<NotificationToUserEntity>;
    @Field(() => UserEntityCount, {nullable:false})
    _count?: InstanceType<typeof UserEntityCount>;
}
