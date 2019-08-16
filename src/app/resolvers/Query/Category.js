const { Category } = require('../../models');

module.exports = {
  categories: async () => {
    const categories = await Category.findAll();

    return categories;
  },

  category: async (_, { filter }) => {
    const category = await Category.findByPk(filter.id);

    return category;
  },
};
