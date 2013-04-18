angular.module('app', []);

angular.module('app').value('model', {
    title: "a Test App",
    tasks: [
        {id: '1', description: 'Controller Unit Tests'},
        {id: '2', description: 'Responsive layout'},
        {id: '3', description: 'Other stuff'}
    ]
});
