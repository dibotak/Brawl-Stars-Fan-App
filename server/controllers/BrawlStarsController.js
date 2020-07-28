const { brawlstars } = require('../configs/api');

class BrawlStarsController {
  // Brawlers
  static async getBrawlers(req, res) {
    try {
      const response = await brawlstars.get('/brawlers');
      const brawlers = response.data;
      res.status(200).json(brawlers);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getBrawlerById(req, res) {
    const { brawlerId } = req.params;
    try {
      const response = await brawlstars.get(`/brawlers/${brawlerId}`);
      const brawler = response.data;
      res.status(200).json(brawler);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // Rankings
  static async getPlayersRankings(req, res) {
    const { countryCode } = req.params;

    try {
      const response = await brawlstars.get(`/rankings/${countryCode}/players`);
      const players = response.data;
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async getClubsRankings(req, res) {
    const { countryCode } = req.params;

    try {
      const response = await brawlstars.get(`/rankings/${countryCode}/clubs`);
      const clubs = response.data;
      res.status(200).json(clubs);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getBrawlersRankings(req, res) {
    const { countryCode, brawlerId } = req.params;

    try {
      const response = await brawlstars.get(
        `/rankings/${countryCode}/brawlers/${brawlerId}`
      );
      // players rankings by brawler
      const players = response.data;
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // Clubs
  static async getClubDetail(req, res) {
    const { clubTag } = req.params;

    try {
      const response = await brawlstars.get(`/clubs/${encodeURIComponent(clubTag)}`);
      const clubDetail = response.data;
      res.status(200).json(clubDetail);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getClubMembers(req, res) {
    const { clubTag } = req.params;

    try {
      const response = await brawlstars.get(`/clubs/${encodeURIComponent(clubTag)}/members`);
      const members = response.data;
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // Players
  static async getPlayerDetail(req, res) {
    const { playerTag } = req.params;

    try {
      const response = await brawlstars.get(`/players/${encodeURIComponent(playerTag)}`);
      const playerDetail = response.data;
      
      res.status(200).json(playerDetail);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getPlayerBattleLog(req, res) {
    const { playerTag } = req.params;

    try {
      const response = await brawlstars.get(`/players/${encodeURIComponent(playerTag)}/battlelog`);
      const playerDetail = response.data;
      res.status(200).json(playerDetail);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = BrawlStarsController;
