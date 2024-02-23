const kebabCase = require('../../utils/kebab-case/kebab-case');

const customKebab = {
  name: 'name/cti/custom-kebab',
  type: 'name',
  transformer: function(prop, options = {}) {
    return kebabCase([options.prefix].concat(prop.path).join(' '));
  },
};

module.exports = customKebab;