const { Reference, Category } = require('../../models');

module.exports = {
  createReference: async (_, { data }) => {
    const category = await Category.findByPk(data.categoryId);

    if (!category) {
      throw new Error('Category not found!');
    }

    const reference = await Reference.create(data);

    return reference;
  },

  updateReference: async (_, { filter, data }) => {
    const reference = await Reference.findByPk(filter.id);
    const category = await Category.findByPk(data.categoryId);

    if (!reference) {
      throw new Error('Reference not found!');
    }

    if (!category) {
      throw new Error('Category not found!');
    }

    await reference.update(data);

    return reference;
  },

  deleteReference: async (_, { filter }) => {
    const reference = await Reference.destroy({ where: { id: filter.id } });

    return reference;
  },
};
