import React from "react";
import { useSelector } from "react-redux";

const MoviesStat=props=>{
    const movies=useSelector((state)=>{
        return state.movies
    })
    const topMovieName=()=>{
        const top=movies.find((movie)=>{
            return Math.min(Number(movie.ranking))
        })
        return top.name
    }
    return (
        <div className="card bg-light mb-3">
            <div className="card-header"><h2>Movies Stat</h2></div>
            <div className="card-body">
                <h4 className="card-title">Total Movies - {movies.length}</h4>
                <h3 className="card-text">Top Ranked Movie - {movies.length !==0 ? topMovieName() : ''}</h3>
            </div>
        </div>
        
    )
}

export default MoviesStat