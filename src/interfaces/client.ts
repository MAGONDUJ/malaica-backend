import { Document } from "mongoose";

export interface IClient extends Document {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  state: string;
  physical_address: string;
  pregnancy_stage: string;
  due_date: Date;
  exit_date: Date;
  assign_status: string;
  created_at: Date;
  modified_at: Date;
}
