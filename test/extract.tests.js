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
  
  it('should support nested properties', function () {
    var r = extract({foo: 123, bar: {baz: 789, boz: 101112}}, ['foo', ['bar', ['baz', 'boz']]]);
    
    r.hasOwnProperty('foo')
      .should.be.true;
    
    r.hasOwnProperty('bar')
      .should.be.true;
    
    r.hasOwnProperty('baz')
      .should.be.false;
    
    r.hasOwnProperty('boz')
      .should.be.false;
    
    r.bar.hasOwnProperty('baz')
      .should.be.true;
    
    r.bar.hasOwnProperty('boz')
      .should.be.true;
  });
});