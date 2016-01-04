//topicsController.js

(function () {

    "use strict";

    function topicsController() {

        var vm = this;

        vm.topics = [
        {
            name: "Travel",
            created: new Date()
        },

        {
            name: "Hobby",
            created: new Date()
        },

        {
            name: "Entertainment",
            created: new Date()
        }

        ];

        vm.newTopic = {};
        vm.addTopic = function () {
            vm.topics.push({
                name: vm.newTopic.name,
                created: new Date()
            });
            vm.newTopic = {};
        }
    }

    angular.module("app-topics").controller("topicsController", topicsController);

   
})();