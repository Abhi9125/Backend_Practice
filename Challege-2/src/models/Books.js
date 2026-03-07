import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
      max: [100, "Title most be less then 100 worlds"],
    },

    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: true,
      enum: {
        value: ["Fiction", "Non-Fiction", "Science", "History", "Technology"],
        message: "{Value} is not a valid category",
      },
    },
    pages: {
      type: Number,
      min: 1,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    language: {
      type: String,
      default: "English",
    },
    publishedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Book", BookSchema);
