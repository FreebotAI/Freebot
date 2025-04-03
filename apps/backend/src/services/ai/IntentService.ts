import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { ConfigService } from '@nestjs/config';
import { Logger } from '../logger/Logger';

@Injectable()
export class IntentService {
  private openai: OpenAI;
  private logger: Logger;

  constructor(
    private configService: ConfigService,
    logger: Logger
  ) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
    this.logger = logger;
  }

  async analyzeIntent(input: string) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an AI assistant analyzing customer service requests. Identify the main intent, entities, and urgency level."
          },
          {
            role: "user",
            content: input
          }
        ],
        temperature: 0.3,
      });

      const analysis = response.choices[0].message.content;
      this.logger.info('Intent analysis completed', { input, analysis });
      
      return this.parseAnalysis(analysis);
    } catch (error) {
      this.logger.error('Failed to analyze intent', { error, input });
      throw error;
    }
  }

  async generateResponse(intent: string, context: any) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a helpful customer service AI assistant. Generate appropriate responses based on the identified intent."
          },
          {
            role: "user",
            content: JSON.stringify({ intent, context })
          }
        ],
        temperature: 0.7,
      });

      return response.choices[0].message.content;
    } catch (error) {
      this.logger.error('Failed to generate response', { error, intent });
      throw error;
    }
  }

  private parseAnalysis(analysis: string) {
    try {
      // 解析 GPT-4 返回的分析结果
      // TODO: 实现更复杂的解析逻辑
      return {
        intent: analysis,
        confidence: 0.9,
        entities: [],
        urgency: 'medium'
      };
    } catch (error) {
      this.logger.error('Failed to parse analysis', { error, analysis });
      throw error;
    }
  }
} 