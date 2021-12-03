# esbuild-plugin-purgecss-2

 <a href='https://www.npmjs.com/package/esbuild-plugin-purgecss-2' style='margin: 0 0.2rem;' />
    <img src='https://img.shields.io/npm/v/esbuild-plugin-purgecss-2' alt='npm version' height='18'>
  </a>

> based on [esbuild-plugin-purgecss](https://github.com/GitHubJiKe/esbuild-plugin-purgecss)

## description

This allows you to pass content (html/css) in the plugin

## Usage

```shell
npm i -D esbuild-plugin-purgecss-2

```

```javascript
const glob = require("glob-all");
const purgecssPlugin2 = require("esbuild-plugin-purgecss-2")

esbuild.build({
    ...,
    plugins: [
        purgecssPlugin2({
            content: glob.sync([
                "./*.html",
                "./views/**/*.html",
                "./src/scripts/*.js",
                "./src/scripts/**/*.js",
            ])
        })
    ]
})
```
