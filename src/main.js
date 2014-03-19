(function () {
    'use strict';
    requirejs.config({
        // alias libraries paths
        paths: {
            'domReady': '../bower_components/requirejs-domready/domReady',
            'angular': '../bower_components/angular/angular.min',
        },

        // shim modules that doesn't support AMD pattern
        shim: {
            'angular': {
                exports: 'angular'
            }
        },

        // starts RequireJs to load dependencies
        deps: ['./bootstrap']
    });
})();