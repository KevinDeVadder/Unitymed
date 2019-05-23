const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//init bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true 
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true
    },
    status: {
        type: Number,
        default: 0
        //0-user, 1-medic, 2-admin
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    certificate:{
        number: Number,
        date: String
    },
    specialization: String,
    reviewedBy: [String],
    reviews:[Number],
    bloodType: String,
    height: Number,
    weight: Number,
    age: Number

});

// hash user password before saving into database
UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});


const User = mongoose.model('user', UserSchema);

module.exports = User;