// index, show, store, update, destroy
const User = require('../models/User')
// const jwt = require('jsonwebtoken')

// const authConfig = require('./../config/auth')

// function generateToken(params = {}){
//     return jwt.sign(params, authConfig.secret, {
//         expiresIn: 86400
//     })
// }

module.exports = {
    async store(req, res){
        //const email = req.body.email;
        // console.log(req.telephone)
        const { name, sex, email, password, cpf, birth_date, telephone, marital_status, andress, functionUser } = req.body
        // let user = await User.findOne({ email });

        // if (!user){
            user = await User.create({ name, sex, email, password, cpf, birth_date, telephone, marital_status, andress, functionUser });
        // }

        // user.password = undefined;

        return res.json({
            user
            // token: generateToken({ id: user.id })
        });
    }
};
