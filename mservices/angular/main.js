var mapp;
angular.element(function() {  
	angular.bootstrap($('.'+mapping_data.id)[0], ['mapp']);
});

$('.'+mapping_data.id).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
var app = angular.module('mapp', []);
app.controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	  }
	  
]);

app.directive('topSection', function() {
    return {
	restrict:'E',    
        template:_TPL_['tpl/angularjs/module.html']
    };
}); 

