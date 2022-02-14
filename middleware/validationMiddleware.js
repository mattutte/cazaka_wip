const validations = [
    check('email').notEmpty().withMessage('Debe completar un email valido. ').bail()
                    .isEmail().withMessage('Debe completar un email valido. ').bail()
                    .custom(value => {
                        const db = require('../database/models');
                        return db.User.findByPk(value)
                        .then(user => {
                          if (user) {
                            false;
                            }
                          });
                        }).withMessage('E-mail debe ser unico. ').bail(),

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
    check('facer_pic').notEmpty().withMessage('Debe subir una foto. ').bail()
                        .custom((value, {req}) => {
                            if(req.files.mimetype === 'impage/jpg' || req.files.mimetype === '.jpeg' || req.files.mimetype === '.png' || req.files.mimetype === '.gif'  ){
                                return true; // return "non-falsy" value to indicate valid data"
                            }else{
                                return false; // return "falsy" value to indicate invalid data
                            }
                            })
                          .withMessage('Los formatos aceptados son jpg, jpeg y png. '), // custom error message that will be send back if the file in not a the right format. 
                        ];
                        
module.exports = validations;