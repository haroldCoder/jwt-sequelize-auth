import { Request, Response } from "express";
import UserModel from "../models/users.model";
import { Userauth } from "../interface/userauth";

class UsersControllers extends UserModel{
    req: Request
    res: Response

    constructor(req: Request, res: Response){
        super();
        this.req = req;
        this.res = res;
    }

    getUsers = async() =>{
        const users: Array<Userauth> = await this.model_user.findAll();
        this.res.status(200).json(users);
    }
}

export default UsersControllers;