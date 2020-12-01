import React, {useContext} from 'react';
import {GlobalContext} from "./context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (

        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <div className="heading">My Watchlist</div>
                </div>
                <div className="movie-grid">
                    {watchlist.map((movie) =>(
                        <MovieCard movie={movie} type="watchlist"/>
                    ))}
                </div>
            </div>
        </div>
    );

}