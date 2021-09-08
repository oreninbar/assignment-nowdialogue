const data = require("../data");
const imdb_req = require("../server/imdb");

async function createAllMovieList() {
  let allActorsMoviesList = [];
  for (const actorName of data.people) {
    let actorId = await imdb_req.searchPerson(actorName);
    let actorMoviesList = await imdb_req.getPersonCredits(
      actorId.results[0].id
    );
    let tempActorList = [];
    for (const movie of actorMoviesList.cast) {
      isMarvelMovie(movie.id) &&
        tempActorList.push({
          id: movie.id,
          name: movie.title,
          character: movie.character,
        });
    }
    allActorsMoviesList.push({
      actorId: actorId.results[0].id,
      name: actorName,
      movies: tempActorList,
    });
  }

  return allActorsMoviesList;
}

function isMarvelMovie(movie_id) {
  for (const key in data.movie) {
    if (data.movie[key] == movie_id) return true;
  }
  return false;
}

function isTheSameCharacter(c1, c2) {
  let i = 0;
  while (i < c1.toString().length && c1[i] !== " " && c1[i] !== "/") {
    i++;
  }
  let tempCharacter = c1.slice(0, i);
  if (c2.toString().search(tempCharacter) > -2) return true;
  i++;
  let j = i;
  while (i < c1.toString().length && c1[i] !== " " && c1[i] !== "/") {
    i++;
  }
  tempCharacter = c1.slice(j, i);
  if (c2.toString().search(tempCharacter) > -2) return true;
  return false;
}

function playedMoreThenOne(allActorsMoviesList) {
  let actorsList = [];
  for (const actor of allActorsMoviesList) {
    let overOneCharacter = false;
    for (let i = 1; i < actor.movies.length; i++) {
      isTheSameCharacter(
        actor.movies[i].character,
        actor.movies[i - 1].character
      )
        ? (overOneCharacter = false)
        : (overOneCharacter = true);
      if (overOneCharacter) {
        console.log(
          actor.movies[i].character,
          "-VS-",
          actor.movies[i - 1].character
        );
        break;
      }
    }
    overOneCharacter
      ? actorsList.push({ name: actor.name, id: actor.actorId })
      : null;
  }
  return actorsList;
}

function returnCharacter(actor) {
  let overOneCharacter = false;
  for (let i = 1; i < actor.movies.length; i++) {
    isTheSameCharacter(actor.movies[i].character, actor.movies[i - 1].character)
      ? (overOneCharacter = false)
      : (overOneCharacter = true);
    return !overOneCharacter
      ? [actor.movies[i].character]
      : [actor.movies[i].character, actor.movies[i - 1].character];
  }
}

function playedTheSameRoll(allActorsMoviesList, length) {
  let playedTheSame = [];
  for (let i = 0; i < length - 1; i++) {
    let actor1Roles = returnCharacter(allActorsMoviesList[i]);
    for (let j = i + 1; j < allActorsMoviesList.length(); j++) {
      let actor2Roles = returnCharacter(allActorsMoviesList[j]);
      isTheSameCharacter(actor1Roles, actor2Roles)
        ? playedTheSame.push({
            actor1: allActorsMoviesList[i],
            actor2: allActorsMoviesList[j],
          })
        : null;
    }
  }
  return playedTheSame;
}

module.exports = {
  isMarvelMovie,
  createAllMovieList,
  isTheSameCharacter,
  playedMoreThenOne,
  returnCharacter,
  playedTheSameRoll,
};
