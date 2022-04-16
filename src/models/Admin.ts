import { model, Schema } from "mongoose";

interface adminType {
    name: string,
    email: string,
    admin_type: string,
    image: string,
    password: string
}

const adminSchema = new Schema<adminType>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    admin_type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Admin = model<adminType>("admin", adminSchema);