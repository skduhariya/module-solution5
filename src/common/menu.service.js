(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];

    function MenuService($http, ApiPath) {
        var service = this;


        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };

        //  service.getEmptyMsg = false;

        service.getMenuItems = function(category) {

            //  console.log("inside ervice.getMenuItems ", category);
            var config = {};
            if (category) {
                config.params = {
                    'category': category
                };
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
                //    console.log("(response.data['menu_items']).trim().length: ", (response.data['menu_items']).length);
                // if ((response.data['menu_items']).length === 0) {
                //     service.getEmptyMsg = true;
                // } else {
                //     service.getEmptyMsg = false;
                // }
                //
                // console.log("service.getEmptyMsg: ", service.getEmptyMsg);
                return response.data;
            });
        };



    }



})();
