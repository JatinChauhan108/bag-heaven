const mongoose = require('mongoose');
process.loadEnvFile(path);

mongoose.connect(process.env.MONGO_URL);

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [],
    isAdmin: Boolean,
    orders: [],
    contact: Number,
    picture: String
})

module.exports = mongoose.model("user", userSchema);