import { Sequelize, Dialect } from "sequelize";

class SequelizeConnect {
    sqlize: Sequelize;

    constructor(database: string, username: string, password: string, host: string, db: Dialect) {
        this.sqlize = new Sequelize(database, username, password, {
            host: host,
            dialect: db
        })
    }

    isConnect = async () => {
        try {
            await this.sqlize.authenticate();
            console.log('Connection has been established successfully');
        }
        catch (err) {
            console.log('Unable to connect to the database: ', err);

        }
    }
}

export default SequelizeConnect;