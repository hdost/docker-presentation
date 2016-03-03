'use strict';

angular.module('dockerdemoappApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
