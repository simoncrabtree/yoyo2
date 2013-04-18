angular.module('app').controller('AppController', function (model, $scope, $state) {
    $state.transitionTo('home');
    $scope.$on('$stateChangeSuccess', function (evt, state) {
        console.log('State Change',state);
        $scope.currentState = state;
    });
    $scope.navMenu = [
        {href: '/#/home', label: 'Home', state: 'home'},
        {href: '/#/shoppinglist', label: 'Shopping List', state: 'shoppinglist'},
        {href: '/#/about', label: 'About', state: 'about'}
    ];
    $scope.isCurrentState = function (stateName) {
        if ($scope.currentState && stateName === $scope.currentState.name) {
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
