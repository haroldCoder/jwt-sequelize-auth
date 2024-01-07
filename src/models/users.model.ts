import { DataTypes, Dialect, ModelCtor } from "sequelize";
import SequelizeConnect from "../connection/sequelizeConnect";

class UserModel extends SequelizeConnect {
    model_user: ModelCtor<any>;

    constructor() {
        super(process.env.MYSQL_DB!, process.env.MYSQL_USER!, process.env.MYSQL_PASSWORD!, process.env.MYSQL_HOST!, "mysql");
        if (!this.sqlize.isDefined("usersdb")) {
            this.model_user = this.sqlize.define('usersdb', {
                Id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                date: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                token: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            }, { tableName: "users" });

            (async () => {
                await this.sqlize.sync({ force: false });
            })();
        }

        else
            this.model_user = this.sqlize.model("usersdb")
    }
}

export default UserModel;