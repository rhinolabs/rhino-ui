const figmaDocumentReducer = (acc, current) => {
  if (current.children) {
    const value = current.children.find((child) => child.type === 'TEXT' && child.name === 'value');
    const unit = current.children.find((child) => child.type === 'TEXT' && child.name === 'unit');
    if (value) {
      acc[current.name] = {
        value: value.characters,
        ...(unit && { unit: unit.characters }),
      };
    } else {
      acc[current.name] = current.children.reduce(figmaDocumentReducer, {});
    }
  }
  return acc;
};

const parseFigmaDocumentTokens = (document) => document.children.reduce(figmaDocumentReducer, {});

module.exports = parseFigmaDocumentTokens;
