'use strict';

//
// constants
//
const alias = 'Price';
const config = {
    tableName: 'product_prices',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

//
// define
//
module.exports = (sequelize, dataTypes) => {
    //
    // columns
    //
    const columns = {
        id: {
            type: dataTypes.BIGINT(20).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_product: {
            type: dataTypes.BIGINT(20).UNSIGNED,
            allowNull: false
        },
        amount: {
            type: dataTypes.DECIMAL(8, 2),
            allowNull: false
        },
        currency: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: 'AR$'
        },
        discount_amount: {
            type: dataTypes.DECIMAL(8, 2),
            allowNull: false
        },
        discount_type: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: '%'
        }
    };

    //
    // sequelize define
    //
    const Model = sequelize.define(alias, columns, config);

    //
    // helpers
    //
    Model.associate = function (models) {
        // product relationship
        Model.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'id_product'
        });
    };

    return Model;
};