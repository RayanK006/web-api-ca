import fetch from 'node-fetch';

export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getGenres = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getUpcomingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/upcoming/movie?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getTrendingMovies = async () => {
    const response = await fetch(
       `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getPopularMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/popular/movie?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};


export const getMovieRecommendation = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
};

export const getMovieCredits = async (id) => {
    const response = await fetch(
       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

  if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
}

export const getMovieReviews = async () => {
    const response = await fetch(
       `https://api.themoviedb.org/3/movie/movie_id/reviews?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
}

export const getMovieImages = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
}
