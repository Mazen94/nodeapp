const { faker } = require('@faker-js/faker');

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    
    const tasks = [...Array(400)].map(_tasks => (
      {
      title: faker.lorem.sentence(),
      isCompleted: Math.floor(Math.random() * 2),
      userId: Math.floor(Math.random() * 5) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
 }))
    return queryInterface.bulkInsert('Tasks', tasks, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};