module.exports = (sequelize, DataTypes) => {
  const Reference = sequelize.define(
    'Reference',
    {
      categoryId: DataTypes.INTEGER,
      url: DataTypes.STRING,
    },
    {}
  );

  Reference.associate = models => {
    Reference.belongsToMany(models.Study, {
      through: 'StudyReferences',
      as: 'references',
      foreignKey: 'referencesId',
    });

    Reference.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };

  return Reference;
};
