import { Schema, model } from 'mongoose';

const LocationSchema = new Schema({
  id: {
    type: String,
  },
  object: {
    type: String,
  },
  name: {
    type: String,
  },
  brewer_id: {
    type: String,
  },
  url: {
    type: String,
  },
  country_code: {
    type: String,
  },
  country_short_name: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  telephone: {
    type: Number,
  }
});

export const Location = model('Location', LocationSchema);