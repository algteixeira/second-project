const routerCustomer = require('express').Router();

const TableModel = require('./model-customers');

const Customer = require('./Customer');


routerCustomer.get('/', async (req, res) => {
    try {
        if (req.query.full_name == undefined) {
            throw new Error('Missing customer name for searching');
        }
        const results = await TableModel.findAll({
            where: {
                full_name: req.query.full_name
            }
        }
        )
        res.status(200);
        res.send(
            JSON.stringify(results)
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
        const results = await TableModel.findOne({
            where: {
                id : id
            }
        })
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

routerCustomer.put('/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const results = req.body;
        const data = Object.assign({}, results, {id: id});
        const customer = new Customer(data);
        await customer.changeContent();
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
        const results = await TableModel.findOne({
            where: {
                id : id
            }
        })
        if (results == null) {
            throw new Error('Theres no customer with this id');
        }
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