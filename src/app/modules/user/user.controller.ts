import { NextFunction, Request, Response } from "express"
import { createUserToDB, getSingleUserFromDB, getUsersFromDB } from "./user.service"

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUsersFromDB()
    res.status(200).json({
        status: "success",
        data: users
    })

}
export const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const user = await getSingleUserFromDB(id)
    res.status(200).json({
        status: "success",
        data: user
    })

}
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    const user = await createUserToDB(data)
    res.status(200).json({
        status: "success",
        data: user
    })
}

// route -> controller -> service