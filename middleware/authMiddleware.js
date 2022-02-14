function authMiddleware(req, res, next) {
    if (req.session.loggedin != undefined){
        if(req.session.admin == 1){
            next();
        }else{
            req.session.destroy(null);
            res.clearCookie('usuarioRecordado');
            res.render('unauthorized');
        }
    } else{
        req.session.destroy(null);
        res.clearCookie('usuarioRecordado');
        res.render('unauthorized');
        //next();
    }
}

module.exports = authMiddleware;