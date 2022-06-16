import express from 'express';
import movies from '../Models/movie';

export const MovieNew=async(req,res)=>{
    const movieData = req.body;
    const newMovie = new movies(movieData)
    try {
        await newMovie.save()
        res.status(200).json({ message: 'Movie Added Successfully' })
    } catch (error) {
        res.status(500).json(error?.message)
    }
}

const GetMovieSearchObj = (query) => {
    let searchQuery = {}
    if (query.idisused) {
        searchQuery["_id"] = query._id
    }
    return searchQuery;
}

export const MovieGetAll=async(req,res)=>{
    const query = GetMovieSearchObj(req.body);
    try {
        const movieList= await movies.find(query);
        res.status(200).json({ result: movieList })
    } catch (error) {
        res.status(500).json(error?.message)
    }
}