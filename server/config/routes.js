const weapons = require('../controllers/weapons.js');

module.exports = function(app){
  app.post('/buy', weapons.buy);
}
