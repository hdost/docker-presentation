/* globals $ */
'use strict';

angular.module('dockerdemoappApp')
    .directive('dockerdemoappAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
