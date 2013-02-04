module.exports = function (obj, properties) {
  return properties.reduce(function ( prev, p ) {
    prev[p] = obj[p];
    return prev;
  }, {});
};