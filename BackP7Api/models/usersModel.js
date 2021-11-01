const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: "email"
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        admin: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'users',
        timeStamp: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                  { name: "id" },
                ]
            }, {
                name: "email",
                unique: true,
                using: "BTREE",
                fields: [
                  { name: "email" },
                ]
            },
        ]
    });
};