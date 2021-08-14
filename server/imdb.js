const axios = require("axios");

async function getMovie(movie_Id) {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_Id}?api_key=af941aaa59a39482baeca5556fe90392&language=en-US`
    );
    if (movie == null) {
      return 400;
    }
    return movie.data;
  } catch (err) {
    return err;
  }
}

async function getMovieCredits(movie_Id) {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_Id}/credits?api_key=af941aaa59a39482baeca5556fe90392&language=en-US`
    );
    if (movie == null) {
      return 400;
    }
    return movie.data;
  } catch (err) {
    return err;
  }
}

async function searchMovie(movie_name) {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=af941aaa59a39482baeca5556fe90392&language=en-US&page=1&include_adult=false&query=${movie_name}`
    );
    if (movie == null) {
      return 400;
    }
    return movie.data;
  } catch (err) {
    return err;
  }
}

async function getPerson(person_id) {
  try {
    const person = await axios.get(
      `https://api.themoviedb.org/3/person/${person_id}?api_key=af941aaa59a39482baeca5556fe90392&language=en-US`
    );
    if (person == null) {
      return 400;
    }
    return person.data;
  } catch (err) {
    return err;
  }
}

async function getPersonCredits(person_id) {
  try {
    const person = await axios.get(
      `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=af941aaa59a39482baeca5556fe90392&language=en-US`
    );
    if (person == null) {
      return 400;
    }
    return person.data;
  } catch (err) {
    return err;
  }
}

async function searchPerson(person_name) {
  try {
    const person = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=af941aaa59a39482baeca5556fe90392&language=en-US&page=1&include_adult=false&query=${person_name}`
    );
    if (person == null) {
      return 400;
    }
    return person.data;
  } catch (err) {
    return err;
  }
}

module.exports = {
  getMovie,
  getMovieCredits,
  searchMovie,
  getPerson,
  getPersonCredits,
  searchPerson,
};
