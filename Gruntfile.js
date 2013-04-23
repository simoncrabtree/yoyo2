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
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

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
            less: {
                files: appRoot + '/style/*.less',
                tasks: ['less', 'livereload']
            },
            all: {
                files: [
                    appRoot + '/**/*.js',
                    appRoot + '/**/*.html'
                ],
                tasks: ['livereload']
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.livereload.options.port %>'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                reporters: ['growl', 'progress'],
                autoWatch: true
            },
            build: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        recess: {
            dist: {
                options: {
                    compile: true,
                    compress: false
                },
                files: {
                    'dist/app/style/style.css': ['app/style/theme1.less']
                }
            }
        },
        concat: {
            dist: {
                files: {
                    'dist/app/js/app.js': [
                        'app/js/**/*.js'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {src: 'server.js', dest: 'dist/server.js'},
                    {src: 'app/indexdist.html', dest: 'dist/app/index.html'},
                    {src: 'app/views/**/*', dest: 'dist/'},
                    {expand: true, cwd: 'app/libdist/', src: '*.js', dest: 'dist/app/lib/'}
                ]
            }
        },
        less: {
            options: {
                paths: ['app/style']
            },
            dev: {
                expand: true,
                cwd: 'app/style',
                src: '*.less',
                dest: 'app/style',
                ext: '.css'
            }
        }
    });

    grunt.registerTask('server', [
                       'livereload-start',
                       'connect',
                       'regarde'
    ]);

    grunt.registerTask('autotest', [
                       'karma:unit'
    ]);

    grunt.registerTask('build', [
                       'karma:build',
                       'concat:dist',
                       'recess:dist',
                       'copy:dist'
    ]);

};
