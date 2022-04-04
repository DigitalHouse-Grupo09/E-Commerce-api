'use strict';

//
// constants
//
const alias = 'ProductAttribute';
const config = {
    tableName: 'product_attributes',
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
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_product: {
            type: dataTypes.BIGINT(20).UNSIGNED,
            allowNull: false
        },
        value: {
            type: dataTypes.STRING,
            allowNull: false
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
        // attribute relationship
        Model.belongsTo(models.Attribute, {
            as: 'attribute',
            foreignKey: 'id_attribute'
        });

        // product relationship
        Model.belongsToMany(models.Product, {
            as: 'products',
            through: config.tableName,
            foreignKey: 'id_attribute',
            otherKey: 'id_product',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            onDelete: 'cascade'
        });
    };

    return Model;
};