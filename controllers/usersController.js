const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    userInfo: (req, res) => {
        db.User.findOne({
            where: {
                email: req.params.email,
            }
        }).then((foundUser) => {
            return res.status(200).json(foundUser);
            // user_data = foundUser.toJSON();
            // user_data.email = '1234';
            // res.json(user_data);
        })
        .catch((error)=>{
            console.log(error);
            res.send(500);
        });
    }
}