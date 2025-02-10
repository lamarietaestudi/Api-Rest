const mongoose = require('mongoose');
const Platform = require('../../api/models/platforms');
const platforms = require('../../data/platforms');

const initSeed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://maria_sola:EpamwWpvLBnvRHT4@cluster0.j3joc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    await Platform.collection.drop();
    await Platform.insertMany(platforms);

    await mongoose.disconnect();
  } catch (error) {
    console.log('Platforms Seed Error');
  }
};

initSeed();

// "seeds" folder must be added to .gitignore file
