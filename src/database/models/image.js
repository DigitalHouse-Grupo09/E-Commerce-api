'use strict';

//
// constants
//
const alias = 'Image';
const config = {
    tableName: 'product_images',
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
        src: {
            type: dataTypes.STRING,
            allowNull: false
        },
        priority: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: 1
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