angular.module('infiniteScroll', []);
(function (angular) {
    'use strict';

    function constructor($http) {
        var vm = this;
        vm.studentList = [];
        vm.loadOnScroll = loadOnScroll;

        function loadOnScroll() {
            $http.get('studentList.json').success(function (data) {
                for (var i = 0, length = data.studentList.length; i < length; i++) {
                    vm.studentList.push(data.studentList[i]);
                }
            });
        }
        
        function init() {
            $http.get('studentList.json').success(function (data) {
                vm.studentList = data.studentList;
            });
        }

        init();
    }

    constructor.$inject = ["$http"];

    angular.module('infiniteScroll').controller('studentsController', constructor);
})(window.angular);

