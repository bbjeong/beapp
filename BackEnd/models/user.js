var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: String,
    age: String,
    email: String,
    ipfsValue: String,
    gender: String,
    account: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user', userSchema);