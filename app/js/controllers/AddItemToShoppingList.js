angular.module('app').controller('AddItemToShoppingList', function ($scope, $window, model) {
  $scope.submit = function () {
    model.shoppingList.items.push({description: $scope.newItemDescription});

    $window.history.back();
  };

  $scope.cancel = function () {
    $window.history.back();
  };
});
