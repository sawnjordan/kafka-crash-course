import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["192.168.1.122:9092"],
  clientId: "my-app",
});

export default kafka;
