import mongoose from "mongoose";

const AccidentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

export const Accident = mongoose.model(
  "Accident",
  AccidentSchema
);