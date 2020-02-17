const Programmer = require('../models/Programmer');

module.exports = {

    async create(req, res){
        const {name, currentTasks} = req.body;

        await Programmer.create({
            name,
            currentTasks
        }, (err, programmer)=>{

            if(err){
                res.send(err);
            }

            res.send(programmer);
        })
    },

    async getAll(req, res){

        await Programmer.find((err, programmers)=>{

            if(err){
                res.send(err)
            }
            res.send(programmers);
        });
    },

    async removeOne(req, res){

        await Programmer.findByIdAndRemove({ _id: req.params.id}, (err, task)=>{

            if(err){
                res.send(err);
            }
            res.send({"message": "OK"});
        });
    },

    increaseCurrentTask(programmer){

        Programmer.findOneAndUpdate({name: programmer}, {$inc: { currentTasks: +1 }}, (err, programmer)=>{
        });
    },

    decreaseCurrentTask(programmer){

        Programmer.findOneAndUpdate({name: programmer}, {$inc: { currentTasks: -1 }}, (err, programmer)=>{
        });
    },
}