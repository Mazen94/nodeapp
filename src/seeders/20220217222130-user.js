const { faker } = require('@faker-js/faker');

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    const users = [...Array(100)].map((_user) => (
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ))
    return queryInterface.bulkInsert('Users', users, {});
  },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};