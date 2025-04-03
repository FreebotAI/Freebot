import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceRequest, ServiceRequestStatus } from '../../entities/ServiceRequest';
import { User } from '../../entities/User';
import { Logger } from '../logger/Logger';

interface CreateServiceRequestDto {
  serviceType: string;
  description: string;
  priority: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  userId: string;
}

interface UpdateServiceRequestDto {
  status?: ServiceRequestStatus;
  assignedTo?: string;
  resolution?: string;
}

@Injectable()
export class ServiceRequestService {
  constructor(
    @InjectRepository(ServiceRequest)
    private serviceRequestRepository: Repository<ServiceRequest>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private logger: Logger
  ) {}

  async create(dto: CreateServiceRequestDto): Promise<ServiceRequest> {
    try {
      const user = await this.userRepository.findOne({ where: { id: dto.userId } });
      if (!user) {
        throw new Error('User not found');
      }

      const serviceRequest = this.serviceRequestRepository.create({
        ...dto,
        user,
        status: ServiceRequestStatus.PENDING,
      });

      await this.serviceRequestRepository.save(serviceRequest);
      this.logger.info('Service request created', { id: serviceRequest.id });
      return serviceRequest;
    } catch (error) {
      this.logger.error('Failed to create service request', { error, dto });
      throw error;
    }
  }

  async findAll(userId?: string): Promise<ServiceRequest[]> {
    try {
      const query = this.serviceRequestRepository.createQueryBuilder('serviceRequest');
      
      if (userId) {
        query.where('serviceRequest.user.id = :userId', { userId });
      }

      query.orderBy('serviceRequest.createdAt', 'DESC');
      return await query.getMany();
    } catch (error) {
      this.logger.error('Failed to fetch service requests', { error, userId });
      throw error;
    }
  }

  async findOne(id: string): Promise<ServiceRequest> {
    try {
      const serviceRequest = await this.serviceRequestRepository.findOne({ where: { id } });
      if (!serviceRequest) {
        throw new Error('Service request not found');
      }
      return serviceRequest;
    } catch (error) {
      this.logger.error('Failed to fetch service request', { error, id });
      throw error;
    }
  }

  async update(id: string, dto: UpdateServiceRequestDto): Promise<ServiceRequest> {
    try {
      const serviceRequest = await this.findOne(id);
      Object.assign(serviceRequest, dto);
      await this.serviceRequestRepository.save(serviceRequest);
      this.logger.info('Service request updated', { id, updates: dto });
      return serviceRequest;
    } catch (error) {
      this.logger.error('Failed to update service request', { error, id, dto });
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const serviceRequest = await this.findOne(id);
      await this.serviceRequestRepository.remove(serviceRequest);
      this.logger.info('Service request deleted', { id });
    } catch (error) {
      this.logger.error('Failed to delete service request', { error, id });
      throw error;
    }
  }
} 