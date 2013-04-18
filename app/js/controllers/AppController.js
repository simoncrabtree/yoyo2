angular.module('app').controller('AppController', function (model, $scope) {
    $scope.greeting = 'Hello World! this is ' + model.title;
    $scope.taskCount = model.tasks ? model.tasks.length : 0;
    $scope.tasks = model.tasks;
    if ($scope.tasks) {
        $scope.taskSummaryMessage = 'You have ' + $scope.taskCount + ' task(s) outstanding';
    } else {
        $scope.taskSummaryMessage = 'You have nothing to do at the moment, chill out';
    }
});
