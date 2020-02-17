const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({

    client: String,
    requester: String,
    deadLine: String,
    description: String,
    programmer: String,
    status: String,
});

module.exports = mongoose.model('Task', TaskSchema);