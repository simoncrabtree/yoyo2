angular.module('app').controller('AddItemToShoppingList', function ($scope, dialog, model) {
  $scope.submit = function () {
    model.shoppingList.items.push({description: $scope.newItemDescription});
    $scope.newItemDescription = '';
  };

  $scope.cancel = function () {
    dialog.close();
  };
});
