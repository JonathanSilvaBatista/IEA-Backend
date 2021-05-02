const mongoose = require('mongoose')

const FunctionSchema = new mongoose.Schema({
    name_function: {
        type: String
    }
});

module.exports = mongoose.model('FunctionUser', FunctionSchema);