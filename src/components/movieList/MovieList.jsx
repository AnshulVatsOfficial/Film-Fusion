import React from 'react';
import './MovieList.css';
import { useState, useEffect } from 'react';
import Card from '../cards/Card';
import { useParams } from 'react-router-dom';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    const getMovieData = () => {
        let response = fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setMovieList(data.results);
        }).catch((error)=>{
            console.log(error);
        });
    }

    useEffect(()=>{
        getMovieData();
    }, []);

    useEffect(()=>{
        getMovieData();
    }, [type]);

    return (
        <div className="movie-list">
            <h2 className="list-title">{(type ? type : "popular").toUpperCase()}</h2>
            <div className="list-cards">
                {
                    movieList.map((movie)=>{
                        return (
                            <Card movie={movie} />
                        );  
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;
