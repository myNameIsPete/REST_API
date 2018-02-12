const members = require('../models/member');
const groupArray = require('group-array');

module.exports = {
  getAllByYear: async (req, res, next) => {
    try {
      const data = await members.find();
      res.json(groupArray(data, 'year'));
    } catch (err) {
      next(err);
    }
  }
};
