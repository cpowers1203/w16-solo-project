'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        spotId: 1,
        url: 'https://news.onecountry.com/wp-content/uploads/2017/12/origin-771.png',
      createdAt: new Date(),
      updatedAt: new Date()
     },
       {
        spotId: 2,
        url: 'https://learnex.com.mx/home/wp-content/uploads/2017/11/haunted-house-768x432.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
     },
       {
        spotId: 3,
        url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Floveincorporated.blob.core.windows.net%2Fcontentimages%2Fgallery%2Ff290fa79-6269-4f76-b53d-d53dc435a940-spooky-abandoned-homes-haunted-wyckoff-villa.jpg&imgrefurl=https%3A%2F%2Fwww.loveproperty.com%2Fgallerylist%2F74504%2Fthe-worlds-most-spooky-abandoned-houses&tbnid=bX-AK6HX40iuyM&vet=12ahUKEwi7tJvmsLvyAhVDYK0KHeCnCNsQMygMegUIARDqAQ..i&docid=JKswgpSQLnmvwM&w=940&h=625&q=spooky%20houses&ved=2ahUKEwi7tJvmsLvyAhVDYK0KHeCnCNsQMygMegUIARDqAQ',
      createdAt: new Date(),
      updatedAt: new Date()
     },
       {
        spotId: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphX42z9w8Q0F4f5Q9P6gmylYwU0BlzayBfA&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date()
     },
       {
        spotId: 5,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKc-QLJ8Guw068KdMRP-J6ThGylnmYNBC3_g&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date()
     },
       {
        spotId: 6,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7xvrrZ7ke_UOdC4tr_VAEvT0OxX3aOaGmg&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date()
     }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};
