const { Path } = require('../../models');

module.exports = {
  createPath: async (_, { data }) => {
    const path = await Path.create(data);

    return path;
  },

  updatePath: async (_, { filter, data }) => {
    const path = await Path.findByPk(filter.id);

    if (!path) {
      throw new Error('Path not found!');
    }

    await path.update(data);

    return path;
  },

  deletePath: async (_, { filter }) => {
    const path = await Path.destroy({ where: { id: filter.id } });

    return path;
  },
};
