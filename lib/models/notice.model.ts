import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const noticeSchema = new mongoose.Schema({
  id: { type: Number, auto: true },
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

noticeSchema.plugin(paginate);

interface NoticeDocument extends mongoose.Document {}

let Notice: any = null;
if (mongoose.models.Notice !== undefined) {
  Notice = mongoose.models.Notice;
} else {
  Notice = mongoose.model<
    NoticeDocument,
    mongoose.PaginateModel<NoticeDocument>
  >("Notice", noticeSchema);
}

export default Notice;
