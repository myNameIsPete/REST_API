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
  getAllTeamsInSport,
  getById,
  search,
  createMember
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

// Get member by ID
router.get('/member/:id', getById);

// Search for all members with "string" in name
router.get('/search/:q', search);

// Create a new member
router.post('/new_member', createMember);

module.exports = router;
