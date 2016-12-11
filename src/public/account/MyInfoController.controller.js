(function() {
    'use strict';
    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['AccountService'];

    function MyInfoController(AccountService) {
        var MyInfoCtrl = this;

        MyInfoCtrl.getInfo = AccountService.getSInfo();

    }
})();
