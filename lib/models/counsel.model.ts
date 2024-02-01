import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const counselSchema = new mongoose.Schema({
  cid: { type: Number, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  prefer_time: { type: String, required: false },
  content: { type: String, required: true },
  status: { type: String, required: true, default: "pending" },
});

counselSchema.plugin(AutoIncrement, { inc_field: "cid" });

let Counsel: any = null;

if (mongoose.models.Counsel !== undefined) {
  Counsel = mongoose.models.Counsel;
} else {
  Counsel = mongoose.model("Counsel", counselSchema);
}

export default Counsel;
