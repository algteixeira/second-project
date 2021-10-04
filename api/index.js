const express = require('express');

const config = require('config');

const app = express();

app.use(express.json());

const router = require('./routes/cities');

const routerCustomer = require('./routes/customers');

app.use('/api/cities', router);

app.use('/api/customers', routerCustomer);


app.listen(config.get('api.port'), () => {
    console.log('A API está funcionando!');
});