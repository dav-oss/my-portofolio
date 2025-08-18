import { Schema, model } from 'mongoose';

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  proficiencyLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true,
  },
}, { timestamps: true });

export default model('Skill', skillSchema);