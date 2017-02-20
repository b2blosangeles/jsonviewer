$('.'+mapping_data.id).attr("ng-controller", "MyController").html(_TPL_['tpl/angularjs/home.html']);
angular.bootstrap($('.'+mapping_data.id)[0], ['app']);	

