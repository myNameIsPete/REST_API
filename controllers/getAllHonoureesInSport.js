const members = require('../models/member');

module.exports = {
  getAllHonoureesInSport: async (req, res, next) => {
    try {
      res.json(
        await members.find({
          member_type: 'honouree',
          sport: req.params.sport.toLowerCase()
        })
      );
    } catch (err) {
      next(err);
    }
  }
};
