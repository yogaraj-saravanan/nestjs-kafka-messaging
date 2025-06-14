import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit {
  private kafka = new Kafka({ brokers: ['localhost:9092'] });
  private producer: Producer = this.kafka.producer();

  async onModuleInit() {
    await this.producer.connect();
  }

  async emitOrderCreatedEvent(order: any) {
    console.log('emit order created event', order);
    await this.producer.send({
      topic: 'order.created',
      messages: [{ key: 'order', value: JSON.stringify(order) }],
    });
  }
}
