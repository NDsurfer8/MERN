
const {Person} = require('../models/person.model');
// the above actually imports our Person model^^

module.exports.index = (req,res) => {
    res.json({
        message: "Hello World"
    })
}

// export function to create a new user ...axios call.
module.exports.createPerson = (req, res) => {
    const { firstName, lastName } = req.body
    Person.create({
        firstName,
        lastName
    })
    .then(person => res.json(person))
    .catch(err=> res.json(err))
}
