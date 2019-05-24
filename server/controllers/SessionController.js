const SessionModel = require('../models/Session');
const UserModel = require('../models/User');
const mail = require('../helpers/mailconfig')


module.exports = {
    async getAllSessions(req, res, next) {
        try{
            if(req.body.status==0){req.query.patientId = req.body.userId, req.query.accepted=true}
            else if(req.body.status==1)req.query.medicId = req.body.userId
            const sessions = await SessionModel.find(req.query)
            res.send(sessions)
        }
        catch(err){
            console.log(err)
            next(err)
        }
    },
    async createSession(req, res, next){
        try{
            const session = await SessionModel.create({patientId: req.body.userId, medicId: req.body.medicId, patientName: req.body.patientName, medicName: req.body.medicName, diagnosis: req.body.diagnosis, accepted: false})
            const medic = await UserModel.findById({_id: req.body.medicId})
            mail.transporter.sendMail({
                from: 'Unitymed',
                to: medic.email,
                subject: 'Your have a new in-app checkup request!',
                html: '<h1>Hey! We have news for you! Someone just sent a checkup request. Please review it and accept/reject it ASAP.</h1>'
            }).then(
                () =>{
                    res.send(medic)
                }
            ).catch(next)
            
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
            var session = await SessionModel.findById({_id:req.params.id})
            // console.log(session.medicId != req.body.userId)
            // console.log(session)
            // console.log(session.medicId)
            // console.log(req.body.userId)
            if(session.medicId != req.body.userId){
                res.status(403).send({"error": "you are now allowed to take this action"})
            }
            else{
                session.accepted = true
                session.save()
                const patient = await UserModel.findById({_id: session.patientId}, 'email')
                // console.log(patient)
                mail.transporter.sendMail({
                    from: 'Unitymed',
                    to: patient.email,
                    subject: 'Your checkup request has been approved!',
                    html: `<h1>Hey! We have news for you! Your checkup request for ${session.diagnosis} was accepted by the medic ${session.medicName}. You can open the app and start chatting with him</h1>`
                }).then(
                    () =>{
                        res.send(session)
                    }
                )
                .catch(err => console.log(err))                
            }
        }
        catch(err){
            console.log(err)
            next(err)
        }
    },
    async deleteSession(req, res, next){
        try{
            var session = await SessionModel.findByIdAndDelete({_id:req.params.id})
            if(session.medicId != req.body.userId){
                res.status(403).send({"error": "you are now allowed to take this action"})
            }
            else{
                const patient = await UserModel.findById({_id: session.patientId}, 'email')
                // console.log(patient)
                mail.transporter.sendMail({
                    from: 'Unitymed',
                    to: patient.email,
                    subject: 'Your checkup request has been denied!',
                    html: `<h1>Hello! We are sorry to inform you that your checkup request for ${session.diagnosis} was rejected by the medic ${session.medicName}. You can open the app and try finding another doctor</h1>`
                }).then(
                    () =>{
                        res.send(session)
                    }
                )
                .catch(err => console.log(err))                
            }
        }
        catch(err){
            console.log(err)
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
    },
    async rateMedic(req, res, next){
        try {
            var session = await SessionModel.findOne({_id: req.params.id})
            var medic = await UserModel.findOne({_id: session.medicId})
            // console.log(medic.reviewedBy);
            if(!session.rating){
                session.rating = req.body.review
                medic.reviews.push(req.body.review);
                medic.reviewedBy.push(req.body.userId)
                medic.save();
                session.save()
                console.log(medic)
                res.send(session)
            }
            else{
                res.status(406).send({'error': 'User has already rated the medic'})
            }
        } 
        catch (err) {
            console.log(err)
            next(err)
        }
    }
   }
