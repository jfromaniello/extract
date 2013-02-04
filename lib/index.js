module.exports = function (obj, properties) {
  return properties.reduce(function ( prev, p ) {
    if(obj.hasOwnProperty(p)){
      prev[p] = obj[p];
    }
    return prev;
  }, {});
};