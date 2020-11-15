const express = require('express');
const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology',true);
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGOURI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully!");
});


//ROUTES
const HomePageRouter = require("./routes/api/index");
app.use('/', HomePageRouter);

app.listen(port, () => {
  console.log("Server is running on port:" + port);
});

module.exports = app;
