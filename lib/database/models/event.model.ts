import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    name: string;
    email: string;
    description?: string;
    
  }

const EventSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String,required: true },
    
  })
  
  const Event = models.Event || model('Event', EventSchema);
  
  export default Event;