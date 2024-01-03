import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  id: { type: Number, auto: true },
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

let Notice: any = null;
if (mongoose.models.Notice !== undefined) {
  Notice = mongoose.models.Notice;
} else {
  Notice = mongoose.model("Notice", noticeSchema);
}

export default Notice;
