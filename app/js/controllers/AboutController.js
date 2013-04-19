angular.module('app').controller('AboutController', function ($scope, $dialog) {
  $scope.showVersionDetails = function () {
    $dialog.dialog()
    .open('views/version.html', 'VersionDialogController')
    .then(function (result) {
      console.log("Closed:", result)
    });
  };
});
