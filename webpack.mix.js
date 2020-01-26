const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .styles('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.css')
   // .react('resources/js/react/index.js', 'public/js/index.js')
    .sourceMaps()
    .version();
