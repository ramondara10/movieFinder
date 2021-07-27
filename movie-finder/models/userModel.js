const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailVerified: {
        type: Boolean,
        default: false,
        required: true
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;


// Schema.pre('save', function(next){
//     // get access to user model, then we can use user.email, user.password
//     const user = this;

//     bcrypt.genSalt(10, function(err, salt){
//         if (err) { return next(err) }

//         bcrypt.hash(user.password, salt, null, function(err, hash){
//             if (err) { return next(err); }

//             user.password = hash;
//             next()
//         })
//     })
// })

// // Make use of methods for comparedPassword
// Schema.methods.comparedPassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, good){
//         if (err ) { return cb(err)}
//         cb(null, good);
//     })
// }
// // const User = mongoose.model('User', UserSchema)

// // Export the model
// export default mongoose.model('User', Schema);