const mongoose = require('mongoose');
process.loadEnvFile();

mongoose
.connect(process.env.MONGO_URL)
.then(function(){
    console.log("DB connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection