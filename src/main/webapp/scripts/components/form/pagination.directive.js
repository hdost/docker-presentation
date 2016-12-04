/* globals $ */
'use strict';

angular.module('dockerdemoappApp')
    .directive('dockerdemoappAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
