'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
      userId: 2,
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      name: 'LaLaurie Mansion',
      price: faker.commerce.price(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 3,
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      name: 'The Begich Towers',
      price: faker.commerce.price(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 4,
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      name: ' The Rosson House',
      price: faker.commerce.price(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 5,
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      name: 'Peel Mansion',
      price: faker.commerce.price(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 3,
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      name: 'Whaley House',
      price: faker.commerce.price(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 2,
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      name: 'Woodburn Mansion',
      price: faker.commerce.price(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Spots', null, {});
  }
};
