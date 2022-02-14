module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
    };

    let config = {
        tableName: 'cart',
        timestamps: true
    }

    const cart = sequelize.define(alias, cols, config);

    return cart
}