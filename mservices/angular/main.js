angular.element(function() {
	angular.bootstrap($('.'+mapping_data.id)[0], ['myApp_'+mapping_data.id]);
	angular.module('myApp_'+mapping_data.id, [])
		  .controller('MyController', ['$scope', function ($scope) {
			$scope.greetMe = mapping_data;
		  }
		  
	]);  
});

$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
