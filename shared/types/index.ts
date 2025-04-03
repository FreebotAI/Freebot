// User types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Service types
export enum ServiceType {
  PHONE_SUPPORT = 'PHONE_SUPPORT',
  CHAT_SUPPORT = 'CHAT_SUPPORT',
  EMAIL_SUPPORT = 'EMAIL_SUPPORT',
}

export enum ServiceStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ServicePriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export interface ServiceRequest {
  id: string;
  userId: string;
  type: ServiceType;
  status: ServiceStatus;
  priority: ServicePriority;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// Authentication types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

// Blockchain types
export interface Transaction {
  id: string;
  hash: string;
  amount: number;
  status: 'PENDING' | 'CONFIRMED' | 'FAILED';
  createdAt: Date;
} 