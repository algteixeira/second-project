const router = require('express').Router();

const TableModel = require('./model-cities');

const City = require('./City');


router.get('/', async (req, res) => {
    try {
        let results;
        let cities;
        if (req.query.name == undefined && req.query.state == undefined) {
            throw new Error('Please, insert a parameter to search');
        }
        else if (req.query.name != undefined) {
            cities = new City({name:req.query.name});
            results = await cities.getByName();
        }
        else if (req.query.state != undefined) {
            cities = new City({state:req.query.state});
            results = await cities.getByState();
        }
        res.status(200);
        res.send(
            JSON.stringify(results)
        );
    } catch(error) {
        res.status(400);
        res.send(
            JSON.stringify({
                message: error.message
            })
        );
    }
});

router.post('/', async(req, res) => {
    try{
        const receivedData = req.body;
        city = new City(receivedData);
        await city.create();
        res.status(201);
        res.send(
            JSON.stringify(city)
        );
    } catch (error) {
        res.status(400);
        res.send(
            JSON.stringify({
                message: error.message
            })
        );
    }
});




module.exports = router;