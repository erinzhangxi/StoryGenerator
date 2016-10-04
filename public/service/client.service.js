var name;
var gender;
(function () {
    angular
        .module("StoryGenerator")
        .factory("ClientService", function ($location) {
            var api = {
                go : go
            };
            return api;
            function submit(name, email, phone, message) {
                var object = {
                    name : name,
                    email : email,
                    phone : phone,
                    message : message
                };
                return $http.post('/contact', object);
            }
            function go() {
                name = document.getElementById('usrname').value;
                var x = document.getElementById("male").checked;
                var y = document.getElementById("female").checked;
                if(x){
                    gender = 1;
                }
                if(y){
                    gender = 2;
                }
                if(name != "") {
                    var x;
                    x = Math.floor(Math.random() * 10) + 1;
                    if(gender == 1) {
                        switch (x) {
                            case 1:
                                $location.url("/result1");
                                break;
                            case 2:
                                $location.url("/result2");
                                break;
                            case 3:
                                $location.url("/result3");
                                break;
                            case 4:
                                $location.url("/result4");
                                break;
                            case 5:
                                $location.url("/result5");
                                break;
                            case 6:
                                $location.url("/result6");
                                break;
                            case 7:
                                $location.url("/result7");
                                break;
                            case 8:
                                $location.url("/result8");
                                break;
                            case 9:
                                $location.url("/result9");
                                break;
                            case 10:
                                $location.url("/result10");
                                break;
                            default:
                                break;
                        }
                    }
                    if(gender == 2) {
                        switch (x) {
                            case 1:
                                $location.url("/result11");
                                break;
                            case 2:
                                $location.url("/result12");
                                break;
                            case 3:
                                $location.url("/result13");
                                break;
                            case 4:
                                $location.url("/result14");
                                break;
                            case 5:
                                $location.url("/result15");
                                break;
                            case 6:
                                $location.url("/result16");
                                break;
                            case 7:
                                $location.url("/result17");
                                break;
                            case 8:
                                $location.url("/result18");
                                break;
                            case 9:
                                $location.url("/result19");
                                break;
                            case 10:
                                $location.url("/result20");
                                break;
                            default:
                                break;

                        }
                    }

                }
            }


        });
})();