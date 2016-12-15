app.controller('weaponController', function($scope, weaponFactory, $location){
  weaponFactory.checkWeapon(function(weapon){
      if(weapon.name){
          $scope.weapon = weapon;
      }
  });
});
