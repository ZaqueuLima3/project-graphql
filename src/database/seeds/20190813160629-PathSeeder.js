module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Paths',
      [
        {
          order: 1,
          description: 'Learn the basic sintaxe of node.js',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order: 2,
          description: 'Learn express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order: 3,
          description: 'Learn create routes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Paths', null, {});
  },
};
