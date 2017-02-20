$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController").html(' == angularjs Hello == {{greetMe}}!');
  
  angular.module('myApp', [])
      .controller('MyController', ['$scope', function ($scope) {
        $scope.greetMe = 'World2';
      }]);

    angular.element(function() {
      angular.bootstrap($('.'+mapping_data.id)[0], ['myApp']);
    });
	

