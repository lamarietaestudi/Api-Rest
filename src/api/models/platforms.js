const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    games: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Game'
      }
    ]
  },
  { timestamps: true, collection: 'platformCollection' }
);

const Platform = mongoose.model('Platform', platformSchema, 'platform'); // model name , Schema name , collection name
module.exports = Platform;
