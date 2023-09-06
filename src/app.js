import express from 'express';
import projectsRoutes from './routes/projects.routes.js'

const app = express();
//middlewares
app.use(express.json())
//routes
app.use('/api', projectsRoutes)

export default app;