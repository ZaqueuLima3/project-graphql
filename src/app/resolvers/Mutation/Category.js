const { Category } = require('../../models');

module.exports = {
  createCategory: async (_, { data }) => {
    const categoryExist = await Category.findOne({
      where: {
        name: data.name,
      },
    });

    if (categoryExist) {
      throw new Error('Category already exist!');
    }

    const category = await Category.create(data);

    return category;
  },

  updateCategory: async (_, { filter, data }) => {
    const category = await Category.findByPk(filter.id);

    if (!category) {
      throw new Error('Category not found!');
    }

    if (data.name !== category.name) {
      const categoryExist = await Category.findOne({
        where: {
          name: data.name,
        },
      });

      if (categoryExist) {
        throw new Error('Category already exist!');
      }
    }

    await category.update(data);

    return category;
  },

  deleteCategory: async (_, { filter }) => {
    const category = await Category.destroy({ where: { id: filter.id } });

    return category;
  },
};
