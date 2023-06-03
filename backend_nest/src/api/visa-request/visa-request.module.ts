import { Module } from '@nestjs/common';
import { VisaRequestResolver } from './visa-request.resolver';

@Module({
  providers: [VisaRequestResolver],
})
export class VisaRequestModule {}
