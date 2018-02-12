const members = require('../models/member');

module.exports = {
  getAllInductees: async (req, res, next) => {
    try {
      res.json(await members.find({ member_type: 'inductee' }));
    } catch (err) {
      next(err);
    }
  }
};
