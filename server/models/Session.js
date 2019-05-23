const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    patientName:{
        type: String
    },
    medicName:{
        type: String
    },
    patientId:{
        type: String
    },
    medicId:{
        type: String
    },
    diagnosis:{
        type: String
    },
    accepted:{
        type: Boolean
    },
    conversation:[{
        emitter: String,
        emitterName: String,
        message: String
    }],
    rating: Number
});

const Session = mongoose.model('session', SessionSchema);

module.exports = Session;