module.exports = (sequelize, DataTypes) => {
  const Path = sequelize.define(
    'Path',
    {
      order: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {}
  );

  Path.associate = models => {
    Path.belongsToMany(models.Study, {
      through: 'StudyPaths',
      as: 'paths',
      foreignKey: 'pathId',
    });
  };

  return Path;
};
