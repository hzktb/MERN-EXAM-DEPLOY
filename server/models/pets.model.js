const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The pet's name is required"],
      minLength: [3, "The pet's name has to be larger than 3 letters"],
    },

    petType: {
      type: String,
      required: [true, "The pet's type is required"],
      minLength: [3, "The pet's type has to be larget than 3 letters"],
    },

    description: {
      type: String,
      required: [true, "The pet's description is required"],
      minLength: [3, "The pet's description has to be larger than 3 letters"],
    },

    skill1: {
      type: String,
    },

    skill2: {
      type: String,
    },

    skill3: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pet", PetsSchema);
