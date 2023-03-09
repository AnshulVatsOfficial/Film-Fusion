import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FilmFusionLogo from './film-fusion-logo.png';

const Header = () => {
    return (
        <section id="header-section">
            <div className="header-div">
                <div className="container">
                    <div className="row">
                    <nav class="navbar navbar-expand-lg">
                        <Link to="/" className="navbar-brand">
                            <img src={FilmFusionLogo} alt="IMDb Logo" className="header__icon"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon bg-white"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/movies/popular" className="nav-link active text-white mx-3">Popular</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/movies/top_rated" className="nav-link text-white mx-3">Top Rated</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/movies/upcoming" className="nav-link text-white mx-3">Upcoming</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
