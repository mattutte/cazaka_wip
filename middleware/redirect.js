let redirect = {
    login: (req, res, next) => {
        if(!req.session.loggedin){
            res.redirect('/signin');
        } else {
            next();
        }
    },
    account: (req, res, next) => {
        if(!req.session.loggedin){
            res.redirect('/signin');
        } else {
            next();
        }
    },
    register: (req, res, next) => {
        if(!req.session.loggedin){
            next();
        } else {
            res.redirect('/account');
        }
    },
}

module.exports = redirect;