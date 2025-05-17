const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_generes=99`,
    fetchTvShows: `tv/popular?api_key=${API_KEY}language=en-US&page=1`,
}

export default requests;