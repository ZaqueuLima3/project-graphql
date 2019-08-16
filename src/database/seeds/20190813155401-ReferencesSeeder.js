const { Category } = require('../../app/models');

module.exports = {
  up: async queryInterface => {
    const categories = await Category.findAll();

    const data = categories.map(category => ({
      url: 'http://www.somesite.com',
      categoryId: category.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return queryInterface.bulkInsert('References', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('References', null, {});
  },
};
