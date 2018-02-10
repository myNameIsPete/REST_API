const members = require('../models/member');

const getAll = async (req, res, next) => {
  try {
    res.json(await members.find());
  } catch (err) {
    next(err);
  }
};

module.exports = getAll;
