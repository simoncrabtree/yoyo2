angular.module('app', ['ui.compat']);

angular.module('app').value('model', {
    appName: "Cubdi",

    tasks: [
        {id: '1', description: 'Controller Unit Tests'},
        {id: '2', description: 'Responsive layout'},
        {id: '3', description: 'Other stuff'}
    ]
});

angular.module('app').config(function ($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    })
    .state('shoppinglist', {
        url: '/shoppinglist',
        templateUrl: 'views/shoppinglist.html'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
    });
});
