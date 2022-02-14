module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_rating';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            notNull: true
            },
        user_email_rating: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        rating: {
            type: dataTypes.INTEGER,
            notNull: true
        }
    };
    let config = {
        tableName: 'product_ratings',
        timestamps: false
    }
    
        
    const product_rating = sequelize.define(alias, cols, config);

    // product_rating.associate = function(models){
    //     product_rating.belongsTo(models.Product, {
    //        as: "Product",
    //        foreignKey: "product_id"
    //         });

    
    //     product_rating.belongsTo(models.User, {
    //        as: "User",
    //        foreignKey: "user_email_rating"
    //         })
    //     };

    return product_rating;
};