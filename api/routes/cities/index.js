const router = require('express').Router();

const TableModel = require('./model-cities');

const City = require('./City');


router.get('/', async (req, res) => {
    const results = await TableModel.findAll();
    res.send(
        JSON.stringify(results)
    );
});

router.post('/', async(req, res) => {
    const receivedData = req.body;
    city = new City(receivedData);
    await city.create();
    res.send(
        JSON.stringify(city)
    );
});

module.exports = router;