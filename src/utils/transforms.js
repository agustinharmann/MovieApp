const filtrado = movies => {
  return movies.filter(m => m.poster_path !== null);
};

export { filtrado };
