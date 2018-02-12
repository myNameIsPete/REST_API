const members = require('../models/member');

module.exports = {
  search: async (req, res, next) => {
    try {
      const regex = new RegExp(req.params.q);
      res.json(await members.find({ name: regex }));
    } catch (err) {
      next(err);
    }
  }
};

//  var regex = new RegExp("ReGeX" + testVar + "ReGeX");
