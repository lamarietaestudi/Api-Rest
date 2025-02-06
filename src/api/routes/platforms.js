const {
  getPlatforms,
  postPlatform,
  updatePlatform,
  deletePlatform
} = require('../controllers/platforms');

const platformsRouter = require('express').Router();

platformsRouter.get('/', getPlatforms);
platformsRouter.post('/', postPlatform);
platformsRouter.put('/:id_platform', updatePlatform);
platformsRouter.delete('/:id_platform', deletePlatform);

module.exports = { platformsRouter };
