const router = require('express').Router();
const getAllInductees = require('./getAllMembers');
const getAllInSport = require('./getAllInSport');
const getInducteesByYear = require('./getAllMembersByYear');
const getAllInSportByYear = require('./getAllInSportByYear');

/*

/members
/inductees
/teams

/members/byYear
/inductees/byYear
/teams/byYear

/members/in/:sport
/inductees/in/:sport
/teams/in/:sport

/members/in/:sport/byYear
/inductees/in/:sport/byYear
/teams/in/:sport/byYear

/id/:id

/sports/

/search/:query

*/

router.get('/inductees', getInductees);
router.get('/inductees/byYear', getInducteesByYear);

router.get('/in/:sport', getAllInSport);
router.get('/in/:sport/byYear', getAllInSportByYear);

module.exports = router;
