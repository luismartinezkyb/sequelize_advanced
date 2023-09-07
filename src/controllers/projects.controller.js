import { ProjectModel } from "../models/ProjectModel.js";
import { TaskModel } from "../models/TaskModel.js";


const getProjects = async(req, res)=>{
    try {
        const data = await ProjectModel.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send('error');
        return
    }
};

const getProject = async(req, res)=>{
    try {
        const data = '';
    } catch (error) {
        res.status(404).send('error');
        return
    }

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
    try {
        const {id} = req.params;

        if(!id){
            return res.send('id is valid');
        }


    } catch (error) {
        res.status(404).send('error');
        return
    }

};

const deleteProject = async(req, res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.send('id is valid');
        }
        const data = await ProjectModel.destroy({where:{id}});
        if(!data){
            return res.send('the project does not exist')
        }
        res.status(200).json({success:'Project deleted successfully'})
        
    } catch (error) {
        res.status(404).send('error');
        return
    }
};

export {getProject, getProjects, createProject, updateProject, deleteProject}