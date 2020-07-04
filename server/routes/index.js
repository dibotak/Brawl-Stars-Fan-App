const router = require('express').Router();
const BrawlStarsController = require('../controllers/BrawlStarsController');

//brawlers
router.get('/brawlers', BrawlStarsController.getBrawlers);
router.get('/brawlers/:brawlerId', BrawlStarsController.getBrawlerById);

//rankings
router.get(
  '/rankings/:countryCode/players',
  BrawlStarsController.getPlayersRankings
);
router.get(
  '/rankings/:countryCode/clubs',
  BrawlStarsController.getClubsRankings
);
router.get(
  '/rankings/:countryCode/brawlers/:brawlerId',
  BrawlStarsController.getBrawlersRankings
);

//clubs
router.get(
  '/clubs/:clubTag',
  BrawlStarsController.getClubDetail
);
router.get(
  '/clubs/:clubTag/members',
  BrawlStarsController.getClubMembers
);

//players
router.get(
  '/players/:playerTag',
  BrawlStarsController.getPlayerDetail
);
router.get(
  '/players/:playerTag/battlelog',
  BrawlStarsController.getPlayerBattleLog
);


module.exports = router;
