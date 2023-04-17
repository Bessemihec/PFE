const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntretienSchema = new Schema({
    type: String,
    date: String,
    offre: { type: Schema.Types.ObjectId, ref: 'offres' },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    description: String
  }, {timestamps: true})



module.exports = mongoose.model('entretien', EntretienSchema)