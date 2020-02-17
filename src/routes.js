const express = require('express');

const routes = express.Router();

const TaskController = require("./controllers/TaskController");
const ProgrammerController = require("./controllers/ProgrammerController");


//Rotas
routes.get('/programmers', ProgrammerController.getAll)
routes.post('/programmers', ProgrammerController.create);
routes.delete('/programmers/:id', ProgrammerController.removeOne);

routes.get('/tasks', TaskController.getAll);
routes.get('/tasks/:id', TaskController.getOne);
routes.post('/tasks', TaskController.create);
routes.delete('/tasks/:id', TaskController.removeOne);
routes.put('/tasks/', TaskController.updateTask);

module.exports = routes