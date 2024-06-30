import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    name: string;
    email: string;
    description: string;
}

const ContactUsSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
});

// Use existing model if it's already been defined, otherwise create a new one
const Event = models.ContactUs || model('ContactUs', ContactUsSchema);
  
export default Event;