import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: false,
    },
    surname: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: false,
    },
    image: {
      type: String,
      require: false,
    },
    credits: {
      type: Number,
      default: 1,
      require: false,
    },
  },
  { timestamps: true } // default false
);

export const User = mongoose.model('User', userSchema);