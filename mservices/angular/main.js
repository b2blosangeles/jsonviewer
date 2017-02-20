angular.element(function() {  
	angular.bootstrap($('.'+mapping_data.id)[0], ['app']);
});

$('.'+mapping_data.id).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
var app = angular.module('app', []);
app.controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	  }
	  
]);
