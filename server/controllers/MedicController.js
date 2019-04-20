const UserModel = require('../models/User');
const mail = require('../helpers/mailconfig')

module.exports = {
    async getAllMedics(req, res, next) {
        try{
            req.query.status = 1
            req.query.specialization = req.query.specialization.charAt(0).toUpperCase() + req.query.specialization.slice(1);
            console.log(req.query)
            const medics = await UserModel.find(req.query, 'name reviews reviewedBy specialization')
            res.send(medics)
        }
        catch(err){
            next(err)
        }
    },
    async confirmMedic(req, res, next){
        try{
            const medic = await UserModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
            mail.transporter.sendMail({
                from: 'Unitymed',
                to: medic.email,
                subject: 'Your account has been accepted!',
                html: '<h1>Hey! We have great news for you! An admin has just accepted your account. You can now log into your account and start helping people</h1>'
            }).then(
                () =>{
                    res.send(medic)
                }
            ).catch(next)
        }
        catch(err){
            next(err)
        }
    },
    async deleteMedic(req, res, next){
        try{
            const medic = await UserModel.findByIdAndDelete({_id: req.params.id})
            mail.transporter.sendMail({
                from: 'Unitymed',
                to: medic.email,
                subject: 'Your account has been rejected!',
                html: '<h1>Hello! We are sorry to announce you that your account has been reviewed by an admin and it does not meet the requirements to join our platform. If you think this is a mistake, please contact our support team.</h1>'
            }).then(
                () =>{
                    res.send(medic)
                }
            ).catch(next)
        }
        catch(err){
            next(err)
        }
    }
   }
