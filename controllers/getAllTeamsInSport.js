const members = require('../models/member');

module.exports = {
  getAllTeamsInSport: async (req, res, next) => {
    try {
      res.json(
        await members.find({
          member_type: 'team',
          sport: req.params.sport.toLowerCase()
        })
      );
    } catch (err) {
      next(err);
    }
  }
};
