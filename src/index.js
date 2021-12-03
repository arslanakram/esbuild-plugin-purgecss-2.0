module.exports = function purgecssPlugin(options) {
    return {
        name: 'purgecss',
        setup(build) {
            if (!build.initialOptions.metafile) {
                throw new Error('You should set metafile true to use this plugin.');
            }
            const { PurgeCSS } = require('purgecss');
            const path = require('path');
            const fs = require('fs');

            build.onEnd(async (args) => {
                const outputKeys = Object.keys(args.metafile.outputs);
                const genFilter = (postfix) => (k) => k.endsWith(postfix);

                const css = outputKeys.filter(genFilter('.css'));
                const opts = options ? options : {};

                const res = await new PurgeCSS().purge({ ...opts, css: css });

                for (let index = 0; index < res.length; index++) {
                    const { file, css } = res[index];
                    await fs.promises.writeFile(file, css);
                }
            });
        },
    };
};
