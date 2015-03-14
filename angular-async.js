(function() {

  function $Async() {
    function $asyncFilter(async) {
      if (angular.isDefined(async) && async.then) {
        async.$$state = async.$$state || {};
        async.$$state.value = angular.isDefined(async.$$state.value) ?
                                                 async.$$state.value :
                                                           undefined ;
        return async.$$state.value;
      }
      return async;
    }
    return $asyncFilter;
  }


  angular.module('ngAsync', [])
  .filter('async', [$Async])
  .filter('await', [$Async]);

  angular.module('angular-async', ['ngAsync']);

}());
