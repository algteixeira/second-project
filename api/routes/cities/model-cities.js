const Sequelize = require('sequelize');
const instance = require('../../data-base');


const colums = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.ENUM('RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE',
        'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS',
        'MS', 'MT', 'GO', 'DF'),
        allowNull: false
    }
};

const options = {
    freezeTableName: true,
    tableName: 'cities',
    timestamps: true
};

module.exports = instance.define('cities', colums, options);