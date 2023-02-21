const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/usuarios",
  { useNewUrlParser: true }
);

mongoose.connection.on("connection", (e) => {
  console.log("Database connected successfully!");
});

mongoose.connection.on("error", (e) => {
  console.error(e);
});

module.exports = mongoose;
