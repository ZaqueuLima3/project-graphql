module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudyReferences', {
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
      referencesId: {
        type: Sequelize.INTEGER,
        references: { model: 'References', key: 'id' },
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
    return queryInterface.dropTable('StudyReferences');
  },
};
