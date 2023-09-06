import { ProjectModel } from "../models/ProjectModel.js";
import { TaskModel } from "../models/TaskModel.js";


const getProjects = async(req, res)=>{

};

const getProject = async(req, res)=>{

};

const createProject = async(req, res)=>{
    try {
        const {name, priority, description} = req.body;
        if(!name || !priority || !description){
            return res.status(404).send('error')
        }
        console.log(name, priority, description)

        const data = await ProjectModel.create({
            name, 
            description, 
            priority
        })

        if(!data){
            return res.status(404).send('Error')
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(404).send('error');
        return
    }
};

const updateProject = async(req, res)=>{

};

const deleteProject = async(req, res)=>{

};

export {getProject, getProjects, createProject, updateProject, deleteProject}