
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['concat'],
				options: {
					spawn: false
				},
			},
		},
		concat: {
			gopjs:{
				src:'js/**/*.js',
				dest:'all.js'
			}
		},
		uglify:{
			nenjs:{
				src:'all.js',
				dest:'all.min.js'
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).

	grunt.registerTask('default', ['watch']);

};