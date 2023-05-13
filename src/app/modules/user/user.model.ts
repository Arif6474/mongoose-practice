import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

   // creating schema using interface
   const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    emergencyContact: {
        type: Number
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
    }

});
 // creating model for mongoDB database

const User = model<IUser>('User', userSchema)
 export default User;