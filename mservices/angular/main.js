angular.element(function() {
	$('.'+mapping_data.id).attr("ng-controller", "rootController").html(_TPL_['tpl/angularjs/home.html']);
	angular.bootstrap($('.'+mapping_data.id)[0], ['app_'+mapping_data.id]);	 
});
var app = angular.module('app_'+mapping_data.id, [
	'ngCookies',
	'ngRoute'
]);
app.controller('rootController', function ($rootScope, $scope, $location, $http, $cookies, $timeout, $sce) {
	$scope.greetMe = mapping_data;
	
	$scope.data = {
	    availableOptions: [
	      {id: '1', name: 'Option A'},
	      {id: '2', name: 'Option B'},
	      {id: '3', name: 'Option C'}
	    ],
	    selectedOption: {id: '1'} //This sets the default value of the select in the ui
	 };
});
