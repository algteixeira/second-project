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
}

module.exports = Customer