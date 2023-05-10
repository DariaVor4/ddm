import { Module } from '@nestjs/common';
import { StudentMigrationCardResolver } from './student-migration-card.resolver';

@Module({
  providers: [StudentMigrationCardResolver]
})
export class StudentMigrationCardModule {}
