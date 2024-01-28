import mongoose from "mongoose";

const counselSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  prefer_time: { type: String, required: false },
  content: { type: String, required: true },
});

let Counsel: any = null;

if (mongoose.models.Counsel !== undefined) {
  Counsel = mongoose.models.Counsel;
} else {
  Counsel = mongoose.model("Counsel", counselSchema);
}

export default Counsel;
