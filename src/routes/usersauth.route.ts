import {Response, Router, Request} from "express";
import UsersControllers from "../controllers/users.controllers";
const router = Router();

router.route("/users")
.get((req: Request, res: Response)=>new UsersControllers(req, res).getUsers())



module.exports = router;