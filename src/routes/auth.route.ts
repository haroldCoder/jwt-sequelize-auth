import {Router} from "express";
import Auth from "../middleware/auth.middleware";
const router = Router();

const auth = new Auth();

router.route("/register")
.post(auth.Register)

module.exports = router;