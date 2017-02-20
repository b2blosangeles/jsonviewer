var m = mapping_data;
(function(mapping_data) {
	$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
	  
	  angular.module('myApp', [])
		  .controller('MyController', ['$scope', function ($scope) {
			  console.log('mapping_data-->->');
			  console.log(m);
			$scope.greetMe = mapping_data;
		  }]);

		angular.element(function() {
		  angular.bootstrap($('.'+mapping_data.id)[0], ['myApp']);
		});	
})(m);
	
