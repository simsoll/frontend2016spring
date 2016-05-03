(function(){
	"use strict";

	angular
      .module("shop", [])
      .controller("shopController", shopController);
  
    function shopController($scope) {
      $scope.selectedProduct = null;
      $scope.products = [
        {
          "title": "Old Rasputin",
          "style": "Russian Imperial Stout"
        },
        {
          "title": "Speedway Stout",
          "style": "Imperial Stout"
        }
      ];
      
      $scope.viewProduct = function(){
        $scope.selectedProduct = this.product;
      }
    }

})();

