const { Reference, Category } = require('../../models');

module.exports = {
  references: async () => {
    const references = await Reference.findAll({
      include: [
        {
          model: Category,
          as: 'category',
        },
      ],
    });

    return references;
  },

  reference: async (_, { filter }) => {
    const reference = await Reference.findOne({
      where: {
        id: filter.id,
      },
      include: [
        {
          model: Category,
          as: 'category',
        },
      ],
    });

    return reference;
  },
};
