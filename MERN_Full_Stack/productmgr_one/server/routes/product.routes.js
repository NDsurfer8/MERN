const ProductController = require('../controllers/product.controller');

module.exports = function (app){
    app.get("/api", ProductController.index);
    app.post("/api/product", ProductController.createProduct);
    app.get("/api/product", ProductController.findAllProduct);
    app.get("/api/product/:id", ProductController.findOneProduct);

}

//after creating controller and route then go to client.