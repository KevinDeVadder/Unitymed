const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mail = require('../helpers/mailconfig')

module.exports = {
    async create(req, res, next) {
        // console.log(req.body)
        try{
            if(req.body.status == 0){
            const user = await UserModel.create({ name: req.body.name, email: req.body.email, password: req.body.password })
            const emailToken = jwt.sign(
                {user: user._id}, 
                req.app.get('secretKey'),
                { expiresIn: '1h' }
            );
            console.log(emailToken)
            const url = `http://localhost:4000/api/confirm/${emailToken}`;
            mail.transporter.sendMail({
                from: 'Unitymed',
                to: user.email,
                subject: 'Confirm account!',
                html: 'Please click <a href="' + url +'">' + url + '</a>'
            }).then(
                () =>{
                    res.send({"status": "email sent"})
                }
            ).catch(next)
           }
           else{
            await UserModel.create({ name: req.body.name, email: req.body.email, password: req.body.password, status: 1, certificate: req.body.certificate, specialization: req.body.specialization})
            res.send({'message': 'Medic added, wait for admin to accept him'})
           }
        }
        catch(err){
            next(err)
        }
    },
   async authenticate(req, res, next) {
       try{
            const user = await UserModel.findOne({email:req.body.email});
            if(bcrypt.compareSync(req.body.password, user.password)) {
                if (user.confirmed == false){
                    res.status(401).send({"error": "user not yet confirmed"})
                }
                else{
                const toSend = {
                    name: user.name,
                    email: user.email,
                    status: user.status,
                }
                const token = jwt.sign({id: user._id, status: user.status}, req.app.get('secretKey'), { expiresIn: '1h' });
                res.json({status:"success", message: "user found!!!", data:{user: toSend, token:token}});
                }
            }
            else{
            res.json({status:"error", message: "Invalid email/password!!!", data:null});
            }
       }
       catch(err){
           next(err)
       }

    },
    confirm(req, res, next){
        jwt.verify(req.params.token, req.app.get('secretKey'), function (err, decoded) {
            if (err) {
                res.status(400).json({ status: "error", message: err.message, data: null });
            } else {
                // confirm user
                UserModel.findByIdAndUpdate({_id: decoded.user}, {confirmed: true}).then(
                    res.send({message: "success!!!"})
                ).catch(next)
            }
        });
        return res.redirect('http://localhost:8080/login');
    },
    async getAllUsers(req, res, next){
        try{
            const users = await UserModel.find(req.query)
            res.send(users)
        }
        catch(err){
            next(err)
        }
    },
    async addSpecial (req, res, next){
        // console.log(req.body.status)
        // console.log(req.body.requesterStatus)
        var data = req.body;

        if ((data.status == 2) && (data.requesterStatus == 2)){
         try{
             const user = await UserModel.create({ name: data.name, email: data.email, password: data.password, confirmed: true, status: 2});
             res.send(user)
         }
         catch(err){
             next(err)
         }           
        }
        else{
         res.status(403).json({status: "error", message: "Forbidden"});
         }
     }
   }
