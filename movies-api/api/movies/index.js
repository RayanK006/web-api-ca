import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getMovieReviews } from '../tmdb-api'; 
import { getUpcomingMovies } from '../tmdb-api'; 
import { getTrendingMovies } from '../tmdb-api'; 
import { getPopularMovies } from '../tmdb-api'; 
import { getNowPlayingMovies } from '../tmdb-api'; 
import { getMovieRecommendation } from '../tmdb-api'; 
import { getMovieCredits } from '../tmdb-api'; 
import { getGenres } from '../tmdb-api';
 
const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const genreMovies = await getGenres();
    res.status(200).json(genreMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/reviews', asyncHandler(async (req, res) => {
    const reviewsMovies = await getMovieReviews();
    res.status(200).json(reviewsMovies);
}));
 
router.get('/trending', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

router.get('/now_playing', asyncHandler(async (req, res) => {
    const nowplayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowplayingMovies);
}));

router.get('/recommendations', asyncHandler(async (req, res) => {
    const recommendationMovies = await getMovieRecommendation();
    res.status(200).json(recommendationMovies);
}));

router.get('/credits', asyncHandler(async (req, res) => {
    const creditMovies = await getMovieCredits();
    res.status(200).json(creditMovies);
}));


export default router;
