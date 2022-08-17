const mongoose = require('mongoose');

const { Schema } = mongoose;

const pillSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Pill = mongoose.model('Pill', pillSchema);

module.exports = Pill;
