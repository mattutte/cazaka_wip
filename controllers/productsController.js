const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    productsList: (req,res) => {
        db.Product.findAll({
        //order:[['rating','DESC']],
        include:[{association:'Brand'}],
        }).then((products)=>{
            console.log('los productos son')
            console.log(products);
            return res.status(200).json(products);
        })
        .catch((error)=>{
            console.log(error);
            res.sendStatus(500);
        });
    }
}