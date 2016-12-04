'use strict';

angular.module('dockerdemoappApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


