	$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController"+mapping_data.id).html(_TPL_['tpl/angularjs/home.html']);
	(function(nnn) { 

	  angular.module('myApp', [])
		  .controller('MyController'+mapping_data.id, ['$scope', function ($scope) {
			  
		console.log('--nnn-y-->');
		console.log(nnn);			  
			  console.log('mapping_data--5->');
			  console.log(mapping_data);
			$scope.greetMe = mapping_data;
		  }
		  
		  ]);

		angular.element(function() {
		  angular.bootstrap($('.'+mapping_data.id)[0], ['myApp']);
		});	
 
	})(mapping_data);
