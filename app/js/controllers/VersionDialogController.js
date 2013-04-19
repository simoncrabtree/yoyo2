angular.module('app').controller('VersionDialogController', function ($scope, dialog) {
  $scope.closeMe = function () {
    dialog.close('Byeeeee!');
  };
});
