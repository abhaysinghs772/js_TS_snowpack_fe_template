// snowpack.config.js
module.exports = {
    mount: {
        src: '/',
    },
    plugins: [
        '@snowpack/plugin-typescript',
    ],
    buildOptions: {
        htmlFragments: true,
    },
};
  