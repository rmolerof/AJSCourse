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
	
	var  gems =[{
		name: 'Dodecahedron',
		price: 2,
		description: 'Some gems',
		canPurchase: true
	},{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'You are a gem',
		canPurchase: false
	},{
		name: 'Awesome Multi-touch Keyboard',
		price: 250.00,
		description: "used for Mac and PC",
		canPurchase: true
	},{
		name: 'Android phone',
		price: 50.00,
		description: "has camera and iWallet",
		canPurchase: true
	}];
	
	$scope.product = gem;
	$scope.products = gems;
	//console.log(gem);
};