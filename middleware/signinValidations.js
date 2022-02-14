const {check, validationResult} = require('express-validator');
const res = require('express/lib/response');

const validations = [
    check('email').notEmpty().withMessage('Debe completar un email valido. ').bail()
                    .isEmail().withMessage('Debe completar un email valido. ').bail()
                    .custom(value => {
                        console.log('valido el correo de usuario no repetido desde middleware')
                        const db = require('../database/models');
                        return db.User.findByPk(value)
                        .then(user => {
                          if (user) {
                            true;
                            } else {
                              false
                            }
                          });
                        }).withMessage('El email ingresado no se encuentra en nuestros registros.').bail(),

    check('psw').notEmpty().withMessage('Debe completar una contraseña').bail()
                        ];
                        
module.exports = validations;