import React, { useState, useEffect } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(()=>{
        let response = fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setPopularMovies(data.results);
            console.log(data.results);
        }).catch((error)=>{
            console.log(error);
        });
    }, []);

    return (
        <>
        <section id="home-section">
            <div className="home-div">
                <div className="container">
                    <div className="row">
                        <div className="poster">
                            <Carousel
                                showThumbs={false}
                                autoPlay={true} 
                                transitionTime={3} 
                                infiniteLoop={true} 
                                showStatus={false}
                            >
                            {
                                popularMovies.map((movie)=>{
                                    return (
                                        <>
                                        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                                            <div className="poster-image">
                                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                            </div>
                                            
                                            <div className="poster-image-overlay">
                                                <div className="poster-image-title">{movie ? movie.original_title : ""}</div>
                                                <div className="poster-image-runtime">
                                                    {movie ? movie.release_date : ""}
                                                    <span className="poster-image-rating">{movie ? movie.vote_average : ""} <i className="fas fa-star"></i>{" "}</span>
                                                </div>
                                                <div className="poster-image-desc">{movie ? movie.overview : ""}</div>
                                            </div>
                                        </Link>
                                        </>
                                    );
                                })
                            }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <MovieList />
        </>
    )
}

export default Home;
