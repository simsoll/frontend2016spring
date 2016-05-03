(function () {
  "use strict";

  angular
    .module("shop", [])
    .controller("shopController", ['$scope', 'cartService', 'productService', function ($scope, cartService, productService) {
      productService.fetchData().then(function (data) {
        $scope.products = data;
      });

      $scope.addToCart = function (product) {
        cartService.add(product);
      };

      $scope.cart = cartService.cart;

      $scope.removeFromCart = function (product) {
        cartService.remove(product);
      };

      $scope.isEmpty = function () {
        return isEmpty($scope.cart);
      }

      function isEmpty(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop))
            return false;
        }

        return JSON.stringify(obj) === JSON.stringify({});
      }
    }]);

  angular
    .module("shop")
    .factory("cartService", function () {
      var cart = {};

      function add(product) {
        if (!cart[product.id]) {
          cart[product.id] = {
            product: product,
            count: 0
          }
        }

        cart[product.id].count++;
      }

      function remove(product) {
        delete cart[product.id];
      }

      return {
        add: add,
        cart: cart,
        remove: remove
      }
    });

  angular
    .module("shop")
    .factory("productService", productService);

  function productService($http) {
    function fetchData() {
      return $http.get('/data/products.json').then(function(reponse) {
        return reponse.data;
      });
    }
    
    return {
      fetchData: fetchData
    };
  }
})();

