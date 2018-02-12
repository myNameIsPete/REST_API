const members = require('../models/member');
const { getAll } = require('./getAll');
const { getAllInductees } = require('./getAllInductees');
const { getAllHonourees } = require('./getAllHonourees');
const { getAllTeams } = require('./getAllTeams');
const { getAllByYear } = require('./getAllByYear');
const { getAllInducteesByYear } = require('./getAllInducteesByYear');
const { getAllHonoureesByYear } = require('./getAllHonoureesByYear');
const { getAllTeamsByYear } = require('./getAllTeamsByYear');
const { getAllInSport } = require('./getAllInSport');
const { getAllInducteesInSport } = require('./getAllInducteesInSport');
const { getAllHonoureesInSport } = require('./getAllHonoureesInSport');
const { getAllTeamsInSport } = require('./getAllTeamsInSport');
const { getById } = require('./getById');
const { search } = require('./search');
const { createMember } = require('./createMember');

module.exports = {
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
};
