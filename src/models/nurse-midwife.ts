import { model, Schema } from "mongoose";
import { INurseMidwife } from "../interfaces/nurse-midwife";

const nurseMidWifeSchema: Schema = new Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: false,
    default: "",
  },

  experience: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    required: false,
    default: 0,
  },

  available: {
    type: Boolean,
    required: false,
    default: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  modified_at: {
    type: Date,
    required: false,
  },
});

export default model<INurseMidwife>("NurseMidwife", nurseMidWifeSchema);
