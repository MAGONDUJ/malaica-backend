import { model, Schema } from "mongoose";
import { IClient } from "../interfaces/client";

const clientSchema: Schema = new Schema({
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

  country: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  physical_address: {
    type: String,
    required: true,
  },

  pregnancy_stage: {
    type: String,
    required: true,
  },

  due_date: {
    type: Date,
    required: true,
  },

  exit_date: {
    type: Date,
    required: false,
  },

  assign_status: {
    type: String,
    required: true,
    default: "pending",
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

export default model<IClient>("Client", clientSchema);
