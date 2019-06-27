import { Schema, model } from 'mongoose';

const BrewerSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  object: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  short_description: {
    type: String,
  },
  url: {
    type: String,
  },
  cb_verified: {
    type: Boolean,
  },
  brewer_verified: {
    type: Boolean,
  },
  facebook_url: {
    type: String,
  },
  twitter_url: {
    type: String,
  },
  instagram_url: {
    type: String,
  },
});

export const Brewer = model('Brewer', BrewerSchema);