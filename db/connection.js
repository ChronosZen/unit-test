const mongoose = require("mongoose");

let mongoDB =
  "mongodb+srv://krisana9852:juUkumkGgpAub2B5@cluster0.vnwjv4i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
