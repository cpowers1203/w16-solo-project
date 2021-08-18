'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
      userId: 2,
      address: faker.street_adress(),
      city: faker.city(),
      state: faker.state(),
      country: faker.country(),
      name: 'LaLaurie Mansion',
      price: faker.pricetag()
      },
      {
      userId: 3,
      address: faker.street_adress(),
      city: faker.city(),
      state: faker.state(),
      country: faker.country(),
      name: 'The Begich Towers',
      price: faker.pricetag()
      },
      {
      userId: 4,
      address: faker.street_adress(),
      city: faker.city(),
      state: faker.state(),
      country: faker.country(),
      name: ' The Rosson House',
      price: faker.pricetag()
      },
      {
      userId: 5,
      address: faker.street_adress(),
      city: faker.city(),
      state: faker.state(),
      country: faker.country(),
      name: 'Peel Mansion',
      price: faker.pricetag()
      },
      {
      userId: 3,
      address: faker.street_adress(),
      city: faker.city(),
      state: faker.state(),
      country: faker.country(),
      name: 'Whaley House',
      price: faker.pricetag()
      },
      {
      userId: 2,
      address: faker.street_adress(),
      city: faker.city(),
      state: faker.state(),
      country: faker.country(),
      name: 'Woodburn Mansion',
      price: faker.pricetag()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Spots', null, {});
  }
};
