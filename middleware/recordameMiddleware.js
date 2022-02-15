function recordameMiddleware(req, res, next){
    console.log("Valido session desde middleware -> recordar usuario es: "+req.cookies.usuarioRecordado)
    if (req.cookies.usuarioRecordado != undefined){
        req.session.userId = req.cookies.usuarioRecordado;
        req.session.loggedin = true;
    }
    next();
}

module.exports = recordameMiddleware;