function variablesWithPrefix(prefix, properties, commentStyle) {
  return properties
    .map(function (prop) {
      let toRetProp = `${prefix + prop.name}: ${prop.value};`;

      if (prop.comment) {
        if (commentStyle === "short") {
          toRetProp = toRetProp.concat(` // ${prop.comment}`);
        } else {
          toRetProp = toRetProp.concat(` /* ${prop.comment} */`);
        }
      }

      return toRetProp;
    })
    .filter(function (strVal) {
      return !!strVal;
    })
    .join("\n");
}

module.exports = variablesWithPrefix;
