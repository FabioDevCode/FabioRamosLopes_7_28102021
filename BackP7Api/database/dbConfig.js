const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 
    process.env.NAME_DB, 
    process.env.USER_DB, 
    process.env.MDP_DB,
    {
        host: process.env.HOST_DB,
        dialect: process.env.DIALECT_DB,
        operatorsAliases: false,
        port: process.env.PORT_DB,
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        define: {
            timestamps: false
        },
        logging: false
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/usersModel")(sequelize, Sequelize);
db.post = require("../models/postsModel")(sequelize, Sequelize);
db.comment = require("../models/commentsModel")(sequelize, Sequelize);

module.exports = db;