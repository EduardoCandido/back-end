const mongoose = require('mongoose');

const ProgrammerSchema = mongoose.Schema({
    name: String,
    currentTasks: Number
});

module.exports = mongoose.model('Programmer', ProgrammerSchema);