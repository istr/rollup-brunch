var expect = require('chai').expect;
var Plugin = require('./');

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('is an object', function() {
    expect(plugin).to.be.ok;
  });

  it('has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('compiles and produces valid result', function(done) {
    var content = 'var a = 1;\nmodule.exports = a;';
    var expected = '(function (global, factory) {\n\ttypeof exports === \'object\' && typeof module !== \'undefined\' ? factory() :\n\ttypeof define === \'function\' && define.amd ? define(factory) :\n\t(factory());\n}(this, function () { \'use strict\';\n\n\tvar a = 1;\n\tmodule.exports = a;\n\n}));'

    plugin.compile({data: content, path: 'file.js'}).then(compiled => {
      expect(compiled.data).to.be.equal(expected);
      done();
    }, error => expect(error).not.to.be.ok);
  });

  it('compiles and produces valid result and sourcemap', function(done) {
    plugin = new Plugin({sourceMaps: true});

    var content = 'var a = 1;\nmodule.exports = a;';
    var expected = '(function (global, factory) {\n\ttypeof exports === \'object\' && typeof module !== \'undefined\' ? factory() :\n\ttypeof define === \'function\' && define.amd ? define(factory) :\n\t(factory());\n}(this, function () { \'use strict\';\n\n\tvar a = 1;\n\tmodule.exports = a;\n\n}));'
    var expectedMap = '{"version":3,"file":null,"sources":["file.js"],"sourcesContent":["var a = 1;\\nmodule.exports = a;"],"names":[],"mappings":";;;;;;CAAA,IAAI,IAAI,CAAJ;AACJ,CAAA,OAAO,OAAP,GAAiB,CAAjB;;"}';

    plugin.compile({data: content, path: 'file.js'}).then(compiled => {
      expect(compiled).to.be.an('object');
      expect(compiled.data).to.be.a('string');
      expect(compiled.data).to.equal(expected);
      expect(compiled.map).to.be.a('string');
      expect(compiled.map).to.equal(expectedMap);
      done();
    }, error => expect(error).not.to.be.ok);
  });
});
