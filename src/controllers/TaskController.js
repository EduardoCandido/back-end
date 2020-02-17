const Task = require("../models/Task");
const ProgrammerController = require("./ProgrammerController");

module.exports = {

    //Cria uma nova tarefa
    async create(req, res){
        
        const { client, requester, deadLine, description, programmer, status} = req.body;
        
        Task.create({
            client,
            requester,
            deadLine,
            description,
            programmer,
            status
        }, (err, task)=>{
            if(err){
                res.send(err)
            }
            ProgrammerController.increaseCurrentTask(programmer);
            res.send(task)
        })
    },
    
    //Seleciona todas as tarefas
    async getAll(req, res){
        await Task.find((err, tasks)=>{
            if(err){
                res.send(err);
            }
            res.send(tasks)
        })
    },

    //Seleciona uma tarefa
    async getOne(req,res){

        let id = req.params.id;
        await Task.findOne({ _id: id}, (err, task)=>{

            if(err){
                res.send(err);
            }

            res.send(task);
        });
    },

    //Remove uma Tarefa
    async removeOne(req, res){

        await Task.findByIdAndRemove({ _id: req.params.id}, (err, task)=>{

            if(err){
                res.send(err);
            }
            res.send({"message": "OK"});
        });
    },

    async updateTask(req, res){
        const { _id, programmer } = req.body;

        await Task.findOneAndUpdate({ _id }, {status: "Finalizada"}, (err, result)=>{
            if(err){
                console.log(err)
                res.send(err);
            }
            ProgrammerController.decreaseCurrentTask(programmer)
            res.send(result);
        });
    }
}

