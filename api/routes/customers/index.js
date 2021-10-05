const routerCustomer = require('express').Router();

const TableModel = require('./model-customers');

const Customer = require('./Customer');


routerCustomer.get('/', async (req, res) => {
    try {
        if (req.query.full_name == undefined) {
            throw new Error('Missing customer name for searching');
        } 
        const customer = new Customer({full_name:req.query.full_name});
        const result = await customer.getByName()
        res.status(200);
        res.send(
            JSON.stringify(result)
        );
    } catch (error) {
        res.status(400)
        res.send(
            JSON.stringify({
                message: error.message
            })
        );
    } 
    }
);

routerCustomer.post('/', async(req, res) => {
    try {
        const receivedData = req.body;
        customer = new Customer(receivedData);
        await customer.create();
        res.status(201);
        res.send(
            JSON.stringify(customer)
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

routerCustomer.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = new Customer({id:id});
        const results = await customer.getById(id);
        if (results == null) {
            throw new Error('Theres no customer with this id');
        }
        res.status(200);
        res.send(
            JSON.stringify(results)
        );
    } catch(error) {
        res.status(404)
        res.send(
            JSON.stringify({
                message: error.message
            })
        )
    }

}); 

routerCustomer.patch('/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const customer = new Customer({id:id});
        const results = await customer.changeContent(req.body.full_name);

        res.status(204);
        res.end();

    } catch (error) {
        res.status(400);
        res.send(JSON.stringify({
            message: error.message
        }))
    }
});

routerCustomer.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = new Customer({id:id});
        const results = await customer.getById();
        if (results == null) {
            throw new Error('Theres no customer with this id');
        }
        customer.removeCustomer();
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