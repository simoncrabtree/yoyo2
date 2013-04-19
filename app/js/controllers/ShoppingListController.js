angular.module('app').controller('ShoppingListController', function ($scope, $state, model) {
    $scope.shoppingListItems = model.shoppingList.items;

    $scope.addItem = function () {
        $state.transitionTo('addItemToShoppingList');
    };
});
