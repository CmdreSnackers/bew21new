// load all the models
const Movie = require("../models/movie");

const getMovies = async (genre, rating) => {
  try {
    let movies = [];
    if (genre) {
      movies = await Movie.find({ genre: genre });
    } else if (rating) {
      movies = await Movie.find({ rating: { $gt: rating } });
    } else {
      movies = await Movie.find();
    }
    console.log("controller", movies);
    return movies;
  } catch (error) {
    throw new Error(error);
  }
};

// add
const addMovie = async (title, director, release_year, genre, rating) => {
  //create new movie
  try {
    const newMovie = new Movie({
      title,
      director,
      release_year,
      genre,
      rating,
    });
    // save the movie mongodb
    await newMovie.save();
    return newMovie;
  } catch (error) {
    throw new Error(error);
  }
};

// update
const updateMovie = async (
  movie_id,
  title,
  director,
  release_year,
  genre,
  rating
) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    movie_id,
    {
      title,
      director,
      release_year,
      genre,
      rating,
    },
    { new: true } // send in the updated data
  );
  return updatedMovie;
};

// delete
// const deleteMovie = async () => {};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  // deleteMovie,
};
