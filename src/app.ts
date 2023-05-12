import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { Schema, model } from 'mongoose';

const app: Application = express()
//using cors
app.use(cors())

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
    /* 
    step1- Interface
    step2- schema
    step3-model
    step4-database query
    */
    //create user Interface
    interface IUser {
        id: string;
        role: 'student';
        password: string;
        name: {
            firstName: string;
            lastName: string;
        };
        dateOfBirth: string;
        gender: 'male' | 'female';
        email: string;
        contact: number;
        emergencyContact?: number;
        presentAddress: string;
        permanentAddress?: string;


    }
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
    
    // database query
    const createUser = async () => {

        const user = new User({
            id: 'abc2',
            role: 'student',
            password: 'Arif64743',
            name: {
                firstName: 'Arif',
                lastName: 'Islam',
            },
            dateOfBirth: '01/05/1996',
            gender: 'male',
            email: 'arrifulislam64743@gmail.com',
            contact: '01820082894',
            emergencyContact: '01828002493',
            presentAddress: 'hathazari',


        });
        await user.save();
        console.log(user);
        
    }
    createUser()
})

export default app