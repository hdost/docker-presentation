'use strict';

angular.module('dockerdemoappApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('docs', {
                parent: 'admin',
                url: '/docs',
                data: {
                    authorities: ['ROLE_ADMIN'],
                    pageTitle: 'API'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/admin/docs/docs.html'
                    }
                },
                resolve: {
                    
                }
            });
    });
