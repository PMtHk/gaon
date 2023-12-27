import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  username: String,
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  const user: any = this;

  if (!user.isModified("password" || user.password === "")) return next();
  else {
    bcrypt.genSalt(saltRounds, function (error: any, salt) {
      if (error) return next(error);

      bcrypt.hash(user.password, salt, function (error: any, hash) {
        if (error) return next(error);

        user.password = hash;
        next();
      });
    });
  }
});

// add comeparePassword method
userSchema.methods.comparePassword = async function (plainPassword: string) {
  return await bcrypt.compare(plainPassword, this.password);
};

let User: any = null;
if (mongoose.models.User !== undefined) {
  User = mongoose.models.User;
} else {
  User = mongoose.model("User", userSchema);
}

export default User;
