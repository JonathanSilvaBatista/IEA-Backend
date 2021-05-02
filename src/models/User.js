const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    sex: {
       type: String,
       required: true
    },
    email: {
        type: String,
        required: false
      },
    // password: {
    //     type: String,
    //     required: true,
    //     select: false
    //   },
    cpf: {
        type: String,
        required: false
    }, 
    telephone: [{
        typeTelephone: String,
        number: String
    }],
    andress: {
        street: String,
        number: Number,
        district: String,
        city: String,
        state: String,
        complement: String
    },
    birth_date: {
        type: Date
    },
    marital_status: {
        type: String,
        required: false
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    },
    functionUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FunctionUser'
    }
});

// UserSchema.pre('save', async function(next) {
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     next();
// })

module.exports = mongoose.model('User', UserSchema);