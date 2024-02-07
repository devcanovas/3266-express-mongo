import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
  },
  { versionKey: true }
);

export const book = mongoose.model("books", bookSchema)
