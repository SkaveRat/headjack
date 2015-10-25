module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss',
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'imgsrc/',
                    src: ['*.{png,svg,jpg,gif}'],
                    dest: 'public/img/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass', 'imagemin']);
};
