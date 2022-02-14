const {check, validationResult} = require('express-validator');
const res = require('express/lib/response');

const validations = [
    check('email').notEmpty().withMessage('Debe completar un email valido. ').bail()
                    .isEmail().withMessage('Debe completar un email valido. ').bail()
                    
                    .custom((value) => {
                         const db = require('../database/models');
                         let existingUser = db.User.findByPk(value);
                         //console.log(existingUser)
                         return existingUser
                        .then(user => {
                          console.log(user);
                          if (user != null) {
                            return Promise.reject("El email ya esta en uso");
                          }
                        });
                      }),

    check('psw').notEmpty().withMessage('Debe completar una clave de al menos 8 cifras. ').bail()
                .isLength(8).withMessage('Debe completar una clave de al menos 8 cifras. ').bail(),
   check('pswrepeat').custom((value, { req }) => {
                                if (value === req.body.psw){
                                      return true;
                                    }else{
                                      return false;
                                    }
                                  }).withMessage('Las claves deben coincidier. ').bail(),
    check('pais').notEmpty().withMessage('Debe informar su pais. ').bail(),
    check('first_name').notEmpty().withMessage('Debe informar su nombre').bail()
                        .isLength(2).withMessage('Su nombre o apellido debe contar con mas de dos letras. ').bail(),
    check('last_name').notEmpty().withMessage('Debe informar su apellido. ').bail()
                      .isLength(2).withMessage('Su nombre o apellido debe contar con mas de dos letras. ').bail(),
    check('face_pic').custom((value, {req}) => {
                            if(req.file.filename === ''){
                              console.log('no hay archivo subido');
                              return false;
                            }
                            else if(req.file.mimetype === 'image/jpg' || req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png' || req.file.mimetype === 'image/gif'  ){
                                return true; // return "non-falsy" value to indicate valid data"
                            }else{
                                console.log('el formato del archivo no es el indicado');
                                return false; // return "falsy" value to indicate invalid data
                            }
                            })
                          .withMessage('Debe subir un archivo, con formato gif, jpg, jpeg o png. ').bail() 
                        ];
module.exports = validations;