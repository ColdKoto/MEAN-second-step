const mongoose = require('mongoose');

let WeaponSchema = new mongoose.Schema({
  weapon: {
      type: String,
      required: [true, 'Weapon is required'],
      trim: true
  },
}, {timestamps: true});

mongoose.model('Weapon', WeaponSchema);
