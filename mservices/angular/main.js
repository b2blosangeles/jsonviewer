var app = angular.module('app', []).controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	$('.'+mapping_data.id).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
	angular.bootstrap($('.'+mapping_data.id)[0], ['app']);		
	  }
	  
]);
//angular.element(function() { 

//});
app.directive('topSection', function() {
    return {
	restrict:'E',    
        template:_TPL_['tpl/angularjs/module.html']
    };
}); 