const members = require('../models/member');

module.exports = {
  getAllTeams: async (req, res, next) => {
    try {
      res.json(await members.find({ member_type: 'team' }));
    } catch (err) {
      next(err);
    }
  }
};
