module.exports = function (obj, properties) {
  var r = {};
  properties.forEach(function ( p ) {
    r[p] = obj[p];
  });
  return r;
};