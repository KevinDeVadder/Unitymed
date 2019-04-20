const UserModel = require('../models/User');


module.exports = {
    async getAllMedics(req, res, next) {
        // console.log(req.body)
        try{
            req.query.status = 1
            const medics = await UserModel.find(req.query)
            res.send(medics)
        }
        catch(err){
            next(err)
        }
    }
   }
