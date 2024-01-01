import { Request, Response } from "express";
import UserModel from "../models/users.model";
import { Userauth } from "../interface/userauth";
import { json } from "body-parser";

class UsersControllers extends UserModel {
    req: Request
    res: Response

    constructor(req: Request, res: Response) {
        super();
        this.req = req;
        this.res = res;
    }

    getUsers = async () => {
        const users: Array<Userauth> = await this.model_user.findAll();
        this.res.status(200).json(users);
    }

    createUser = async (user: Userauth) => {
        try {
            await this.model_user.create({
                username: user.username,
                email: user.email,
                password: user.password,
                token: user.password,
                date: user.date
            });
        }
        catch(err){
            console.log(err);
            this.res.status(500).json(err);
            throw err;
        }
    }
}

export default UsersControllers;