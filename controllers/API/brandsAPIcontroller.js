const path = require("path");

const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");
const { pbkdf2 } = require("crypto");

//Aqui tienen otra forma de llamar a cada uno de los modelos
//const Products = db.Product;
//const Brands = db.Brand;
//const Users = db.User;

const brandsAPIController = {
  brand: (req, res) => {
    const id = req.params.id;

    var brand = db.Brand.findByPk(id, { //se busca tabla x el alias del modelo
      
    })

      .then((brand) => {
        let respuesta = {
          meta: {
            status: 200,
            url: "/api/brands/"+brand.id, // no :id porque en el url va solo el id
          },
          data: brand,
        };
        res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });

  },

  brandList: (req, res) => {
    db.Brand.findAll({
      include: [{ association: "Product" }, 
      //{attributes: {Product:id}}
      ],
      //attributes: [
      //   "name_brand",
      //   [sequelize.fn("COUNT", sequelize.col("Brand.Product.id")), "count_products"],
      // ],
      // group: "name_brand",
      
    })
      .then((brands) => {
        let respuesta = {
          meta: {
            status: 200,
            total: brands.length,
            url: "/api/brands/",
          },
          data: brands,
        };
        res.json(respuesta);
      })
      
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
    },
};

module.exports = brandsAPIController;