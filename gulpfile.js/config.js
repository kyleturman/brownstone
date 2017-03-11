/* ---------------------------------------
    CONFIG
   --------------------------------------- */

// Project paths
var src     = './source/';
var dist    = './demo/';

var starting_file = 'brownstone.scss';

var config = {
  styles: {
    source: src + starting_file,
    dest: dist,
    autoprefixer: {
      browsers: ['> 5%', 'last 2 versions'],
      cascade: false
    }
  },

  server: {
    base: dist,
    port: 9000,
    host: '0.0.0.0'
  },

  clean: {
    all: [
      './.sass-cache'
    ]
  },

  watch: {
    livereload: dist + '**/*.html',
    styles: src + '**/*.scss',
    styles_output: dist + '**/*.css',
  }
};

module.exports = config;
