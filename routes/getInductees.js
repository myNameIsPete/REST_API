const members = require('../models/member');

const getAllMembers = async (req, res, next) => {
  try {
    res.json(await members.find());
  } catch (err) {
    next(err);
  }
};

module.exports = getAllMembers;
