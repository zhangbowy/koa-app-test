const Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'zhangbo',
    'root',
    'wy1314',
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

        // ไป SQLite ้็จ
        // storage: 'path/to/database.sqlite'
});


module.exports = sequelize;
