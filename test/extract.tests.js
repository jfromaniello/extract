var extract = require('../lib');

describe('extract', function () {
  it('generate a new object with just the specified properties', function () {
    var r = extract({foo: 123, bar: 456, baz: 789}, ['foo', 'bar']);
    
    r.hasOwnProperty('foo')
      .should.be.true;
    
    r.hasOwnProperty('bar')
      .should.be.true;

    r.hasOwnProperty('baz')
      .should.be.false;
  
  });

  it('should not include missing properties', function(){
    var r = extract({bar: 456, baz: 789}, ['foo', 'bar']);

    r.hasOwnProperty('foo')
      .should.be.false;
    
    r.hasOwnProperty('bar')
      .should.be.true;

    r.hasOwnProperty('baz')
      .should.be.false;
  });
});