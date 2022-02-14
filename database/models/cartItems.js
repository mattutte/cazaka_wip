module.exports = (sequelize, dataTypes) => {
    let alias = 'CartItems';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true
        },
        productId: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        cartId: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        sku: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        price: {
            type: dataTypes.DECIMAL(2),
            notNull: true
        },
        discount: {
            type: dataTypes.DECIMAL(2),
            notNull: true
        },
        quantity: {
            type: dataTypes.SMALLINT,
            notNull: true
        },
        ACTIVE: {
            type: dataTypes.TINYINT,
            notNull: true
        },
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
    };

    let config = {
        tableName: 'cart_item',
        timestamps: true
    }

    const cart_item = sequelize.define(alias, cols, config);

    return cart_item
}