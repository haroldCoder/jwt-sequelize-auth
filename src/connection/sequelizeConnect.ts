import {Sequelize, Dialect} from "sequelize";

class SequelizeConnect{
    sqlize: Sequelize;
    static User: SequelizeConnect

    constructor(database: string, username: string, password: string, host: string, db: Dialect){
        this.sqlize = new Sequelize(database, username, password, {
            host: host,
            dialect: db
        })
        if(SequelizeConnect.User){
            throw new Error("You can only create one instance!")
        }
        SequelizeConnect.User = this;   
    }

    isConnect = async() =>{
        try{
            await this.sqlize.authenticate();
            console.log('Connection has been established successfully');
        }
        catch(err){
            console.log('Unable to connect to the database: ', err);
            
        }
    }
}

export default SequelizeConnect;