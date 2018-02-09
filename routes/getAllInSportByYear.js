const members = require('./../models/member');
const groupArray = require('group-array');

const getAllInSportByYear = async (req, res, next) => {
  try {
    const data = await members.find({ sport: req.params.sport.toLowerCase() });
    res.json(groupArray(data, 'year'));
  } catch (err) {
    next(err);
  }
};

module.exports = getAllInSportByYear;
