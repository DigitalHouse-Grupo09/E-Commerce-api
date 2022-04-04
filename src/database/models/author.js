'use strict';

//
// constants
//
const alias = 'Author';
const config = {
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
        full_name: {
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
        // product relationship
        Model.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_authors',
            foreignKey: 'id_author',
            otherKey: 'id_product',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            onDelete: 'cascade'
        });
    };

    return Model;
};