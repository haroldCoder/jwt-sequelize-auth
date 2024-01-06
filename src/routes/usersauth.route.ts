import {Response, Router, Request} from "express";
import UsersControllers from "../controllers/users.controllers";
const router = Router();

router.route("/users")
.get((req: Request, res: Response)=>new UsersControllers(req, res).getUsers())

router.route("/users/:id")
.delete((req: Request, res: Response)=>new UsersControllers(req, res).deleteUser(parseInt(req.params.id)))
.put((req: Request, res: Response)=>new UsersControllers(req, res).updateUser(req.body, parseInt(req.params.Id)));

module.exports = router;