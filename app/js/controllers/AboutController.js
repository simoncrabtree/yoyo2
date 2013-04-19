angular.module('app').controller('AboutController', function ($scope, $dialog) {
  $scope.showVersionDetails = function () {
    var d = $dialog.dialog({
      backdrop:true
    });
    d.open('views/version.html', 'VersionDialogController').then(function (result) {
      console.log("Closed:", result)
    });
  };

});
