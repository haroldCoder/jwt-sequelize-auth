import { Request, Response } from "express";
import UserModel from "../models/users.model";
import { Userauth } from "../interface/userauth";

class UsersControllers extends UserModel {
    req: Request
    res: Response

    constructor(req: Request, res: Response) {
        super();
        this.req = req;
        this.res = res;
    }

    getUsers = async () => {
        const users: Array<Userauth> = await this.model_user.findAll({
            attributes: ['username', 'email', 'date']
        });
        this.res.status(200).json(users);
    }

    createUser = async (user: Userauth) => {
        try {
            await this.model_user.create({
                username: user.username,
                email: user.email,
                password: user.password,
                token: user.token,
                date: user.date
            });

            this.res.status(200).send(`${user.username} is added`);
        }
        catch(err){
            console.log(err);
            this.res.status(500).json(err);
            throw err;
        }
    }

    deleteUser = async(Id: number) =>{
        try{
            await this.model_user.destroy({
                where: {
                    Id
                },
                force: true
            })

            this.res.status(200).send("user is removed")
        }
        catch(err){
            console.log(err);
            this.res.status(500).json(err);
            throw err;
        }
    }

    updateUser = async({username, email, password, date}: Userauth, id: number) =>{
        if(id) throw new Error("This service need Id");
        try{
            await this.model_user.update({
                username: username,
                email: email,
                password: password,
                date: date
            },{where: {
                Id: id
            }})

            this.res.status(200).send("user is updated")
        }
        catch(err){
            console.log(err);
            this.res.status(500).json(err);
            throw err;
        }
    }
}

export default UsersControllers;