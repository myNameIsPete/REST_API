const members = require('../models/member');

module.exports = {
  createMember: async (req, res, next) => {
    try {
      console.log(req.body);
      const new_member = new members({
        name: req.body.name,
        year: req.body.year,
        bio: req.body.bio,
        date_inducted: req.body.date_inducted,
        member_type: req.body.member_type,
        video: req.body.video,
        show_with_inductees: req.body.show_with_inductees,
        sport: req.body.sport
      });
      res.json(await new_member.save());
    } catch (err) {
      next(err);
    }
  }
};
