## rollup-brunch [![Build Status](https://github.com/istr/rollup-brunch/actions/workflows/ci-test.yml/badge.svg)](https://github.com/istr/rollup-brunch/actions/workflows/ci-test.yml)
Adds [Rollup](http://rollupjs.org/) support to
[brunch](http://brunch.io).

## Usage
Install the plugin via npm with `npm install --save rollup-brunch`.

Or, do manual install:

* Add `"rollup-brunch": "x.y.z"` to `package.json` of your brunch app.
  Pick a plugin version that corresponds to your minor (y) brunch version.
* If you want to use the git version of the plugin, add
`"rollup-brunch": "brunch/rollup-brunch"`.

## Configuration

Accepts the same options as rollup.

### Example: Babel

To use with Babel, install `@rollup/plugin-babel` and configure brunch like this:

```js
plugins: {
  rollup: {
    plugins: [require('@rollup/plugin-babel')({
      babelHelpers: 'bundled'
    })]
  }
}
```
