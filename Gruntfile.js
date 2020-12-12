
// Contendrá todo nuestro código 
module.exports = function(grunt) {

    // Inicializa un objeto de configuración para el proyecto actual
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        mochaTest: {

            test: {
                options: {
                  reporter: 'spec',
                },
                src: ['test/**/*.js']
            }
        },


        uglify: {
            build:{
                cmd:'npm',
                args:[
                    'build'
                ]
            },

        }
       

        
    });

    // Carga los plugins de Grunt
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-npm-install');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registra las tareas
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('build',['uglify:build']);
    grunt.registerTask('install',['npm-install']);
    
};