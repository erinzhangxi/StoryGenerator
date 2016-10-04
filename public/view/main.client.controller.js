/**
 * Created by Jackist on 10/1/16.
 */
(function () {
    angular
        .module("StoryGenerator")
        .controller("MainController", function ($timeout, $anchorScroll,$location, ClientService) {
            var Model = this;
            this.generate = generate;

            function init() {
                $(document.body).css({
                    "background-image": "url('image/bg.jpg')",
                "background-opacity": "0.5",
                "color": "white",
                "font-family": "'Lora', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                "background-repeat": "no-repeat",
                "background-size": "100%"
                });

                $(document).ready(function(){
                    $("#myBtn").click(function(){
                        $("#myModal").modal();
                    });
                    $("#about").mouseenter(function() {
                        $("#abouttext").fadeIn();
                    });

                });
            }


            init();

            function generate() {
                ClientService.go();
            }
            this.goToTop = function () {
                $location.hash('page-top');
                $anchorScroll();
            };

            this.goToAbout = function () {
                $location.hash('about');
                $anchorScroll();
            };


            this.goToDownload = function() {
                $location.hash('team');
                $anchorScroll();
            };

            this.goToContact = function() {
                $location.hash('contact');
                $anchorScroll();
            };
            Model.success = false;
            Model.alert = false;

            this.submit = function () {
                ClientService
                    .submit(Model.name, Model.email, Model.phone, Model.message)
                    .then(function (res) {
                        Model.success = "Your information has been submitted. You will be contacted shortly.";
                        $timeout(function () {
                            Model.success = false;
                        }, 5000);
                    }, function (res) {
                        Model.alert = "Something went wrong while submitting your information. Please try again later.";
                        $timeout(function () {
                            Model.alert = false;
                        }, 5000);
                    });
            };

        });
})();