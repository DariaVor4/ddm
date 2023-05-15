import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ifDebug, isRoleStudent } from '@common';
import { PrismaService } from '../../prisma/prisma.service';
import { ISessionContext } from '../auth/decorators/current-session.decorator';

@Injectable()
export class StudentDocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async assertPermissions(studentId: string, session: ISessionContext) {
    if (isRoleStudent(session.roles) && studentId !== session.userId) {
      throw new ForbiddenException(ifDebug('Только сотрудники имеют доступ к документам других студентов'));
    }
    // if (!isRoleStudent(session.roles) && studentId === session.userId) {
    //   throw new BadRequestException('Тип аккаунта не позволяет получить доступ к документу студента без studentId');
    // }
    if (await this.prisma.studentEntity.count({ where: { id: studentId } }) === 0) {
      throw new NotFoundException('Студент не найден');
    }
  }
}
