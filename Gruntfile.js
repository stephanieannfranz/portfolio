/* Gruntfile for grunt-responsive-images */

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
          options: {
            engine: 'im',
            newFilesOnly: 'true',
            upscale: 'false',
          /* Change these */
            sizes: [{
              width: 1600,
              suffix: '_large_2x',
              quality: 50
            }, {
              width: 800,
              suffix: '_large_1x',
              quality: 50
            }, {
              width: 640,
              suffix: '_medium',
              quality: 50
            }, {
              width: 320,
              suffix: '_small',
              quality: 50
            }]
          },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    imageoptim: {
      myTask: {
        options: {
          jpegMini: false,
          imageAlpha: true,
          quitAfter: true
        },
        src: ['images_src']
      }
    },

    postcss: {
      options: {
        processors:[
          require('autoprefixer')(),
        ]
      },
      dist: {
        src:'css/src/style.css',
        dest:'css/dest/style.css',
      }
    },

    watch: {
      css: {
        files: ['css/src/*.css'],
        tasks: ['postcss'],
      },
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('images', ['imageoptim']);

};
