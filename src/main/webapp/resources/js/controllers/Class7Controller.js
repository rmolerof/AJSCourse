'use strict';

/**
 * CarController
 * @constructor
 */
var Class7Controller = function($scope, $http) {
	
};

App.controller('AlertDemoCtrl', function ($scope) {
	  $scope.alerts = [
	    { type: 'danger', msg: 'Danger.' },
	    { type: 'success', msg: 'Success.' }
	  ];

	  $scope.addAlert = function() {
	    $scope.alerts.push({msg: 'Another alert!'});
	  };

	  $scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
});

App.controller('CarouselDemoCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
});

App.controller('AccordionDemoCtrl', function ($scope) {
	  $scope.oneAtATime = true;

	  $scope.groups = [
	    {
	      title: 'Dynamic Group Header - 1',
	      content: 'Dynamic Group Body - 1'
	    },
	    {
	      title: 'Dynamic Group Header - 2',
	      content: 'Dynamic Group Body - 2'
	    }
	  ];

	  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  $scope.addItem = function() {
	    var newItemNo = $scope.items.length + 1;
	    $scope.items.push('Item ' + newItemNo);
	  };

	  $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };
});

App.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = false;
});