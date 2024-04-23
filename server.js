const express = require("express");
const mongoose = require("mongoose");

// create the express app
const app = express();

// middleware to handle JSON request
//very important
//need to read json body data
app.use(express.json());

// connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/netflix")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
const movieRouter = require("./routes/movie");
const showRouter = require("./routes/show");

app.use("/movies", movieRouter);
app.use("/shows", showRouter);

// Start the server
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
