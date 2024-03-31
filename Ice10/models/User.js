const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jyalexander63:vhrd5tnq3X2cTJkB@cluster667.td9wewd.mongodb.net/mydatabase');

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    friends: [String],
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
}, {
    collection: 'students'
});

module.exports.Student = mongoose.model('Student', userSchema);