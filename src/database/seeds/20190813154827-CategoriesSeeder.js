module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Videos',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Books',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Documentations',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
