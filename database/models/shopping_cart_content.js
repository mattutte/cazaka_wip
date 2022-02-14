module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_cart_content';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true
        },
        id_product: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        shopping_cart: {
            type: dataTypes.INTEGER,
            notNull: true
        }
    };
    let config = {
        tableName: 'shopping_cart_content',
        timestamps: false
    }

    const shopping_cart_content = sequelize.define(alias, cols, config);

    return shopping_cart_content
}