import { Module } from '@nestjs/common';
import { StudentMigrationCardResolver } from './student-migration-card.resolver';
import { StudentModule } from '../student/student.module';

@Module({
  providers: [StudentMigrationCardResolver],
  imports: [StudentModule],
})
export class StudentMigrationCardModule {}
