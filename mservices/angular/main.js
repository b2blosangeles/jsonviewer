/*
angular.element(function() {
  angular.bootstrap($('.'+mapping_data.id)[0], ['myApp_'+mapping_data.id]);
});
$($('.'+mapping_data.id)[0]).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
angular.module('myApp_'+mapping_data.id, [])
	  .controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	  }
	  
]);
*/

var mapp;
angular.element(function() {  
//	angular.bootstrap($('.'+mapping_data.id)[0], ['mapp']);
});

$('.'+mapping_data.id).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
angular.module('mapp', []).controller('MyController', ['$scope', function ($scope) {
		$scope.greetMe = mapping_data;
	  }
	  
]);

app.directive('topSection', function() {
    return {
	restrict:'E',    
        template:_TPL_['tpl/angularjs/module.html']
    };
}); 
angular.bootstrap($('.'+mapping_data.id)[0], ['mapp']);



// angular.bootstrap($('.'+mapping_data.id)[0], ['mapp']);