const controllers = {
    home: (req, res) => {
        return res.render('../views/home');
    },
    /*register: (req, res) => {
        return res.render('register');
    },
    cart: (req, res) => {
        return res.render('products/cart');
    },

    productDetail: (req,res) => {
        return res.render('prod');
    }, */
}

module.exports = controllers;