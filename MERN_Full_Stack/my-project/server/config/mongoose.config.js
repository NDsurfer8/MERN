const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Database connection success"))
    .catch(()=> console.log("Error"))