const router = require("express").Router();
const Contact = require("../models/contact"); // Make sure this is the correct path

// POST route to handle new contact submission
router.post("/post", async (req, res) => {
  try {
    // Destructure the request body
    const { name, phone, email, message } = req.body;

    // Create a new Contact document
    const newContact = new Contact({ name, phone, email, message });

    // Save the contact document to the database
    await newContact.save();
    res.status(200).json({ message: "Data Saved" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ message: "Data not saved", error: error.message });
  }
});

module.exports = router;
