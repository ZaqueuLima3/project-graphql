module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Studies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      scopeDefinition: {
        type: Sequelize.STRING,
      },
      successDefinition: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Studies');
  },
};
