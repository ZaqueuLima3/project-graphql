module.exports = (sequelize, DataTypes) => {
  const ReferencesCategory = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
    },
    {}
  );

  return ReferencesCategory;
};
