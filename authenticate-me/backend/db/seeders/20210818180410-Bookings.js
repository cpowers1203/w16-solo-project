'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
      spotId: 2,
      userId: 2,
      startDate: new Date(),
      endDate: new Date()
      },
      {
      spotId: 1,
      userId: 3,
      startDate: new Date(),
      endDate: new Date()
      },
          {
      spotId: 2,
      userId: 2,
      startDate: new Date(),
      endDate: new Date()
      },
      {
      spotId: 3,
      userId: 4,
      startDate: new Date(),
      endDate: new Date()
      },
     {
      spotId: 4,
      userId: 5,
      startDate: new Date(),
      endDate: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
