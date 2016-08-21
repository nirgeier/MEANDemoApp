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
                'spec/*.js',
                '/photos/**/*.js'
            ]
        },
        jasmine_node: {
            options: {
                forceExit: false
            },
            spec: ['*.js']
        },

        // This task watch for file changes and executing the given tasks
        watch: {
            scripts: {
                files: [
                    'Gruntfile.js',
                    'spec/**/*.js',
                    '/photos/**/*.js',
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
    grunt.registerTask('default', 'compile');
    grunt.registerTask('compile', ['jshint']);

};