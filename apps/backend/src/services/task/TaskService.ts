import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../entities/Task';
import { VoiceService } from '../voice/VoiceService';
import { IntentService } from '../ai/IntentService';
import { Logger } from '../logger/Logger';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private voiceService: VoiceService,
    private intentService: IntentService,
    private logger: Logger
  ) {}

  async createTask(userId: string, description: string) {
    try {
      // 分析用户意图
      const intent = await this.intentService.analyzeIntent(description);
      
      // 创建任务记录
      const task = this.taskRepository.create({
        userId,
        description,
        intent: intent.intent,
        status: 'pending',
        urgency: intent.urgency,
      });

      await this.taskRepository.save(task);
      
      // 启动自动化处理
      this.processTask(task);
      
      return task;
    } catch (error) {
      this.logger.error('Failed to create task', { error, userId, description });
      throw error;
    }
  }

  private async processTask(task: Task) {
    try {
      // 更新任务状态
      task.status = 'processing';
      await this.taskRepository.save(task);

      // 根据意图执行相应的自动化操作
      switch (task.intent) {
        case 'PHONE_CALL':
          await this.handlePhoneCall(task);
          break;
        case 'EMAIL':
          await this.handleEmail(task);
          break;
        case 'CHAT':
          await this.handleChat(task);
          break;
        default:
          throw new Error(`Unsupported intent: ${task.intent}`);
      }
    } catch (error) {
      this.logger.error('Failed to process task', { error, taskId: task.id });
      task.status = 'failed';
      task.error = error.message;
      await this.taskRepository.save(task);
    }
  }

  private async handlePhoneCall(task: Task) {
    // 实现电话自动化处理逻辑
    const callbackUrl = `${process.env.API_URL}/voice/webhook/${task.id}`;
    await this.voiceService.makeCall(task.phoneNumber, callbackUrl);
  }

  private async handleEmail(task: Task) {
    // TODO: 实现邮件自动化处理逻辑
  }

  private async handleChat(task: Task) {
    // TODO: 实现聊天自动化处理逻辑
  }

  async getTaskStatus(taskId: string) {
    return this.taskRepository.findOne({ where: { id: taskId } });
  }

  async updateTaskStatus(taskId: string, status: string, result?: any) {
    const task = await this.taskRepository.findOne({ where: { id: taskId } });
    if (!task) {
      throw new Error('Task not found');
    }

    task.status = status;
    task.result = result;
    task.completedAt = new Date();
    
    return this.taskRepository.save(task);
  }
} 