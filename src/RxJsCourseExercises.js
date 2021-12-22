export const getIdTitleBoxart = (genreLists) => {
  const listOfMovieLists = genreLists.map(genre => genre.videos);
  const listOfMovies = listOfMovieLists.flat();
  const targetFields = listOfMovies.map(movie => getTargetFields(movie));
  return targetFields.map(movie => extractArtsOfCorrectWidth(movie));
};

const extractArtsOfCorrectWidth = (movie) => {
  const result = movie;
  result.boxarts = movie.boxarts.filter(art => (art.width === 150))[0];
  return result;
};

const getTargetFields = (movie) => ({
  id: movie.id,
  title: movie.title,
  boxarts: movie.boxarts
});