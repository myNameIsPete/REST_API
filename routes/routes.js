const router = require('express').Router();
const {
  getAll,
  getAllInductees,
  getAllHonourees,
  getAllTeams,
  getAllByYear,
  getAllInducteesByYear,
  getAllHonoureesByYear,
  getAllTeamsByYear,
  getAllInSport,
  getAllInducteesInSport,
  getAllHonoureesInSport,
  getAllTeamsInSport
} = require('./../controllers/');

// Get everything is specific categories
router.get('/all', getAll);
router.get('/all/inductees', getAllInductees);
router.get('/all/honourees', getAllHonourees);
router.get('/all/teams', getAllTeams);

// Get everything but then order by year
router.get('/all/byYear', getAllByYear);
router.get('/all/inductees/byYear', getAllInducteesByYear);
router.get('/all/honourees/byYear', getAllHonoureesByYear);
router.get('/all/teams/byYear', getAllTeamsByYear);

// Get everyting in specific sport
router.get('/all/in/:sport', getAllInSport);
router.get('/all/inductees/in/:sport', getAllInducteesInSport);
router.get('/all/honourees/in/:sport', getAllHonoureesInSport);
router.get('/all/teams/in/:sport', getAllTeamsInSport);

/*

/all/inductees/in/:sport
/all/honourees/in/:sport
/all/teams/in/:sport

/all/inductees/in/:sport/byYear
/all/honourees/in/:sport/byYear
/all/teams/in/:sport/byYear

/id/:id

/all/in/:query/

/search/:query

*/

module.exports = router;
