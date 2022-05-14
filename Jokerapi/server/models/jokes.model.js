const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{//validations
	setup: {
		type: String,
		minlength: [10,"setup must be at least 10 char long"]
	},
	punchline: { 
		type: String,
		minlength: [3,"punchline must be at least 3 char long"]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;