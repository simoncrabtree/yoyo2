var model, scope, controller, createController;

describe('App Controller', function () {
    beforeEach(module('app'));
    beforeEach(inject(function ($controller, $rootScope) {
        createController = $controller;
        scope = $rootScope.$new();
    }));

    describe('Given the model has a title', function () {
        beforeEach(function () {
            model = {
                title: 'Test Title',
                tasks: [
                    {id: '1', description: 'Task One'}
                ]
            };
            controller = createController('AppController', {model: model, $scope: scope});
        });

        it('Should glue the title to the greeting', inject(function ($controller, $rootScope) {
            expect(controller).toBeTruthy();
            expect(scope.greeting).toBe('Hello World! this is Test Title');
        }));

        it('Should display the number of tasks', function () {
            expect(scope.taskCount).toBe(1);
        });

        it('Should display the task descriptions', function () {
            expect(scope.tasks[0].description).toBe('Task One');
        });

        it('Should display a task summary message', function () {
            expect(scope.taskSummaryMessage).toBe('You have 1 task(s) outstanding');
        });
    });

    describe('Given there are no tasks', function () {
        beforeEach(function () {
            model = {
            }
            controller = createController('AppController', {model: model, $scope: scope});
        });

        it('Should display a "No Tasks" message', function () {
            expect(scope.taskSummaryMessage).toBe('You have nothing to do at the moment, chill out');
        });
    });
});
