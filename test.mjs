import { expect } from 'chai';
import { RollupCompiler } from './index.js';

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new RollupCompiler({});
  });

  it('is an object', function() {
    expect(plugin).to.be.ok;
  });

  it('has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('compiles and produces valid result', function() {
    var content = 'export function a(x,y){\nreturn x+y;\n}';
    var expected = "(function (global, factory) {\n"
      + "\ttypeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :\n"
      + "\ttypeof define === 'function' && define.amd ? define(['exports'], factory) :\n"
      + "\t(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.file = global.file || {}, global.file.js = {})));\n"
      + "})(this, (function (exports) { 'use strict';\n\n"
      + "\tfunction a(x,y){\n"
      + "\treturn x+y;\n"
      + "\t}\n\n"
      + "\texports.a = a;\n\n"
      + "}));\n";
    return plugin.compile({data: content, path: 'file.js'}).then(compiled => {
      expect(compiled.data).to.be.equal(expected);
    }, error => expect(error).not.to.be.ok);
  });

  it('compiles and produces valid result and sourcemap', function() {
    plugin = new RollupCompiler({plugins: {rollup: {sourcemap: true}}});

    var content = 'export const a = 1;';
    var expected = "(function (global, factory) {\n"
      + "\ttypeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :\n"
      + "\ttypeof define === 'function' && define.amd ? define(['exports'], factory) :\n"
      + "\t(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.file = global.file || {}, global.file.js = {})));\n"
      + "})(this, (function (exports) { 'use strict';\n\n"
      + "\tconst a = 1;\n\n"
      + "\texports.a = a;\n\n"
      + "}));\n";
    var expectedMap = '{"version":3,"file":"file.js","sources":["file.js"],'
      + '"sourcesContent":["' + content + '"],'
      + '"names":[],"mappings":";;;;;;AAAY,OAAC,CAAC,GAAG;;;;;;;;"}';

    return plugin.compile({data: content, path: 'file.js'}).then(compiled => {
      expect(compiled).to.be.an('object');
      expect(compiled.data).to.be.a('string');
      expect(compiled.data).to.equal(expected);
      expect(compiled.map).to.be.a('string');
      expect(compiled.map).to.equal(expectedMap);
    }, error => expect(error).not.to.be.ok);
  });
});
