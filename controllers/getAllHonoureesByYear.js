const members = require('../models/member');
const groupArray = require('group-array');

module.exports = {
  getAllHonoureesByYear: async (req, res, next) => {
    try {
      const data = await members.find({ member_type: 'honouree' });
      res.json(groupArray(data, 'year'));
    } catch (err) {
      next(err);
    }
  }
};
