import kafka from "./client.js"; // Ensure this imports your Kafka instance correctly

const init = async () => {
  // Create a producer instance
  const producer = kafka.producer();

  try {
    console.log("Producer connecting...");
    // Connect the producer
    await producer.connect();
    console.log("Producer connected");

    // Send a message
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          // partition: 0, // Uncomment if you want to specify a partition
          key: "location-update",
          value: JSON.stringify({
            name: "jordan",
            loc: "Koteshwore",
          }),
        },
      ],
    });

    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error in producer operation:", error);
  } finally {
    // Ensure the producer is disconnected
    console.log("Disconnecting Producer...");
    await producer.disconnect();
    console.log("Producer disconnected");
  }
};

init();
