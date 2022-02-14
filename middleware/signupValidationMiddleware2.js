const {check, validationResult} = require('express-validator');
const res = require('express/lib/response');

const validations =[
    check('email').notEmpty().withMessage({message: 'El email es obligatorio', errorCode: 'email-1'})
                    .isEmail().withMessage({message: 'Debe completar un email valido', errorCode: 'email-2'})
                    .isLength({min: 2}).withMessage({message: 'Debe tener un mínimo de 2 caracteres', errorCode: 'email-3'})
                    .custom((value) => {
                        const db = require('../database/models');
                        let existingUser = db.User.findByPk(value);
                        //console.log(existingUser)
                        return existingUser
                       .then(user => {
                         console.log(user);
                         if (user != null) {
                           return Promise.reject({message: "El email ya esta en uso", errorCode: 'email-4'});
                         }
                       });
                     }),
    check('psw').notEmpty().withMessage({message: 'La contraseña es obligatoria', errorCode: 'pass-1'})
                .isLength(8).withMessage({message: 'Debe completar una clave de al menos 8 cifras', errorCode: 'pass-2'})
                .custom((value,{req}) =>{
                    //console.log('pass1 ='+value)
                    //console.log('pass2 ='+req.body.pswrepeat)
                    if(value !== req.body.psw2){
                        throw new Error ();
                    }
                    return true;
                }).withMessage({message: 'Las contraseñas no coinciden', errorCode: 'pass-3'}),
    
    check('pais').notEmpty().withMessage({message: 'Debe informar su pais', errorCode: 'ctry-1'}).bail(),
    check('first_name').notEmpty().withMessage({message: 'Debe informar su nombre', errorCode: 'fname-1'}).bail()
                        .isLength(2).withMessage({message: 'Su nombre o apellido debe contar con mas de dos letras', errorCode: 'fname-2'}).bail(),
    check('last_name').notEmpty().withMessage({message: 'Debe informar su apellido', errorCode: 'lname-1'}).bail()
                      .isLength(2).withMessage({message: 'Su nombre o apellido debe contar con mas de dos letras', errorCode: 'lname-2'}).bail(),
    check('face_pic').notEmpty().withMessage({message: 'Debe subir una foto', errorCode: 'pic-1'}).bail()
                      .custom((value, {req}) => {
                          if(req.file){
                              return true; // return "non-falsy" value to indicate valid data"
                          }else{
                              return ({message: 'Los formatos aceptados son jpg, jpeg y png', errorCode: 'pic-2'}); // return "falsy" value to indicate invalid data
                          }
                          })
    
]
module.exports = validations;