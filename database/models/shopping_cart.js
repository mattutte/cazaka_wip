module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true
        },
        email_user: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        q_products: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        total_price: {
            type: dataTypes.DECIMAL(2),
            notNull: true
        }
    };
    let config = {
        tableName: 'shopping_cart',
        timestamps: false
    }

    const shopping_cart = sequelize.define(alias, cols, config);

    shopping_cart.associate = function(models){
        shopping_cart.belongsToMany(models.Product, {
            as: "Product",
            through: "Shopping_cart_content",
            foreignKey: "shopping_cart",
            otherKey: "id_product",
            timestamps: false
             })
        };

    return shopping_cart
}