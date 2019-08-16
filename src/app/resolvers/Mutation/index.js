const Category = require('./Category');
const Reference = require('./Reference');
const Path = require('./Path');
const Study = require('./Study');

module.exports = {
  ...Category,
  ...Reference,
  ...Path,
  ...Study,
};
