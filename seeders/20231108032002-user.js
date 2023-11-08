"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        email: "dhjska@gmail.com",
        username: "john",
        password: "12345",
      },
      {
        name: "Jane Doe",
        email: "dsahjfvdas@gmail.com",
        username: "jane",
        password: "12345",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
