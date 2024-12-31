const mongoose = require("mongoose");

// Define contact schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes any surrounding whitespace
  },

  phone: {
    type: String,  // Changed to String to handle leading zeros and large numbers
    required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits'], // Validation for 10 digits phone number
  },

  email: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Please enter a valid email address'], // Email validation regex
  },

  message: {
    type: String,
    required: true,
    minlength: [5, 'Message must be at least 5 characters long'], // Ensure message is not too short
  },
});

// Export the model
module.exports = mongoose.model("Contact", contactSchema);
