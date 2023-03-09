import React from 'react';
import './Card.css';
import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Card = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
        {
        isLoading
        ?
            <div className="cards">
                <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
                    <Skeleton height={300} duration={2} count={5} />
                </SkeletonTheme>
            </div>
        :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards">
                    <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" className="cards-img" />
                    <div className="cards-overlay">
                        <div className="cards-title">{movie ? movie.original_title : ""}</div>
                        <div className="cards-runtime">
                            {movie?movie.release_date:""}
                            <span className="cards-rating">{movie ? movie.vote_average : ""} <i className="fas fa-star"></i>{" "}</span>
                        </div>
                        <div className="cards-desc">{movie ? movie.overview.slice(0, 118) + "...": ""}</div>
                    </div>
                </div>
            </Link>
        }
        </>
    )
}

export default Card;
