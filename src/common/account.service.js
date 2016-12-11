(function() {
    'use strict';

    angular.module('public')
        .service('AccountService', AccountService);

    function AccountService() {
        var service = this;
        var MyInfo = [];
        service.signupFlag = true;

        service.SignUp = function(firstName, lastName, emailAdd, phoneNo, fmenu) {
            var info = {
                fname: firstName,
                lname: lastName,
                email: emailAdd,
                phone: phoneNo,
                favorite: fmenu
            };
            MyInfo.push(info);

            //    console.log("MyInfo: ", JSON.stringify(MyInfo));
        };

        service.getSInfo = function() {
            //  console.log("inside getInfo", JSON.stringify(MyInfo));
            if (MyInfo.length !== 0) {
                service.signupFlag = false;
            }
            return MyInfo;
        }




    }
})();
