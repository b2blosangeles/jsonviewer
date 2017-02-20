
console.log('====77->');
			  console.log(mapping_data);	
	
	$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
	  
	  angular.module('myApp', [])
		  .controller('MyController', ['$scope', (function($scope, mapping_data) { 
			  return function ($scope) {
				console.log('mapping_data--88->');
				console.log(mapping_data);
				$scope.greetMe = mapping_data;
			  }	
		  })($scope, mapping_data)
		  
		  ]);

		angular.element(function() {
		  angular.bootstrap($('.'+mapping_data.id)[0], ['myApp']);
		});	
 
	
