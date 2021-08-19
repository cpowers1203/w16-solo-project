'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 3,
        spotId: 1,
        review: 'Extremely spooky, needed my blankey!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
       {
        userId: 4,
        spotId: 1,
        review: 'Was absolutely shaking in my boots!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
        {
        userId: 5,
        spotId: 2,
        review: 'This place is as spooky as you think it is!!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
       {
        userId: 6,
        spotId: 2,
        review: 'Dont come here alone!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
        {
        userId: 2,
        spotId: 3,
        review: 'Heard someone calling my name the whole night dont follow the voice!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
       {
        userId: 6,
        spotId: 3,
        review: 'Still having nightmares about this place!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
        {
        userId: 2,
        spotId: 4,
        review: 'Saw a women in a white dress behind the house! Then poof shes gone!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        userId: 3,
        spotId: 4,
        review: 'The most haunted place ive ever been in!!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
        {
        userId: 4,
        spotId: 5,
        review: 'Heard whispers, and footsteps outside the door the whole time!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
        {
        userId: 6,
        spotId: 5,
        review: 'These ghosts where running a track meet in the house!!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        userId: 5,
        spotId: 6,
        review: 'Woke up in a cold sweat to someone staring at me in the corner of my room!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
       {
        userId: 3,
        spotId: 6,
        review: 'The ghost took my money!!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
