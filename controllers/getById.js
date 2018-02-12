const members = require('../models/member');

module.exports = {
  getById: async (req, res, next) => {
    try {
      res.json(await members.findById({ _id: req.params.id }));
    } catch (err) {
      next(err);
    }
  }
};
