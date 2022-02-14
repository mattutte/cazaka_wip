module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name_brand: {
            type: dataTypes.STRING(200),
            notNull: true
        },
        country_origin: {
            type: dataTypes.STRING(200),
        },

    };
    let config = {
        tableName: 'brands',
        timestamps: false
    }

    const brand = sequelize.define(alias, cols, config);

    brand.associate = function(models){
        
        brand.hasMany(models.Product,{
           as: "Product",
           foreignKey: "brand_id"
        });
    };

    return brand;
}