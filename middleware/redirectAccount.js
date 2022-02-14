function redirectAccount(req, res, next){
    if(!req.session.loggedin){
        next();
    } else {
        res.redirect('/account');
    }
}

module.exports = redirectAccount;