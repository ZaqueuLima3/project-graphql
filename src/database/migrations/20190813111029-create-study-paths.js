module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudyPaths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studyId: {
        type: Sequelize.INTEGER,
        references: { model: 'Studies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      pathId: {
        type: Sequelize.INTEGER,
        references: { model: 'Paths', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
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
    return queryInterface.dropTable('StudyPaths');
  },
};
