'use strict';

/**
 * CarController
 * @constructor
 */
var Class1Controller = function($scope, $http) {
		
	var gem = {
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond the luster, beyond their shine, Dodeca is one of those gems',
			canPurchase: true,
			soldOut: false
	};
	
	$scope.product = gem;
	//console.log(gem);
};