'use strict';
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const memory = require('rollup-plugin-memory');

class RollupCompiler {
  constructor(config) {
    if (config == null) config = {};
    this.plugins = config.plugins && config.plugins.rollup || [
      babel({})
    ];
    this.map = !!config.sourceMaps ? 'linked' : 'none';
  }

  compile(params) {
    const path = params.path;
    const data = params.data;
    const plugins = this.plugins.slice();
    plugins.push(memory({
      contents: data
    }));
    return rollup.rollup({
      entry: path,
      plugins: plugins
    }).then((bundle) => {
      const compiled = bundle.generate({
        format: 'umd',
        sourceMap: this.map
      });
      var code;
      if (this.map === 'linked') {
        code = compiled.code.replace('//# sourceMappingURL=undefined.map\n', '');
      } else {
        code = compiled.code;
      }
      return {
        data: code,
        map: compiled.map.toString()
      };
    });
  }
}

RollupCompiler.prototype.brunchPlugin = true;
RollupCompiler.prototype.type = 'javascript';
RollupCompiler.prototype.extension = 'js';

module.exports = RollupCompiler;
