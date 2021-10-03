const router = require('express').Router();

const TableModel = require('./model-cities');


router.use('/', async (req, res) => {
    const results = await TableModel.findAll();
    res.send(
        JSON.stringify(results)
    );
});

module.exports = router;