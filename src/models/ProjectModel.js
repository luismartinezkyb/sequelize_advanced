import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { TaskModel } from "./TaskModel.js";

export const ProjectModel = sequelize.define('projects',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
        
    },
    name:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    }
}, {
    timestamps:false
})

ProjectModel.hasMany(TaskModel, {
    foreignKey:'projectId',
    sourceKey:'id'
})
TaskModel.belongsTo(ProjectModel, {
    foreignKey:'projectId',
    targetKey:'id'
})