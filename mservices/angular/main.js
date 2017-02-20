$($('.'+mapping_data.id)[0]).html('<div ng-controller="MyController">angularjs Hello -- {{greetMe}}!</div>');
  
  angular.module('myApp', [])
      .controller('MyController', ['$scope', function ($scope) {
        $scope.greetMe = 'World';
      }]);

    angular.element(function() {
      angular.bootstrap(document, ['myApp']);
    });
	

