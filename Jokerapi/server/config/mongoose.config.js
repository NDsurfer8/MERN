const mongoose = require("mongoose");
						// ! makes sure the name of your database goes here exactly
mongoose.connect("mongodb://localhost/jokes", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))  //success
	.catch(err => console.log("Something went wrong when connecting to the database", err));