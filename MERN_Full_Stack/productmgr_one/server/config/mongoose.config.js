const mongoose = require('mongoose');
// this is the Database
mongoose.connect('mongodb://localhost/product', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

    .then(()=> console.log("Database Connection Successful"))
    .catch(()=> console.log("Error"))