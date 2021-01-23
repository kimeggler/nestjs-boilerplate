import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
  exports: [],
})
export class DomainModule {}