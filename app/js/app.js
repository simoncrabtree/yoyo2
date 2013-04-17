var app = angular.module('app', []);

app.value('model', {
  title: "a Test App"
});

app.controller('AppController', function (model, $scope) {
  $scope.greeting = 'Hello World! this is ' + model.title;
});
