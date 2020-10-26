'use strict';

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
        }
    });

    // Carga los plugins de Grunt
    grunt.loadNpmTasks('grunt-mocha-test');

    // Registra las tareas
    grunt.registerTask('test', ['mochaTest']);
    
};