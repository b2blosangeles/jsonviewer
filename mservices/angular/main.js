var app = angular.module('app_'+mapping_data.id, []);
app.controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	
	  }
	  
]);

angular.element(function() {
	$('.'+mapping_data.id).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
	angular.bootstrap($('.'+mapping_data.id)[0], ['app_'+mapping_data.id]);	 
  
});

