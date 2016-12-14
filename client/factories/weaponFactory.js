app.factory('weaponFactory', function($http){
		let weapon = {};

    class WeaponFactory{
      constructor(){}

      buy(newWeapon){
        return $http.post('/buy', newWeapon).then(function(ret){
						weapon = ret.data;
						return weapon;

				});
      }
    }
    return new UserFactory();
});
