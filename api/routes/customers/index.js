const routerCustomer = require('express').Router();

const TableModel = require('./model-customers');

const Customer = require('./Customer');


routerCustomer.get('/', async (req, res) => {
    if (req.query.full_name != undefined) {
        const results = await TableModel.findOne({
            where: {
                full_name: req.query.full_name
            }
        }
        )
        res.send(
            JSON.stringify(results)
        );
    } 
});

routerCustomer.post('/', async(req, res) => {
    const receivedData = req.body;
    customer = new Customer(receivedData);
    await customer.create();
    res.send(
        JSON.stringify(customer)
    );
});

routerCustomer.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (id == undefined) {
        res.send(
            console.log('Undefined')
        )
    }
    const results = await TableModel.findOne({
        where: {
            id : id
        }
    })
    
    res.send(
        JSON.stringify(results)
    );

}); 

routerCustomer.put('/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const results = req.body;
        const data = Object.assign({}, results, {id: id});
        const customer = new Customer(data);
        await customer.changeContent();
        res.end();

    } catch (error) {
        res.send(JSON.stringify({
            message: error.message
        }))
    }
});

routerCustomer.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = new Customer({id: id});
        const results = await TableModel.findOne({
            where: {
                id : id
            }
        })
        TableModel.destroy({
            where: {
                id: id
            }
        })
        res.status(204);
        res.end();
    } catch (error) {
        res.status(404);
        res.send(
            JSON.stringify(
                {
                    message: error.message
                }
            )
        )
    }
});


module.exports = routerCustomer;