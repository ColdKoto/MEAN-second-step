app.controller('indexController', function($scope, weaponFactory, $location){

  let self = this;

  this.buy = function(){
      weaponFactory.buy(self.newWeapon)
          .then(function(data){
              if(data.weapon){
                  $location.url('/weapon');
              }
          });
  }
});
