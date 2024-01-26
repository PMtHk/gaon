import mongoose from "mongoose";

const counselSchema = new mongoose.Schema({
  name: String,
  phone: String,
  prefer_time: String,
  content: String,
});

interface CounselDocument extends mongoose.Document {}

let Counsel: any = null;
if (mongoose.models.Counsel !== undefined) {
  Counsel = mongoose.models.Counsel;
} else {
  Counsel = mongoose.model<CounselDocument>("Counsel", counselSchema);
}

export default Counsel;
