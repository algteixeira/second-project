const TableModel = require('../routes/cities/model-cities');

TableModel
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso!')
    })
    .catch(console.log)