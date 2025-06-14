# 📦 kafka-integration

A simple end-to-end Kafka messaging demo using **NestJS**, **KafkaJS**, and **Docker**.  
This project includes a Kafka **producer** (via HTTP `POST /order`) and a Kafka **consumer** that listens to `order.created` events.

---

## 🚀 Features

- ✅ Kafka producer using `kafkajs` in NestJS
- ✅ Kafka consumer using `@MessagePattern`
- ✅ Dockerized Kafka + Zookeeper (via Confluent stack)
- ✅ Fully tested with `curl`
- ✅ Clean code structure for future extraction as an npm package

---

## 🧰 Tech Stack

- NestJS (TypeScript)
- KafkaJS
- Docker & Docker Compose (Kafka & Zookeeper)
- Kafka Topic: `order.created`

---

## 📂 Project Structure

```
src/
├── order/
│   └── order.controller.ts             # Sends order.created events via Kafka
├── kafka/
│   ├── kafka.service.ts                # Kafka producer using kafkajs
│   └── kafka-consumer.controller.ts    # Kafka consumer using @MessagePattern
├── app.module.ts                       # Main app module wiring everything together
├── main.ts                             # Entry point, bootstraps microservice + HTTP
docker-compose.yml                      # Kafka and Zookeeper setup using Confluent images
README.md                               # Project documentation
```

---

## 🐳 Run Kafka with Docker

```bash
docker compose up -d
```

> ✅ Ensure both `zookeeper` and `kafka` containers are running:

```bash
docker ps
```

---

## 📦 Install & Start NestJS App

```bash
npm install
npm run start:dev
```

---

## 🧪 Test with Curl

```bash
curl -X POST http://localhost:3000/order \
  -H "Content-Type: application/json" \
  -d '{"orderId": "abc123", "item": "Laptop", "qty": 1}'
```

---

## 📥 Expected Output

```bash
✅ Order received: { orderId: 'abc123', item: 'Laptop', qty: 1 }
```

---

## 🛠️ Troubleshooting

| Problem                                 | Fix                                                            |
| --------------------------------------- | -------------------------------------------------------------- |
| `ECONNREFUSED` on `localhost:9092`      | Ensure Kafka is running via Docker                             |
| Consumer doesn’t log anything           | Ensure `@MessagePattern` is in a **controller**, not a service |
| `Cannot read property 'toString'` error | Kafka message is already parsed — use the payload directly     |

---

## 📌 Next Goals

- [ ] Convert `KafkaService` and `KafkaModule` into a reusable npm package
- [ ] Add support for custom broker configs
- [ ] Add retry & logging middleware for consumers

---

## 🧑‍💻 Author

[Yogaraj Saravanan](https://github.com/YOUR_GITHUB_USERNAME)

> Feel free to fork, contribute, or suggest improvements!

---

## 🧠 Pro Tip

If you're building a microservice architecture with Kafka, this is a great base to reuse by extracting the Kafka layer into a shared npm package.
