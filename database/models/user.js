const { VIRTUAL } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {

        email: {
            type: dataTypes.STRING(100),
            primaryKey: true,
            notNull: true
        },
        passwd: {
            type: dataTypes.STRING,
            notNull: true
        },
        first_name: {
            type: dataTypes.STRING(200),
            notNull: true
        },
        last_name: {
            type: dataTypes.STRING(200),
            notNull: true
        },
        country: {
            type: dataTypes.STRING(200),
            notNull: true
        },
        face_pic: {
            type: dataTypes.STRING,
            notNull: true
        },
        admin_category: {
            type: dataTypes.TINYINT(1),
            notNull: true
        },
        adult: {
            type: dataTypes.TINYINT(1)
        },
        detailUrl: {
            type: dataTypes.VIRTUAL,
            notNull: false,
            get(){
                const url = '/api/usuarios/'+this.getDataValue('email');
                return url;
            }
        },
        imageUrl: {
            type: dataTypes.VIRTUAL,
            notNull: false,
            get(){
                const url = '/api/usuarios/'+this.getDataValue('email')+'/img';
                return url;
            }
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    
    const user = sequelize.define(alias, cols, config);

    // user.associate = function(models){
    //     user.hasMany(models.Product_rating, {
    //        as: "Product_rating",
    //        foreignKey: "user_email_rating"
    //         })
    //     };

    return user;
}