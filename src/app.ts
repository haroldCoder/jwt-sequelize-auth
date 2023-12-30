import bodyParser from "body-parser";
import express, {Router} from "express";
import dotenv from "dotenv";
import cors from "cors";
import Auth from "./middleware/auth.middleware";

dotenv.config()
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/', require("./routes/auth.route"))
app.use('/api', new Auth().Login, require("./routes/usersauth.route"));


export default app;