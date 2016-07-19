
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['angular2/js/**/*.js'],
                tasks: ['concat'],

            }
        },
        concat: {
            gopjs:{
                src:['angular2/js/**/*.js'],
                dest:'angular2/all.js'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).

    grunt.registerTask('default', ['watch']);

};