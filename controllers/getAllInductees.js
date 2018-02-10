const members = require('../models/member');

const getAllInductees = async (req, res, next) => {
  try {
    res.json(await members.find());
  } catch (err) {
    next(err);
  }
};

module.exports = getAllInductees;
