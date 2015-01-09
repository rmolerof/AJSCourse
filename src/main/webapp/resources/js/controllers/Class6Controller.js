'use strict';

/**
 * CarController
 * @constructor
 */
var Class6Controller = function($scope, $http) {
	
};

App.directive("productDescription", function(){
	return{
		restrict: 'E',
		templateUrl: "resources/templates/class6/product-description.html"
	};
});

App.directive("productSpecs", function(){
	return{
		restrict: "E",
		templateUrl: "resources/templates/class6/product-specs.html"
	};
});

App.directive("productReviews", function(){
	return{
		restrict: "E",
		templateUrl: "resources/templates/class6/product-reviews.html"
	};
});
