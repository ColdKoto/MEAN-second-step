app.controller('indexController', function($scope, $location){

  this.moveOn = function(){
    $location.url('/next');
  }
});
