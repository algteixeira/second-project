const TableCustomers = require('./model-customers');
const TableModel = require('./model-customers');

class Customer {
    constructor({id, full_name, gender, birthday, age, city, createdAt, updatedAt}) {
        this.id = id;
        this.full_name = full_name;
        this.gender = gender;
        this.birthday  = birthday;
        this.age = age;
        this.city = city;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async create() {
        const result = await TableCustomers.create({
            full_name: this.full_name,
            gender: this.gender,
            birthday: this.birthday,
            age: this.age,
            city: this.city
        });

        this.id = result.id;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }

    async getById(){
        const results = await TableCustomers.findOne({
            where: {
                id : this.id
            }
        })
        return results;
    }

    async getByName(){
        const results = await TableCustomers.findAll({
            where: {
                full_name : this.full_name
            }
        })
        return results;
    }

    async changeContent(full_name) {
        if (full_name == null || full_name == undefined) {
            throw new Error('no name to update');
        } 
        if (typeof(full_name) != 'string') {
            throw new Error('invalid name format');
        }
        await TableModel.update({
            full_name: full_name
        },
        {
            where: {
                id: this.id
            }
        });
    }

    async removeCustomer () {
        await TableCustomers.destroy({
            where: {
                id: this.id
            }
        });
    }

}

module.exports = Customer