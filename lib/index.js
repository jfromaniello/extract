function extract (obj, properties) {
  return properties.reduce(function ( prev, p ) {
    if (Array.isArray(p)) {
      prev[p[0]] = extract(obj[p[0]], p[1]);
    } else if(obj.hasOwnProperty(p)){
      prev[p] = obj[p];
    }
    return prev;
  }, {});
}

module.exports = extract;