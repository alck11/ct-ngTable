(function () {
  'use strict';
  var TableController = function (CookiejarService) {
    var _this = this;

    activate();

    function activate() {
      CookiejarService.get().then(function (data) {
        _this.cookieJar = data.data;
        _this.cookieKey = Object.keys(_this.cookieJar[0]);
      });
    }

  };

  angular
    .module('ctTable')
    .controller('TableController', TableController);

  TableController.$inject = ['CookiejarService'];
})();