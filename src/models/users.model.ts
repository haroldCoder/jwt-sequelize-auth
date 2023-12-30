import { DataTypes, Dialect, ModelCtor } from "sequelize";
import SequelizeConnect from "../connection/sequelizeConnect";

class UserModel extends SequelizeConnect{
    model_user: ModelCtor<any>;

    constructor(){
        super(process.env.MYSQL_HOST!, process.env.MYSQL_USER!, process.env.PASSWORD!, process.env.HOST!, "mysql");
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
            passsword: {
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
        }, {tableName: "users"})
    }
}

export default UserModel;