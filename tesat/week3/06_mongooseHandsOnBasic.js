// mongoosProject.js
const mongoose = require("mongoose");
const { mongoDBLink } = require("./00_constants");

// Connect to MongoDB
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error.message);
});

// Use the 'once' event to check if the connection is open
db.once("open", () => {
  console.log("Connected to MongoDB successfully");

  // Additional code to be executed after successful connection
});
  
// Use the 'once' event to check if the connection is disconnected
db.once("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// Use the 'on' event to check for reconnection attempts
db.on("reconnected", () => {
  console.log("Reconnected to MongoDB");
});

// Use the 'on' event to check for connection errors during reconnect attempts
db.on("reconnectFailed", () => {
  console.error("MongoDB reconnection failed");
});

// Connect to MongoDB using the connection string
mongoose.connect(mongoDBLink, { useNewUrlParser: true, useUnifiedTopology: true });
