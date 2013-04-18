angular.module('app').controller('AppController', function (model, $scope, $state) {
    $state.transitionTo('home');
    $scope.navMenu = [
        {href: '/#/home', label: 'Home', state: 'home'},
        {href: '/#/shoppinglist', label: 'Shopping List', state: 'shoppinglist'},
        {href: '/#/cupboard', label: 'Cupboard', state: 'cupboard'},
        {href: '/#/about', label: 'About', state: 'about'}
    ];
    $scope.isCurrentState = function (stateName) {
        if (stateName === $state.current.name) {
            return 'active';
        };
    };
    $scope.heading =  'Welcome to ' + model.appName;
    $scope.taskCount = model.tasks ? model.tasks.length : 0;
    $scope.tasks = model.tasks;
    if ($scope.tasks) {
        $scope.taskSummaryMessage = 'You have ' + $scope.taskCount + ' task(s) outstanding';
    } else {
        $scope.taskSummaryMessage = 'You have nothing to do at the moment, chill out';
    }
});
