import mongoose from 'mongoose';

const REFRESH_DURATION = 60 * 60 * 24 * 14;

const tokenSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  refresh_token: { type: String, required: true },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
    expires: REFRESH_DURATION
  }
});

let Token: any = null;
if (mongoose.models.Token !== undefined) {
  Token = mongoose.models.Token;
} else {
  Token = mongoose.model('Token', tokenSchema);
}

export default Token;
