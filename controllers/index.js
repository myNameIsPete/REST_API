const members = require('../models/member');
const groupArray = require('group-array');

module.exports = {
  // Get all in a certain category
  getAll: async (req, res, next) => {
    try {
      res.json(await members.find());
    } catch (err) {
      next(err);
    }
  },

  getAllInductees: async (req, res, next) => {
    try {
      res.json(await members.find({ member_type: 'inductee' }));
    } catch (err) {
      next(err);
    }
  },

  getAllHonourees: async (req, res, next) => {
    try {
      res.json(await members.find({ member_type: 'honouree' }));
    } catch (err) {
      next(err);
    }
  },

  getAllTeams: async (req, res, next) => {
    try {
      res.json(await members.find({ member_type: 'team' }));
    } catch (err) {
      next(err);
    }
  },

  // Get all in a category and order by year
  getAllByYear: async (req, res, next) => {
    try {
      const data = await members.find();
      res.json(groupArray(data, 'year'));
    } catch (err) {
      next(err);
    }
  },

  getAllInducteesByYear: async (req, res, next) => {
    try {
      const data = await members.find({ member_type: 'inductee' });
      res.json(groupArray(data, 'year'));
    } catch (err) {
      next(err);
    }
  },

  getAllHonoureesByYear: async (req, res, next) => {
    try {
      const data = await members.find({ member_type: 'honouree' });
      res.json(groupArray(data, 'year'));
    } catch (err) {
      next(err);
    }
  },

  getAllTeamsByYear: async (req, res, next) => {
    try {
      const data = await members.find({ member_type: 'team' });
      res.json(groupArray(data, 'year'));
    } catch (err) {
      next(err);
    }
  },

  // Get everything by a specified sport
  getAllInSport: async (req, res, next) => {
    try {
      res.json(await members.find({ sport: req.params.sport.toLowerCase() }));
    } catch (err) {
      next(err);
    }
  },

  getAllInducteesInSport: async (req, res, next) => {
    try {
      res.json(
        await members.find({
          member_type: 'inductee',
          sport: req.params.sport.toLowerCase()
        })
      );
    } catch (err) {
      next(err);
    }
  },

  getAllHonoureesInSport: async (req, res, next) => {
    try {
      res.json(
        await members.find({
          member_type: 'honouree',
          sport: req.params.sport.toLowerCase()
        })
      );
    } catch (err) {
      next(err);
    }
  },

  getAllTeamsInSport: async (req, res, next) => {
    try {
      res.json(
        await members.find({
          member_type: 'team',
          sport: req.params.sport.toLowerCase()
        })
      );
    } catch (err) {
      next(err);
    }
  }
};
