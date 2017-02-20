angular.element(function() {
	$('.'+mapping_data.id).attr("ng-controller", "rootController").html(_TPL_['tpl/angularjs/home.html']);
	angular.bootstrap($('.'+mapping_data.id)[0], ['app_'+mapping_data.id]);	 
});
var app = angular.module('app_'+mapping_data.id, [
	'ngCookies',
	'ngRoute'
]);
app.controller('rootController',function ($rootScope, $scope, $location, $http, $cookies, $timeout, $sce) {
	$scope.greetMe = mapping_data;
});

