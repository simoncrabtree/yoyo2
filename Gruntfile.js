'use strict';

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};
var appRoot = 'app';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-open');

  grunt.initConfig({
    connect: {
      options: {
        base: appRoot
      },
      livereload: {
        options: {
          port: 9000,
          middleware: function (connect, options) {
            return [lrSnippet, mountFolder(connect, options.base)];
          }
        }
      }
    },
    regarde: {
      all: {
        files: appRoot + '/**/*.*',
        tasks: ['livereload']
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.livereload.options.port %>'
      }
    }
  });

  grunt.registerTask('server', [
   'livereload-start',
   'connect',
   'regarde'
  ]);
};
