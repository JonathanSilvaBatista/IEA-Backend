const FunctionUser = require('../models/FunctionUser')

module.exports = {
    async store(req, res){
        const { name_function } = req.body;
    
        const func = await FunctionUser.create( {name_function} );
        return res.json( func );
    }
};
