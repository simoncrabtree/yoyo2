angular.module('app').controller('CupboardController', function ($scope, $state) {
    $scope.items = [
        {id: '1', description: 'Marmite'},
        {id: '2', description: 'Eggs', needsUsing: true},
        {id: '3', description: 'Lettuce'}
    ];
    $scope.needsUsing = function (item) {
        return item.needsUsing;
    };
    $scope.showAll = function () {
        console.log("Show All")
        $state.transitionTo('cupboard.all');
    };
    $scope.showNeedUsing = function () {
        console.log("Show Needs Using")
        $state.transitionTo('cupboard.needsusing');
    }
});
