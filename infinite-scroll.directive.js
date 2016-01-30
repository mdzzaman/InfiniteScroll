(function (angular) {
    "use strict";

    function constructor() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var container = document.getElementById(attrs.infiniteScroll),
                    threshold = parseInt(attrs.threshold, 10);
            angular.element(container).off('scroll');
            angular.element(container).on('scroll', function () {
                if (container.scrollTop + container.offsetHeight + threshold >= container.scrollHeight) {
                    scope.$apply(attrs.loadMore);
                }
            });
        }
    }

    constructor.$inject = [];
    angular.module('infiniteScroll').directive('infiniteScroll', constructor);
})(window.angular);