import {Sequelize} from "sequelize";

const DB_DATABASE='sequelize';
const DB_USERNAME='postgres';
const DB_HOST="localhost";
const DB_PASSWORD='1234';



export const sequelize =new Sequelize(
    DB_DATABASE, DB_USERNAME, DB_PASSWORD,{
        host: DB_HOST,
        dialect:'postgres',

        logging:false,
        
    }
)

export const dbConnectPostgres = async ()=>{
    
    try {
        await sequelize.sync({force:false});
        //await sequelize.authenticate();
        console.log("CONECCION POSTGRESQL CORRECTA")
    } catch (error) {  
        console.log("ERROR DE LA CONNECTION EN POSTGRESQL", error)
    }
}
