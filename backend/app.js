const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoute = require("./routes/contact");

const app = express();

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Check if already connected
    if (mongoose.connection.readyState === 0) {
      const uri = "mongodb+srv://abhinandanpothuganti:abhi1234@cluster0.i9sbv.mongodb.net/contact";
      await mongoose.connect(uri);
      console.log("Connected to MongoDB successfully.");
    }
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

// Call the connection function
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1", contactRoute);

app.listen(1000, () => {
  console.log("Server Started at port 1000");
});
