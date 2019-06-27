import { Schema, model } from 'mongoose';

const BeerSchema = new Schema({
  id: {
    type: String,
  },
  object: {
    type: String,
  },
  name: {
    type: String,
  },
  style: {
    type: String,
  },
  description: {
    type: String,
  },
  abv: {
    type: Number,
  },
  ibu: {
    type: Number,
  },
  cb_verified: {
    type: Boolean,
  },
  brewer_verified: {
    type: Boolean,
  },
  brewer: {
    type: Object,
  }
});

export const Beer = model('Beer', BeerSchema);