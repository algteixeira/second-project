const TableModelCities = require('../routes/cities/model-cities');
const TableModelCustomers = require('../routes/customers/model-customers');
TableModelCities
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso!')
    })
    .catch(console.log)

TableModelCustomers
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso!')
    })
    .catch(console.log)