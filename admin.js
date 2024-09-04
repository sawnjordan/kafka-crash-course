import kafka from "./client.js";

const init = async () => {
  const admin = kafka.admin();
  console.log("Admin Connecting...");
  await admin.connect();
  console.log("Admin Connected");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created success [rider-updated]");

  console.log("Disconnecting admin");
  await admin.disconnect();
};
init();
