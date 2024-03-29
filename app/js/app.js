angular.module('app', ['ui.compat', 'ui.bootstrap']);

angular.module('app').value('model', {
    appName: "Cubdi",

    tasks: [
        {id: '1', description: 'Controller Unit Tests'},
        {id: '2', description: 'Responsive layout'},
        {id: '3', description: 'Other stuff'}
    ],

    shoppingList: {
      items: [

      ]
    }
});

angular.module('app').config(function ($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    })
    .state('shoppinglist', {
        url: '/shoppinglist',
        controller: 'ShoppingListController',
        templateUrl: 'views/shoppinglist.html'
    })
    .state('addItemToShoppingList', {
        url: '/addItemToShoppingList',
        templateUrl: 'views/addItemToShoppingList.html'
    })
    .state('cupboard', {
        controller: 'CupboardController',
        templateUrl: 'views/cupboard.html'
    })
    .state('cupboard.all', {
        url: '/cupboard',
        templateUrl: 'views/cupboard.all.html'
    })
    .state('cupboard.needsusing', {
        templateUrl: 'views/cupboard.usenow.html'
    })
    .state('about', {
        url: '/about',
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    });
});
