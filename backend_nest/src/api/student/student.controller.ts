import {
  Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post,
} from '@nestjs/common';
import { _throw } from '@common';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/UserRoleEnum';
import { PrismaService } from '../../prisma/prisma.service';
import StudentCreateInput from './inputs/student-create.input';
import { StudentService } from './student.service';
import StudentUpdateInput from './inputs/student-update.input';

/**
 * Контроллер для работы со студентами.
 */
@Controller('student')
export class StudentController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly studentService: StudentService,
  ) {}

  /**
   * Получение списка студентов
   */
  @Get()
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async students() {
    return this.prisma.student.findMany({
      where: {
        deletedAt: { lt: new Date() },
      },
    });
  }

  /**
   * Создание/регистрация студента
   */
  @Post()
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async createStudent(@Body() input: StudentCreateInput) {
    return this.studentService.createStudent(input);
  }

  /**
   * Обновление студента
   */
  @Patch(':id')
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  async updateStudent(
    @Body() input: StudentUpdateInput,
    @Param('id') id: string,
  ) {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id } })
      .catch(_throw(new NotFoundException('Пользователь не найден')));
    return this.studentService.updateStudent(user, input);
  }

  /**
   * Удаление студента
   */
  // @Delete(':id')
  // @Roles(UserRoleEnum.Admin, UserRoleEnum.Employee)
  // async deleteStudent(@Param('id') id: string) {
  //   const user = await this.prisma.user.findUniqueOrThrow({ where: { id } })
  //     .catch(_throw(new NotFoundException('Пользователь не найден')));
  //   return this.prisma.$transaction(async (prisma) => [
  //     prisma.student.update({ where: { id: user.id }, data: { deletedAt: new Date() } }),
  //     prisma.user.update({ where: { id: user.id }, data: { deletedAt: new Date() } }),
  //     prisma.studentPassport.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
  //     prisma.studentVisa.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
  //     prisma.studentArrivalNotice.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
  //     prisma.studentMigrationCard.update({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
  //     prisma.studentVisaRequest.updateMany({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
  //     prisma.studentCloseRelative.updateMany({ where: { studentId: user.id }, data: { deletedAt: new Date() } }),
  //   ]);
  // }
}
