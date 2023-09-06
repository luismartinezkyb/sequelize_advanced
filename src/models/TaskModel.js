import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const TaskModel = sequelize.define('tasks',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
        
    },
    name:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
    // projectId:{
    //     type: DataTypes.INTEGER,
    // }
    
}, {
    timestamps:false
})
