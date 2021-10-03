const TableCities = require('./model-cities');

class City {
    constructor({id, name, state, createdAt, updatedAt}) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async create() {
        const result = await TableCities.create({
            name: this.name,
            state: this.state
        });

        this.id = result.id;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }
}

module.exports = City