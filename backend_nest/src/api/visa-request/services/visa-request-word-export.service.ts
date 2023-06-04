/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable, NotFoundException } from '@nestjs/common';
import path from 'path';
import fs from 'fs/promises';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { throwCb } from '@common';
import { GenderEnum, VisaCategoryEnum, VisaMultiplicityEnum } from '@prisma-nestjs-graphql';
import { PartialDeep } from 'type-fest';
import { compact } from 'lodash';
import dayjs from 'dayjs';
import { Prisma } from '@prisma/client';
import { IVisaRequestWordFields } from '../interfaces/visa-request-word-fields.interface';
import { PrismaService } from '../../../prisma/prisma.service';
import { FileService } from '../../file/file.service';
import { FileEntityResponse } from '../../file/responses/file-entity.response';

@Injectable()
export class VisaRequestWordExportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileService: FileService,
  ) {}

  /**
   * Экспорт визовой анкеты в формате word.
   * @param visaRequestId Идентификатор визовой анкеты.
   * @param select Поля, запрошенные через GraphQL.
   * @returns Файл.
   * @throws {NotFoundException} Визовая анкета не найдена.
   */
  public async exportWordFile(visaRequestId: string, select?: Prisma.FileEntitySelect): Promise<PartialDeep<FileEntityResponse>> {
    const templatePath = path.resolve(__dirname, '..', 'templates', 'visa-request.docx');
    const content = await fs.readFile(templatePath, { encoding: 'binary' });
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip);
    doc.setData(await this.getFields(visaRequestId)).render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });

    const { firstName, lastName, patronymic } = await this.prisma.studentVisaRequestEntity
      .findUniqueOrThrow({ where: { id: visaRequestId } })
      .student()
      .passport({ select: { lastName: true, firstName: true, patronymic: true } })
      .catch(throwCb(new NotFoundException('Визовая анкета не найдена')));

    return this.fileService.fileCreate({
      fileName: `Визовая анкета студента ${compact([lastName, firstName, patronymic]).join(' ')}.docx`,
      buffer,
      select,
    });
  }

  private async getFields(visaRequestId: string): Promise<IVisaRequestWordFields> {
    const {
      student: {
        passport,
        visa,
        // migrationCard,
        // closeRelatives,
        arrivalNotice,
      },
      ...visaRequest
    } = await this.prisma.studentVisaRequestEntity.findUniqueOrThrow({
      where: { id: visaRequestId },
      include: {
        student: {
          select: {
            // user: true,
            passport: true,
            visa: true,
            arrivalNotice: true,
            // migrationCard: true,
            // closeRelatives: true,
          },
        },
      },
    }).catch(throwCb(new NotFoundException('Визовая анкета не найдена')));

    /** ✓ ✔ ☑ ☐ ☒ * */
    return {
      /** ******** VisaRequest ********* */
      visaRequestReason: visaRequest.reason || '',
      visaRequestRegistrationNumber: visaRequest.registrationNumber || '',
      visaRequestAddressOfMigrationRegistration: visaRequest.addressOfMigrationRegistration || '',
      visaRequestEstimatedRouteOfStay: visaRequest.estimatedRouteOfStay || '',
      visaRequestAddressInCountryOfContinuousResidence: visaRequest.addressInCountryOfContinuousResidence || '',
      visaRequestPlaceOfWorkOrStudyAndEmploymentPosition: visaRequest.placeOfWorkOrStudyAndEmploymentPosition || '',
      visaRequestRussianFederationRelatives: visaRequest.russianFederationRelatives || '',
      visaRequestAttachedDocuments: visaRequest.attachedDocuments || '',
      /* multiplicity */
      vMES: visaRequest.multiplicity === VisaMultiplicityEnum.Single ? '✓' : '',
      vMED: visaRequest.multiplicity === VisaMultiplicityEnum.Double ? '✓' : '',
      vMEM: visaRequest.multiplicity === VisaMultiplicityEnum.Multiple ? '✓' : '',
      /* category */
      // @ts-ignore
      vCER: visaRequest.category && [VisaCategoryEnum.Transit, VisaCategoryEnum.TemporaryResident].includes(visaRequest.category) ? '✓' : '',
      vCERP: visaRequest.category === VisaCategoryEnum.RegularPrivate ? '✓' : '',
      vCERH: visaRequest.category === VisaCategoryEnum.RegularHumanitarian ? '✓' : '',
      vCERB: visaRequest.category === VisaCategoryEnum.RegularBusiness ? '✓' : '',
      vCERW: visaRequest.category === VisaCategoryEnum.RegularWorking ? '✓' : '',
      vCERT: visaRequest.category === VisaCategoryEnum.RegularTourist ? '✓' : '',
      vCERGT: visaRequest.category === VisaCategoryEnum.RegularGroupTravel ? '✓' : '',
      vCERS: visaRequest.category === VisaCategoryEnum.RegularStudy ? '✓' : '',
      vCERNE: visaRequest.category === VisaCategoryEnum.RegularNationalEntry ? '✓' : '',
      vCETr: visaRequest.category === VisaCategoryEnum.Transit ? '✓' : '',
      vCETeR: visaRequest.category === VisaCategoryEnum.TemporaryResident ? '✓' : '',
      /** ******** Passport ********* */
      passportLastName: passport?.lastName || '',
      passportFirstName: passport?.firstName || '',
      passportPatronymic: passport?.patronymic || '',
      passportBirthDate: passport?.birthDate ? dayjs(passport?.birthDate).format('DD/MM/YYYY') : '',
      passportBirthPlace: passport?.birthPlace || '',
      genderEnumMale: passport?.gender === GenderEnum.Male ? '✓' : '',
      genderEnumFemale: passport?.gender === GenderEnum.Female ? '✓' : '',
      passportCitizenship: passport?.citizenship || '',
      passportSeries: passport?.series || '',
      passportNumber: passport?.number || '',
      passportIssueDate: passport?.issueDate ? dayjs(passport?.issueDate).format('DD/MM/YYYY') : '',
      // issuedBy,
      passportExpirationDate: passport?.expirationDate ? dayjs(passport?.expirationDate).format('DD/MM/YYYY') : '',
      /** ******** Visa ********* */
      visaId: visa?.id || '',
      visaBlankSeries: visa?.blankSeries || '',
      visaNumber: visa?.number || '',
      visaIssueDate: visa?.issueDate ? dayjs(visa?.issueDate).format('DD/MM/YYYY') : '',
      visaExpirationDate: visa?.expirationDate ? dayjs(visa?.expirationDate).format('DD/MM/YYYY') : '',
      visaInvitationNumber: visa?.invitationNumber || '',
      /** ******** ArrivalNotice ********* */
      arrivalNoticeInvitingSide: arrivalNotice?.invitingSide || '',
      arrivalNoticeReceivingSide: arrivalNotice?.receivingSide || '',
    };
  }
}
