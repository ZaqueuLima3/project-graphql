module.exports = (sequelize, DataTypes) => {
  const Study = sequelize.define(
    'Study',
    {
      scopeDefinition: DataTypes.STRING,
      successDefinition: DataTypes.STRING,
    },
    {}
  );

  Study.associate = models => {
    Study.belongsToMany(models.Path, {
      through: 'StudyPaths',
      as: 'paths',
      foreignKey: 'studyId',
    });

    Study.belongsToMany(models.Reference, {
      through: 'StudyReferences',
      as: 'references',
      foreignKey: 'studyId',
    });
  };

  return Study;
};
