const members = require('../models/member');

const getAllInSport = async (req, res, next) => {
  try {
    res.json(await members.find({ sport: req.params.sport.toLowerCase() }));
  } catch (err) {
    next(err);
  }
};

module.exports = getAllInSport;
