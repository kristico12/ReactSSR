// libraries
import mongoose from "mongoose";
import cryptoJs from "crypto-js";

//|---------- model AUTH --------------------|
const auth = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: input => !input.includes(" "),
      message: props => `${props.value} is not username valid, not spacing`
    },
    minlength: 5
  },
  password: { type: String, required: true, minlength: 6 },
  token: { type: String }
});
auth.pre("save", function(next) {
  if (this.password && this.isModified("password")) {
    this.password = cryptoJs.HmacMD5(
      `${Date()}_${this.password}`,
      process.env.PASSWORD_KEY
    );
  }
  next();
});
auth.post("find", function(next) {
  this.password = cryptoJs.HmacMD5.decrypt(
    this.password,
    process.env.PASSWORD_KEY
  );
  next();
});
auth.post("findOne", function(next) {
  this.password = cryptoJs.HmacMD5.decrypt(
    this.password,
    process.env.PASSWORD_KEY
  );
  next();
});
// add model
const Auth = mongoose.model("AUTH", auth);

// --------- model USER --------------------------|
const user = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  identificationcard: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: input => !isNaN(parseInt(input, 10)),
      message: props =>
        `${props.value} is not identification valid, only numbers`
    }
  },
  birthdate: {
    type: Date,
    required: true,
    validate: {
      validator: input => {
        const birthdate = new Date(input);
        const age = (Date.now() - birthdate) / 31557600000;
        return age >= 18;
      },
      message: props => `${props.value} is not birthdate valid`
    }
  },
  city: { type: String },
  auth: { type: mongoose.Schema.Types.ObjectId, ref: "AUTH" }
});
user.pre("remove", function(next) {
  const refAuth = Auth.findById(this.auth);
  refAuth.remove();
  next();
});
// add model
const User = mongoose.model("USER", user);

export { Auth, User };
