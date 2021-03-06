const express = require('express')
const cors = require('cors');

const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// going to need for each new object routes.. for example...animal routes.
require('./server/routes/person.routes')(app);

app.listen(port,()=> {
    console.log(`listening on port: ${port}`)
})