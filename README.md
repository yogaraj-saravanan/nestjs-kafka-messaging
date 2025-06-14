# 📦 kafka-integration

A simple end-to-end Kafka messaging demo using **NestJS**, **KafkaJS**, and **Docker**.  
This project includes a Kafka **producer** (via HTTP `POST /order`) and a Kafka **consumer** that listens to `order.created` events.

---

## 🚀 Features

- ✅ Kafka producer using `kafkajs` in NestJS
- ✅ Kafka consumer using `@MessagePattern`
- ✅ Dockerized Kafka + Zookeeper (via Confluent stack)
- ✅ Fully tested with `curl`
- ✅ Clean code structure for future extraction as npm package

---

## 🧰 Tech Stack

- NestJS (TypeScript)
- KafkaJS
- Docker & Docker Compose (Kafka & Zookeeper)
- Kafka Topics: `order.created`

---

## 📂 Project Structure

src/
├── order/
│ └── order.controller.ts # Sends order.created events
├── kafka/
│ ├── kafka.service.ts # Kafka producer logic
│ └── kafka-consumer.controller.ts # Kafka consumer using @MessagePattern
├── main.ts
docker-compose.yml # Kafka + Zookeeper setup

---

## 🐳 Run Kafka with Docker

```bash
docker compose up -d

✅ Ensure both zookeeper and kafka containers are running:

docker ps

📦 Install & Start NestJS App

npm install
npm run start:dev

🧪 Test with Curl

curl -X POST http://localhost:3000/order \
  -H "Content-Type: application/json" \
  -d '{"orderId": "abc123", "item": "Laptop", "qty": 1}'
```

📥 Expected Output

✅ Order received: { orderId: 'abc123', item: 'Laptop', qty: 1 }

📌 Next Goals
Convert KafkaService and KafkaModule into a reusable npm package

Add support for custom broker configs

Add retry & logging middleware for consumers

🧑‍💻 Author
Yogaraj Saravanan

Feel free to fork, contribute, or suggest improvements!
