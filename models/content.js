import mongoose from 'mongoose';

// Declare the Schema of the Mongo model
const contentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: false
  },
});

//Export the model
export const Content = mongoose.model('Content', contentSchema);
