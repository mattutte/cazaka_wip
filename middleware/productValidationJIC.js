const { check, validationResult } = require("express-validator");
const res = require("express/lib/response");

const productValidation = [
  check("name")
    .notEmpty()
    .withMessage("Falta completar el campo del nombre"),
  check("name")
    .isLength({ max: 50 })
    .withMessage("El campo del Nombre debe ser menos a 200 caracteres")
    .bail(),

  check("category")
    .notEmpty()
    .withMessage("Falta completar el campo de la categoria"),

  check("brand").notEmpty().withMessage("Falta completar el campo de la marca"),

  check("description")
    .notEmpty()
    .withMessage("Falta completar el campo de la descripcion")
    .bail(),
  check("description")
    .isLength({ max: 200 })
    .withMessage("El campo de la Description debe ser menos a 200 caracteres"),

  check("year")
    .notEmpty()
    .withMessage("Falta completar el campo del año")
    .bail(),
  check("year")
    .isNumeric()
    .withMessage("El año debe ser numerico entre 1900 y 2021"),

  check("features_style")
    .notEmpty()
    .withMessage("Falta completar el campo del estilo"),

  check("features_gender")
    .notEmpty()
    .withMessage("Falta completar el campo del genero"),

  check("features_use")
    .notEmpty()
    .withMessage("Falta completar el campo del uso"),

  check("regularPrice")
    .notEmpty()
    .withMessage("Falta completar el campo del precio")
    .bail(),
  check("regularPrice")
    .isNumeric()
    .withMessage("Debes insertar el precio sin punto ni coma"),

  check("specialPrice")
    .isNumeric()
    .withMessage("Debes insertar el precio con descuento sin punto ni coma"),

  check("delivery_time")
    .notEmpty()
    .withMessage("Debes insertar el tiempo de entrega"),

  check("weight_package")
    .notEmpty()
    .withMessage("Falta completar el campo del peso del paquete")
    .bail(),
  check("weight_package")
    .isNumeric()
    .withMessage("Debes insertar el Peso sin punto ni coma"),

  check("color_available")
    .notEmpty()
    .withMessage("Falta completar el color del producto"),

  check("size_available")
    .notEmpty()
    .withMessage("Falta completar el tamaño del producto"),

  check("image_main")
    .custom((value, { req }) => {
      if (req.files.find(file=>file.fieldname == "image-main") === undefined) {
        console.log("no hay archivo subido");
        return false;
      } else if (
        req.files.find(file=>file.fieldname == "image-main").mimetype === "image/jpg" ||
        req.files.find(file=>file.fieldname == "image-main").mimetype === "image/jpeg" ||
        req.files.find(file=>file.fieldname == "image-main").mimetype === "image/png" ||
        req.files.find(file=>file.fieldname == "image-main").mimetype === "image/gif"
      ) {
        return true; // return "non-falsy" value to indicate valid data"
      } else {
        console.log("el formato del archivo no es el indicado");
        return false; // return "falsy" value to indicate invalid data
      }
    })
    .withMessage(
      "Debe subir un archivo para el main picture, con formato gif, jpg, jpeg o png. "
    )
    .bail(),

  check("image_front")
    .custom((value, { req }) => {
      if (
        req.files.find(file=>file.fieldname == "image-front") === undefined ||
        req.files.find(file=>file.fieldname == "image-front").mimetype === "image/jpg" ||
        req.files.find(file=>file.fieldname == "image-front").mimetype === "image/jpeg" ||
        req.files.find(file=>file.fieldname == "image-front").mimetype === "image/png" ||
        req.files.find(file=>file.fieldname == "image-front").mimetype === "image/gif"
      ) {
        return true; // return "non-falsy" value to indicate valid data"
      } else {
        console.log("el formato del archivo no es el indicado");
        return false; // return "falsy" value to indicate invalid data
      }
    })
    .withMessage(
      "Si sube un archivo para front picture, debe ser con formato gif, jpg, jpeg o png. "
    )
    .bail(),

  check("image_back")
    .custom((value, { req }) => {
      if (
        req.files.find(file=>file.fieldname == "image-back") === undefined ||
        req.files.find(file=>file.fieldname == "image-back").mimetype === "image/jpg" ||
        req.files.find(file=>file.fieldname == "image-back").mimetype === "image/jpeg" ||
        req.files.find(file=>file.fieldname == "image-back").mimetype === "image/png" ||
        req.files.find(file=>file.fieldname == "image-back").mimetype === "image/gif"
      ) {
        return true; // return "non-falsy" value to indicate valid data"
      } else {
        console.log("el formato del archivo no es el indicado");
        return false; // return "falsy" value to indicate invalid data
      }
    })
    .withMessage(
      "Si sube un archivo para back picture, debe ser con formato gif, jpg, jpeg o png. "
    )
    .bail(),
];

module.exports = productValidation;