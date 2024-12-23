import mongoose from "mongoose";
import User from "./user.model";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const noticeSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

noticeSchema.plugin(AutoIncrement, { inc_field: "id" });

let Notice: any = null;

if (mongoose.models.Notice !== undefined) {
  Notice = mongoose.models.Notice;
} else {
  Notice = mongoose.model("Notice", noticeSchema);
}

export default Notice;
