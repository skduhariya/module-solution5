(function() {
    'use strict';
    angular.module('public')
        .controller('SignUpController', SignUpController);
    SignUpController.$inject = ['AccountService', 'MenuService'];

    function SignUpController(AccountService, MenuService) {
        var SignupCtrl = this;

        SignupCtrl.rexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        SignupCtrl.rex = "\\d+";

        SignupCtrl.firstName = '';
        SignupCtrl.lastName = '';
        SignupCtrl.emailAdd = '';
        SignupCtrl.phoneNo = '';
        SignupCtrl.fmenu = '';
        SignupCtrl.emptyValue = false;
        SignupCtrl.signupFlag = AccountService.signupFlag;

        //  console.log("out side firstName: ", SignupCtrl.firstName);

        SignupCtrl.SignUp = function() {
            //    console.log("inside side firstName: ", SignupCtrl.firstName);
            //  SignupCtrl.signupFlag = false;
            AccountService.SignUp(SignupCtrl.firstName, SignupCtrl.lastName, SignupCtrl.emailAdd, SignupCtrl.phoneNo, SignupCtrl.fmenu);



        };
        //    console.log("SignupCtrl.signupFlag:service ", SignupCtrl.signupFlag);

        SignupCtrl.getFavorite = function() {
            if (SignupCtrl.fmenu.trim() !== "") {
                MenuService.getMenuItems(SignupCtrl.fmenu.toUpperCase()).then(function(response) {
                    //    console.log("response", JSON.stringify(response));
                    //    console.log("response['menu_items'].length: ", response['menu_items'].length);
                    if (response['menu_items'].length === 0) {
                        //      console.log("inside if");
                        SignupCtrl.emptyValue = true;
                    } else {
                        //    console.log("inside else");
                        SignupCtrl.emptyValue = false;
                    }

                    //console.log(SignupCtrl.emptyValue);

                }).catch(function(error) {
                    console.log("errorr: ", error);
                });
            }
            // sole.log("SignupCtrl.emptyValue: ", SignupCtrl.emptyValue);

        }

        //  SignupCtrl.emptyValue = MenuService.getEmptyMsg;
        //  console.log("SignupCtrl.emptyValue: ", SignupCtrl.emptyValue);
    }

})();
