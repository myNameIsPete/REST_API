const members = require('../models/member');

module.exports = {
  getAllHonourees: async (req, res, next) => {
    try {
      res.json(await members.find({ member_type: 'honouree' }));
    } catch (err) {
      next(err);
    }
  }
};
