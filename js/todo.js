'use strict';


/**
 * Main application
 */
var demoApp = angular.module('app', ['todoList']);

/**
 * Module todoList
 */
var todoList = angular.module('todoList',[]);


/**
 * Controller
 */
todoList.controller('todoCtrl', ['$scope',
    function ($scope) {
        // Initialize todos array
        var todos = $scope.todos = [];

        // Add todo
        $scope.addTodo = function () {
            // .trim() to trim value 
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                // avoid empty todo
                return;
            }
            todos.push({
                // Add todo
                title: newTodo,
                completed: false
            });
            // Resetting the variable newTodo
			$scope.allChecked = false;
            $scope.newTodo = '';
        };

        // remove todo
        $scope.removeTodo = function (todo) {
            todos.splice(todos.indexOf(todo), 1);
        };

        // Select / Unselect todos
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = !completed;
            });
        };

        // Delete Todo Selected
        $scope.clearCompletedTodos = function () {
			$scope.allChecked = false;
            $scope.todos = todos = todos.filter(function (todo) {
                return !todo.completed;
            });
        };
    }
]);