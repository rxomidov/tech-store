import React from 'react';

export const ResultCard = ({movie}) => {

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={movie.poster_path}
                         alt={`${movie.title} Poster`}/>
                ):(
                    <div className="filler-poster">

                    </div>
                )}
            </div>
        </div>
    );

}