import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Userauth } from "../interface/userauth";


class Auth {
    Register = (req: Request, res: Response, next: NextFunction) =>{
        try{
           const {data}: {data: Userauth} = req.body;

            const token = jwt.sign({
                username: data.username,
                email: data.email,
                password: data.password,
                token: data.token,
                date: data.date || new Date()
            }, data.password);

            res.status(200).json({
                user: data.username,
                token: token
            }) 
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    Login = (req: Request, res: Response, next: NextFunction) =>{
        try{
            const {auth, password} = req.query;

            let token = jwt.verify(typeof auth === "string" ? auth : "", typeof password === "string" ? password : "");

            if(token){
                next();
            }
            else{
                res.status(500).send(`token or password invalid`);
            }
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}

export default Auth;