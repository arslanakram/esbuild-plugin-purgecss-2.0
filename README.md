# esbuild-plugin-purgecss-2

 <a href='https://www.npmjs.com/package/esbuild-plugin-purgecss-2' style='margin: 0 0.2rem;' />
    <img src='https://img.shields.io/npm/v/esbuild-plugin-purgecss-2' alt='npm version' height='18'>
  </a>

> based on [esbuild-plugin-purgecss](https://github.com/GitHubJiKe/esbuild-plugin-purgecss)

## Description

This allows you to pass content (html/css) in the plugin.

## Why I created this?

Please read here: [How To Setup Custom ESBuild with SCSS, PurgeCSS & LiveServer?](https://stackoverflow.com/questions/70325815/how-to-setup-custom-esbuild-with-scss-purgecss-liveserver)

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

## Complete Example on How to Setup a Custom ESBuild with SCSS, PurgeCSS & LiveServer?

Please refer to my github repository:
[custom-esbuild-with-scss-purgecss-and-liveserver](https://github.com/arslanakram/custom-esbuild-with-scss-purgecss-and-liveserver)
