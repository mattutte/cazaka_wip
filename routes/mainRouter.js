const express = require('express');
const router = express.Router();
//const { check } = require('express-validator');
var validator = require('express-validator');
const { check } = require('express-validator');

const checkAccess = require('../middleware/authMiddleware');
const redirect = require('../middleware/redirect');

// ************ Multer configuration ************
const multer = require('multer'); // require multer
const path = require('path');

var storage = multer.diskStorage({ // configuramos storage con destination y filename
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage }); // generar middleware upload

// ************ Validator configuration ************
                        
const validations = require('../middleware/signupValidationMiddleware');
const validations2 = require('../middleware/signupValidationMiddleware2');
const validations_signin = require('../middleware/signinValidations');
const validations_account = require('../middleware/profileUpdateMw');
const validationsProduct = require('../middleware/productValidationJIC');


// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const usersController = require('../controllers/usersController');
const productsController = require('../controllers/productsController');

/*** GET HOME ***/
router.get('/', mainController.home);



/*** GET ALL PRODUCTS ***/
router.get('/productsearch', mainController.productSearch);

/*** GET A PARTICULAR PRODUCT ***/
router.get('/product/:id', mainController.product);
router.get('/product/detail/:id', mainController.productDetails);

/*** ADD AND EDIT PRODUCT ***/
router.get('/admin', checkAccess, mainController.admin);

router.get('/addProduct', checkAccess, mainController.addProduct);
router.post('/addProduct', upload.any(), validationsProduct, mainController.store);
router.get('/cart', redirect.login, mainController.checkCart);

router.get('/product/pre_edit/:id', checkAccess, mainController.pre_edit);
router.get('/product/edit/:id', checkAccess, mainController.editProduct);
router.put('/product/:id', upload.any(), validationsProduct, mainController.update); // los datos del formulario vienen por body


/*** DELETE ONE PRODUCT***/
router.delete('/product/:id', mainController.destroy);

/*** USER ACCESS AND INFO***/

router.get('/signin', mainController.signin);
router.post('/signin', validations_signin, mainController.checksignin);

router.get('/signup', redirect.register, mainController.signup);
router.post('/signup', upload.single('face_pic'), validations, mainController.crearperfil);

router.get('/check', mainController.check);

router.post('/logout', mainController.logout);

router.get('/aboutUs', mainController.aboutUs);

router.get('/account', redirect.account, mainController.account);

router.get('/editAccount', redirect.account, mainController.editAccount);

router.put('/editAccount', upload.single('face_pic'), validations_account, mainController.updateAccount);

router.get('/faq', mainController.faq);

// router.get('/editProfile/:id', redirect.account, mainController.editProfile);
// router.post('/editProfile/:id', upload.single('face_pic'), validations, mainController.updateProfile);

/*** SHOPPING CART ACCESS***/
router.get('/shopping-cart', mainController.shoppingcart);

router.get('/test', mainController.test)


//APIs
router.get('/users/:email', usersController.userInfo);
router.get('/files/products', productsController.productsList);


module.exports = router;