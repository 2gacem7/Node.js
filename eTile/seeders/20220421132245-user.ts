"use strict";

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Gacem",
        lastName: "BA",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John",
        lastName: "Smith",
        email: "john@smith.com",
        password: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
