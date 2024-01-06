import { Document } from "mongoose";

export interface INurseMidwife extends Document {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  experience: number;
  rating: number;
  available: boolean;
  created_at: Date;
  modified_at: Date;
}
