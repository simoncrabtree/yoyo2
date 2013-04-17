var model, scope, controller;

beforeEach(module('app'));

describe('App Controller', function () {
  beforeEach(inject(function ($controller, $rootScope) {
    model = {
      title: 'Test Title'
    };
    scope = $rootScope.$new();
    controller = $controller('AppController', {model: model, $scope: scope});
  }));

  describe('Given the model has a title', function () {
    it('Should glue the title to the greeting', inject(function ($controller, $rootScope) {
      expect(controller).toBeTruthy();
      expect(scope.greeting).toBe('Hello World! this is Test Title');
    }));
  });
});
