import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaConsumerController {
  @MessagePattern('order.created')
  handleOrderCreated(@Payload() message: any) {
    console.log('......................');
    console.log('......................');
    console.log('......................');
    console.log('Order received:', message);
    console.log('......................');
    console.log('......................');
    console.log('......................');
  }
}
