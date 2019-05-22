const SessionModel = require('../models/Session');

module.exports = {
    async getAllSessions(req, res, next) {
        try{
            req.query.patientId = req.body.userId
            const sessions = await SessionModel.find(query)
            res.send(sessions)
        }
        catch(err){
            next(err)
        }
    },
    async createSession(req, res, next){
        try{
            const session = await SessionModel.create({patientId: req.body.userId, medicId: req.body.medicId, patientName: req.body.patientName, medicName: req.body.medicName, diagnosis: req.body.diagnosis, accepted: false})
            // console.log(session)
            res.send(session)
        }
        catch(err){
            next(err)
        }
    },
    async updateSession(req, res, next){
        try{

        }
        catch(err){
            next(err)
        }
    },
    async acceptSession(req, res, next){
        try{

        }
        catch(err){
            next(err)
        }
    },
    async getOneSession(req, res, next){
        try {
            const session = await SessionModel.findById({_id: req.params.id})
            res.send(session)
        } catch (err) {
            next(err)
        }
    }
   }
