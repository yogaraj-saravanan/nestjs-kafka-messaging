import { Controller, Post, Body } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service';

@Controller('order')
export class OrderController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Post()
  async createOrder(@Body() body: any) {
    // Simulate an order
    await this.kafkaService.emitOrderCreatedEvent(body);
    return { message: 'Order event sent' };
  }
}
