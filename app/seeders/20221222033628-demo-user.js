'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName : 'solo',
      lastName:'skadi',
      email: 'skadi@gmail.com',
      createdAt:new Date(),
      updatedAt : new Date()
    },
    {
      firstName : 'bayu',
      lastName:'tresna',
      email: 'bayu@gmail.com',
      createdAt:new Date(),
      updatedAt : new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
