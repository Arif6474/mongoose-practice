import { Application } from 'express';
import { IUser } from "./user.interface";
import User from "./user.model";

// database query
export const createUserToDB = async (payload: IUser): Promise<IUser> => {

    const user = await new User(payload);
    await user.save();
    return user;

}
export const getUsersFromDB = async ():Promise<IUser[]> => {
 const user = await User.find()  
 return user;
}

export const getSingleUserFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload});
    // const user = await User.findOne({id: payload}, {name: 1});
    return user;
}

    

