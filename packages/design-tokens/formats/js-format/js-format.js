const createFileHeader = require("../../utils/create-file-header/create-file-header");
const {format} = require("style-dictionary");

const jsFormat = {
  name: 'javascript/esm',
  formatter: function (dictionary) {

    const generated = JSON.parse(format['json'](dictionary));

    return Object.keys(generated).reduce((acc, key) => {
      return `${acc}\n export const ${key} = ${JSON.stringify(generated[key], null, 2)}`
    }, '');

  }
}

module.exports = jsFormat;
