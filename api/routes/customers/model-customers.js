const Sequelize = require('sequelize');
const instance = require('../../data-base');


const colums = {
    full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('MASCULINO', 'FEMININO', 'OUTRO', 'PREFIRO NÃO DIZER'),
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    city: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../cities/model-cities'),
            key: 'id'
        }
    }
};

const options = {
    freezeTableName: true,
    tableName: 'customers',
    timestamps: true
};

module.exports = instance.define('customers', colums, options);