const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('posts', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        media: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'posts',
        timeStamp: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "fk_posts_userId",
                using: "BTREE",
                fields: [
                    { name: "userId" },
                ]
            },
        ]
    });
};