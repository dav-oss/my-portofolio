import { Schema, model } from 'mongoose';

const certificateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  issuer: {
    type: String,
    required: true,
  },
  dateIssued: {
    type: Date,
    required: true,
  },
});

const Certificate = model('Certificate', certificateSchema);

export default Certificate;