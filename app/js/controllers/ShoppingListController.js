angular.module('app').controller('ShoppingListController', function ($scope, $state) {
    $scope.shoppingListItems = [
        {id: '1', description: 'Cheese'},
        {id: '2', description: 'Bacon'},
        {id: '3', description: 'Sausages'}
    ];

    $scope.addItem = function () {
        $state.transitionTo('addItemToShoppingList');
    };
});
