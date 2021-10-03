const express = require('express');

const config = require('config');

const app = express();

app.use(express.json());

const router = require('./routes/cities');

app.use('/api/cities', router);


app.listen(config.get('api.port'), () => {
    console.log('A API está funcionando!');
});