import { Module } from '@nestjs/common';
import { OrderController } from './order/order.controller';
import { KafkaService } from './kafka/kafka.service';
import { OrderService } from './order/order.service';
// import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaConsumerService } from './kafka/kafka-consumer/kafka-consumer.service';
import { KafkaConsumerController } from './kafka/kafka-consumer/kafka-consumer.controller';

@Module({
  controllers: [OrderController, KafkaConsumerController],
  providers: [KafkaService, OrderService, KafkaConsumerService],
})
export class AppModule {}
