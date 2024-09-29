'use strict';

import { rollup } from 'rollup';

export class RollupCompiler {

  constructor(config) {
    if (config == null) config = {};
    var pluginConfig = config.plugins && config.plugins.rollup || {};
    this.config = pluginConfig;
    this.extension = pluginConfig.extension || 'js';
    this.plugins = pluginConfig.plugins || [];
    delete pluginConfig.extension;
  }

  compile(params) {
    const path = params.path;
    const data = params.data;
    const config = this.config;
    const plugins = this.plugins.slice();
    plugins.unshift({
      name: 'rollup-plugin-brunch',
      resolveId() { return path; },
      load() { return { code: data }; }
    });
    return rollup({
      input: path,
      plugins: plugins
    }).then(bundle => bundle.generate({
      format: config.format || 'umd',
      name: path,
      sourcemap: config.sourcemap ? 'hidden' : false
    })).then(({ output }) => {
      const compiled = output[0];
      return {
        data: compiled.code,
        map: compiled.map ? compiled.map.toString() : null
      };
    });
  }
}

RollupCompiler.prototype.brunchPlugin = true;
RollupCompiler.prototype.type = 'javascript';
RollupCompiler.prototype.extension = 'js';
