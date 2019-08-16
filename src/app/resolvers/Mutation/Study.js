const { Study } = require('../../models');

module.exports = {
  createStudy: async (_, { data }) => {
    const study = await Study.create(data);

    if (data.paths && data.paths.length > 0) {
      await study.setPaths(data.paths);
    }

    if (data.references && data.references.length > 0) {
      await study.setReferences(data.references);
    }

    return study;
  },

  updateStudy: async (_, { filter, data }) => {
    const study = await Study.findByPk(filter.id);

    if (!study) {
      throw new Error('Study not found!');
    }

    await study.update(data);

    if (data.paths && data.paths.length > 0) {
      await study.setPaths(data.paths);
    }

    if (data.references && data.references.length > 0) {
      await study.setReferences(data.references);
    }

    return study;
  },

  deleteStudy: async (_, { filter }) => {
    const study = await Study.destroy({ where: { id: filter.id } });

    return study;
  },
};
