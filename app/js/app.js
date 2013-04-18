var app = angular.module('app', []);

app.value('model', {
    title: "a Test App",
    tasks: [
        {id: '1', description: 'Controller Unit Tests'},
        {id: '2', description: 'Responsive layout'},
        {id: '3', description: 'Other stuff'}
    ]
});

app.controller('AppController', function (model, $scope) {
    $scope.greeting = 'Hello World! this is ' + model.title;
    $scope.taskCount = model.tasks ? model.tasks.length : 0;
    $scope.tasks = model.tasks;
    if ($scope.tasks) {
        $scope.taskSummaryMessage = 'You have ' + $scope.taskCount + ' task(s) outstanding';
    } else {
        $scope.taskSummaryMessage = 'You have nothing to do at the moment, chill out';
    }
});
