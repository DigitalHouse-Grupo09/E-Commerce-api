'use strict';

//
// constants
//
const alias = 'User';
const config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
    scopes: {
        fully: {
            include: ['status', 'role']
        }
    }
};

// include: ,

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
        id_user_status: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        id_role: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        full_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
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
        // status relationship
        Model.belongsTo(models.UserStatus, {
            as: 'status',
            foreignKey: 'id_user_status'
        });

        // role relationship
        Model.belongsTo(models.Role, {
            as: 'role',
            foreignKey: 'id_role'
        });
    };

    return Model;
};
