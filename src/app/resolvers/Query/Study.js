const { Study, Path, Reference, Category } = require('../../models');

module.exports = {
  studies: async () => {
    const studies = await Study.findAll({
      include: [
        {
          model: Path,
          as: 'paths',
          through: { attributes: [] },
        },
        {
          model: Reference,
          as: 'references',
          through: { attributes: [] },
          include: [
            {
              model: Category,
              as: 'category',
            },
          ],
        },
      ],
    });

    return studies;
  },

  study: async (_, { filter }) => {
    const study = await Study.findOne({
      where: {
        id: filter.id,
      },
      include: [
        {
          model: Path,
          as: 'paths',
          through: { attributes: [] },
        },
        {
          model: Reference,
          as: 'references',
          through: { attributes: [] },
          include: [
            {
              model: Category,
              as: 'category',
            },
          ],
        },
      ],
    });

    return study;
  },
};
