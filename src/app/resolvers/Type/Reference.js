const { Category } = require('../../models');

module.exports = {
  category: async Reference => {
    const category = await Category.findByPk(Reference.categoryId);

    return category || null;
  },
};
