import mongoose from "mongoose";

const SubscriptionType = new mongoose.Schema({
  plan: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  }
});

const subscriptionSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  subscriptionId: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
    require: false,
  },
  endDate: {
    type: Date,
    require: false,
  },
  status: {
    type: String,
    enum: ["enabled", "expired"],
    required: true,
  },
});

export const User = mongoose.model("Subscription", subscriptionSchema);
