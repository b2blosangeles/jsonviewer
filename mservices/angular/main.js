/*
angular.element(function() {
  
  
});
*/
app.directive('topSection', function() {
    return {
	restrict:'E',    
        template:_TPL_['tpl/angularjs/module.html']
    };
}); 

console.log('myApp');
var myApp;
$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
var app = angular.module('myApp', []);
app.controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	  }
	  
]);
angular.bootstrap($('.'+mapping_data.id)[0], ['myApp']);