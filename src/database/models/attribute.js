'use strict';

//
// constants
//
const alias = 'Attribute';
const config = {
    timestamps: false,
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
        description: {
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
        Model.hasMany(models.ProductAttribute, {
            as: 'value',
            foreignKey: 'id_attribute'
        });
    };

    return Model;
};