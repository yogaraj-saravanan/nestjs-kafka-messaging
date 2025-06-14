import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { KafkaConsumerService } from './kafka-consumer/kafka-consumer.service';
import { KafkaConsumerController } from './kafka-consumer/kafka-consumer.controller';

@Module({
  providers: [KafkaService, KafkaConsumerService],
  controllers: [KafkaConsumerController],
})
export class KafkaModule {}
