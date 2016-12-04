 'use strict';

angular.module('dockerdemoappApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-dockerdemoappApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-dockerdemoappApp-params')});
                }
                return response;
            },
        };
    });