//assessmentsController.js

(function () {

    "use strict";

    function assessmentsController($http) {

        var vm = this;

        vm.assessments = [];
        vm.errorMessage = "";
        vm.isBusy = true;

        $http.get("http://localhost:50001/api/assessment/all")
         .then(function (response) {
              angular.copy(response.data, vm.assessments);
         }, function (error) {
             vm.errorMessage = "Failed to load data: " + error;
         })
         .finally(function () {
             vm.isBusy = false;
         });

        vm.newAssessment = {};
        vm.addNewAssessment = function () {

            vm.isBusy = true;
            vm.errorMessage = "";

            $http.post("http://localhost:50001/api/assessment/", vm.newAssessment)
              .then(function (response) {
                  // success
                  vm.assessments.push(response.data);
                  vm.newAssessment = {};
              }, function () {
                  // failure
                  vm.errorMessage = "Failed to save new assessment";
              })
              .finally(function () {
                  vm.isBusy = false;
              });

        };

   }

    angular.module("app-assessments").controller("assessmentsController", assessmentsController);


})();