//imports
import app from "./app.js";
import { dbConnectPostgres, sequelize } from "./config/database.js";
import './models/ProjectModel.js'
import './models/TaskModel.js'


//config
const PORT=3001
dbConnectPostgres();
//middleware
//routes
//listen

app.listen(PORT, ()=>console.log(`App listening on ${PORT}`))