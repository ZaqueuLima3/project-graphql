const { Path } = require('../../models');

module.exports = {
  paths: async () => {
    const paths = await Path.findAll();

    return paths;
  },

  path: async (_, { filter }) => {
    const path = await Path.findByPk(filter.id);

    return path;
  },
};
