module.exports = function (grunt) {
    grunt.initConfig({

        /**
         * RESTful API
         *
         * @see http://localhost:3000
         * @see https://github.com/tfiwm/grunt-json-server
         */
        'json_server': {
            custom_options: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    db: 'api/db.json'
                }
            }
        },

        /**
         * Frontend Web Server
         *
         * @see http://localhost:8000
         */
        'connect': {
            'frontend': {
                options: {
                    port: 8000,
                    keepalive: true,
                    base: 'app',
                    livereload: true,
                    open: true
                }
            }
        },

        /**
         * Watch for any changes to web server files and reload
         */
        'watch': {
            options: {
                livereload: true
            },
            taskName: {
                files: ["app/**.*"]
            }
        },

        /**
         * Concurrently run both web server and RESTful API
         */
        'concurrent': {
            'server': {
                tasks: ['connect:frontend', 'json_server', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-json-server');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'concurrent:server'
    ]);
};