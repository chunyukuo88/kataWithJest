export const getIdTitleBoxart = (genreLists) => {
  return genreLists
    .map(genre => genre.videos)
    .flat()
    .map(movie => getTargetFields(movie))
    .map(movie => extractArtsOfCorrectWidth(movie));
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