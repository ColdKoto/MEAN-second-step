const mongoose = require('mongoose'),
	    Weapon   = mongoose.model('Weapon');

class WeaponsController{
  constructor(){}

  buy(req, res){
        const newWeapon = new Weapon({
            name: req.body.name,
        });
				newWeapon.save(function(weapon){});
				res.json(newWeapon);
  }
}

module.exports = new WeaponsController;
