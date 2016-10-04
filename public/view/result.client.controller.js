/**
 * Created by Jackist on 10/1/16.
 */
(function () {
    angular
        .module("StoryGenerator")
        .controller("ResultController", function ($location) {
            
            this.getReturn = getReturn;

            function init() {
                $('#modal-id').modal('toggle');
                $('.modal-backdrop').remove();
                $("body").removeClass("modal-open");
                $(document.body).css({ "background-image": "url('../image/rs.jpg')",
                                     "background-color": "black"});
            }

            init();

            function myFunction() {
                document.getElementById("a1").innerHTML = name;
                document.getElementById("a2").innerHTML = name;
            }
            myFunction();

            function getReturn(){
                $location.url("/");
            }
        })
})();