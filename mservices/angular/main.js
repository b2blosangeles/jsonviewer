/*
angular.element(function() {
  
  
});
*/
console.log('myApp');
var myApp;
$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
angular.module('myApp', [])
	  .controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	  }
	  
]);
angular.bootstrap($('.'+mapping_data.id)[0], ['myApp');