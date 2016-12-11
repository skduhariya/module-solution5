(function() {
    "use strict";

    angular.module('common', [])
        .constant('ApiPath', 'https://skduhariya-angularjs.herokuapp.com')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();
