angular.module('app').controller('ShoppingListController', function ($scope, $dialog, model) {
    $scope.shoppingListItems = model.shoppingList.items;

    $scope.addItem = function () {
      $dialog.dialog()
      .open('views/addItemToShoppingList.html', 'AddItemToShoppingList')
      .then(function (result) {
        console.log("Closed:", result);
      });
    };
});
