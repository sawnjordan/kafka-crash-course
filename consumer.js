import kafka from "./client.js";

const init = async () => {
  const consumer = kafka.consumer({ groupId: "user-1" });

  try {
    console.log("Connecting consumer...");
    await consumer.connect();
    console.log("Consumer connected");

    await consumer.subscribe({
      topics: ["rider-updates"],
      fromBeginning: true,
    });

    console.log("Subscribed to topics");

    await consumer.run({
      eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log({
          key: message.key.toString(),
          value: message.value.toString(),
          headers: message.headers,
          topic,
          partition,
        });
      },
    });
  } catch (error) {
    console.error("Error in consumer operation:", error);
  }

  // Optionally disconnect if you have a condition or a signal to stop
  // console.log("Consumer disconnecting...");
  // await consumer.disconnect();
};

init().catch(console.error);
