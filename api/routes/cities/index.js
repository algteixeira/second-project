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

router.get('/:cityname', async (req, res) => {
    const cityName = req.params.cityname;
    let results;
    if (cityName.length == 2) {
        results = await TableModel.findAll({
            where: {
                state: cityName
            }
        })
    } else {
    //const city = new City({name: cityName});
        results = await TableModel.findAll({
            where: {
                name: cityName
            }
        })
    } 
    res.send(
        JSON.stringify(results)
    );

});


module.exports = router;