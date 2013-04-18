angular.module('app').controller('ShoppingListController', function ($scope) {
    $scope.shoppingListItems = [
        {id: '1', description: 'Cheese'},
        {id: '2', description: 'Bacon'},
        {id: '3', description: 'Sausages'}
    ]
});
