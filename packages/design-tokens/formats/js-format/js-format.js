const { format } = require("style-dictionary");
const createFileHeader = require("../../utils/create-file-header/create-file-header");

const jsFormat = {
  name: "javascript/esm",
  formatter(dictionary) {
    const generated = JSON.parse(format.json(dictionary));

    return Object.keys(generated).reduce((acc, key) => {
      return `${acc}\n export const ${key} = ${JSON.stringify(generated[key], null, 2)}`;
    }, `${createFileHeader()}\n`);
  },
};

module.exports = jsFormat;
