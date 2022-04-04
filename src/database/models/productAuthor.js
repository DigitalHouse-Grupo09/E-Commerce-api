'use strict';

//
// constants
//
const alias = 'ProductAuthor';
const config = {
    tableName: 'product_authors',
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
        id_author: {
            type: dataTypes.BIGINT(20).UNSIGNED,
            allowNull: false
        }
    };

    //
    // sequelize define
    //
    const Model = sequelize.define(alias, columns, config);

    return Model;
};