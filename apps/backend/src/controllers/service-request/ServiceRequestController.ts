import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ServiceRequestService } from '../../services/service-request/ServiceRequestService';
import { JwtAuthGuard } from '../../guards/JwtAuthGuard';
import { ServiceRequest } from '../../entities/ServiceRequest';

interface CreateServiceRequestDto {
  serviceType: string;
  description: string;
  priority: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

interface UpdateServiceRequestDto {
  status?: string;
  assignedTo?: string;
  resolution?: string;
}

@Controller('service-requests')
@UseGuards(JwtAuthGuard)
export class ServiceRequestController {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}

  @Post()
  async create(@Request() req, @Body() dto: CreateServiceRequestDto): Promise<ServiceRequest> {
    return this.serviceRequestService.create({
      ...dto,
      userId: req.user.id,
    });
  }

  @Get()
  async findAll(@Request() req): Promise<ServiceRequest[]> {
    return this.serviceRequestService.findAll(req.user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ServiceRequest> {
    return this.serviceRequestService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateServiceRequestDto
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.serviceRequestService.delete(id);
  }
} 