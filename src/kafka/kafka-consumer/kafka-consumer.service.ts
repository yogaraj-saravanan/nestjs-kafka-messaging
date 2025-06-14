import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService {
  @MessagePattern('order.created')
  handleOrderCreated(@Payload() message: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    console.log('Order received:', message.value.toString());
  }
}
