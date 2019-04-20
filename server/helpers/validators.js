var jwt = require('jsonwebtoken')


module.exports = {
    validateUser: function (req, res, next) {
        jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
            if (err) {
                res.status(400).json({ status: "error", message: err.message, data: null });
            } else {
                // add user id to request
                req.body.userId = decoded.id;
                req.body.status = decoded.status;
                next();
            }
        });
    },
    validateAdmin: function (req, res, next){
        jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
            if (err) {
                res.status(400).json({ status: "error", message: err.message, data: null });
                // console.log('this is me')
            } 
            else if(decoded.status != 2){
                res.status(403).json({status: "error", message: "Forbidden"});
                console.log('this is me')
            }
            else {
                // add user id to request
                req.body.userId = decoded.id;
                req.body.requesterStatus = decoded.status;
                next();
            }
        });
    }

    

}