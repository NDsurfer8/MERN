const Product = require('../models/product.model');


module.exports.index = (req, res) => {
    res.json({
        message: "hello World"
    })

}

// export function for creating a new product
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.findAllProduct = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id : req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

