import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { Logger } from '../services/logger/Logger';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private logger: Logger
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    try {
      const user = await this.userRepository.findOne({ where: { id: payload.sub } });
      if (!user) {
        this.logger.error('User not found during JWT validation', { userId: payload.sub });
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      this.logger.error('JWT validation failed', { error, payload });
      throw error;
    }
  }
} 