var app = angular.module('app', []);
app.controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	
	  }
	  
]);

setTimeout(function() { 
	$('.'+mapping_data.id).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
	angular.bootstrap($('.'+mapping_data.id)[0], ['app']);	
}, 100);
app.directive('topSection', function() {
    return {
	restrict:'E',    
        template:_TPL_['tpl/angularjs/module.html']
    };
}); 