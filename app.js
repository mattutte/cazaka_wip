// ************ Require's ************
//const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
//const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

// ************ express() - (don't touch) ************
const app = express();

const recordarUsuario = require('./middleware/recordameMiddleware')	

// ************ Middlewares - (don't touch) ************
//app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
//app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// ************ Configurando Session ************
const session = require('express-session');
app.use(session({
    secret:'cazaca', 
    resave: true, 
    saveUninitialized: true, 
    /*cookie: {
        secure: false
    }*/
}));

// res local session permite que este disponible el valor session en todas las paginas para ver si estas loggeado
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});
app.use(recordarUsuario);

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************

const productAPIRouter = require('./routes/api/productAPIrouter');
app.use('/api/products/',productAPIRouter); 

const brandAPIRouter = require('./routes/api/brandAPIrouter');
app.use('/api/brands/',brandAPIRouter);

const mainRouter = require('./routes/mainRouter');
const usersAPIRouter = require('./routes/API/users');
app.use('/',mainRouter);
app.use('/api/usuarios',usersAPIRouter);



app.use((req, res, next) => {
    res.status(404).render('not-found');
})

app.listen(3001, () => {
    console.log("Servidor corriendo en el 3001");
});


module.exports = app;
