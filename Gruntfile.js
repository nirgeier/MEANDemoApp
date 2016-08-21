module.exports = function (grunt) {

    // Load all dependencies
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Set the configuration
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true
            },
            src: [
                'Gruntfile.js',
                'app.js',
                '/photos/**/*.js'
            ]
        },

        // This task watch for file changes and executing the given tasks
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: [
                    'Gruntfile.js',
                    'app.js',
                    '/photos/**/**',
                    '!/photos/data/**'
                ],
                tasks: ['default'],
                options: {
                    spawn: true
                }
            }
        }
    });

    // Register the grunt tasks
    grunt.registerTask('default', ['compile', 'jshint']);

};