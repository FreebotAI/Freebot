import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../services/auth/AuthService';
import { Logger } from '../../services/logger/Logger';

interface LoginDto {
  email: string;
  password: string;
}

interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logger: Logger
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.authService.validateUser(loginDto.email, loginDto.password);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return this.authService.login(user);
    } catch (error) {
      this.logger.error('Login failed', { error, email: loginDto.email });
      throw error;
    }
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const user = await this.authService.register(registerDto);
      return this.authService.login(user);
    } catch (error) {
      this.logger.error('Registration failed', { error, email: registerDto.email });
      throw error;
    }
  }
} 