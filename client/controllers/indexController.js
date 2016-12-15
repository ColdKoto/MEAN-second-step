app.controller('indexController', function($scope, weaponFactory, $location){

  let self = this;
  this.newWeapon = {};

  this.buy = function(){
      weaponFactory.buy(self.newWeapon)
          .then(function(data){
            console.log(data);
              if(data.name){
                  $location.url('/weapon');
              }
          });
  }
});
