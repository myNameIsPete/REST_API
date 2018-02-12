const members = require('../models/member');

module.exports = {
  getAllInducteesInSport: async (req, res, next) => {
    try {
      res.json(
        await members.find({
          member_type: 'inductee',
          sport: req.params.sport.toLowerCase()
        })
      );
    } catch (err) {
      next(err);
    }
  }
};
