import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRequest } from '../../entities/ServiceRequest';
import { User } from '../../entities/User';
import { ServiceRequestController } from '../../controllers/service-request/ServiceRequestController';
import { ServiceRequestService } from '../../services/service-request/ServiceRequestService';
import { Logger } from '../../services/logger/Logger';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceRequest, User]),
  ],
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService, Logger],
  exports: [ServiceRequestService],
})
export class ServiceRequestModule {} 