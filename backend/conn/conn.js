const mongoose = require("mongoose");

const conn = async () => {
    try {
        // URL encode special characters in the password if necessary
        const uri = "mongodb+srv://abhinandanpothuganti:abhi1234@cluster0.i9sbv.mongodb.net/contact"; // Make sure the database name is included

        // Establish connection to MongoDB Atlas
        await mongoose.connect(uri);

        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

conn();
