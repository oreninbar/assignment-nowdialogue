const express = require("express");
const data = require("../../data");
const router = express.Router();
const imdb_req = require("../imdb");
const func=require('../functions');

router.get(`/question1`, async (req, res) => {
  let allActorsMoviesList = [];
  try {
    allActorsMoviesList = await func.createAllMovieList();
    res.status(200).send(allActorsMoviesList);
  } catch (err) {
    res.status(500).send({ message: "Something went wrong", error: `${err}` });
  }
});

router.get(`/question2`, async (req, res) => {
  let allActorsMoviesList = [];
  let moreThenOneList = [];
  try {
    allActorsMoviesList = await func.createAllMovieList();
    moreThenOneList = func.playedMoreThenOne(
      allActorsMoviesList,
      allActorsMoviesList.length
    );
    res.send(moreThenOneList);
  } catch (err) {
    res.status(500).send({ message: "Something went wrong", error: `${err}` });
  }
});

router.get(`/question3`, async (req, res) => {
  let allActorsMoviesList = [];
  let playedTheSame;
  try {
    allActorsMoviesList = await func.createAllMovieList();
    playedTheSame = func.playedTheSameRoll(allActorsMoviesList);
    res.send(playedTheSame);
  } catch (err) {
    res.status(500).send({ message: "Something went wrong", error: `${err}` });
  }
});

module.exports = router;
