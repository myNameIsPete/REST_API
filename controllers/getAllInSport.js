const members = require('../models/member');

module.exports = {
  getAllInSport: async (req, res, next) => {
    try {
      res.json(await members.find({ sport: req.params.sport.toLowerCase() }));
    } catch (err) {
      next(err);
    }
  }
};
