angular.module('app', []);

angular.module('app').value('model', {
  title: "Test App"
});

angular.module('app').controller('AppController', function (model, $scope) {
  $scope.greeting = 'Hello World! this is ' + model.title;
});
