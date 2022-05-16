const PersonController = require('../controllers/person.controller');

// when we go to this API we want to run this index method in our controller
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/person', PersonController.createPerson)
}