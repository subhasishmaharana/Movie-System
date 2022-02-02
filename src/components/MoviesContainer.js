import React from "react";
import Input from "../Input";
import MoviesForm from "./MoviesForm";
import MoviesList from "./MoviesList";
import MoviesStat from "./MoviesStat";

const MoviesContainer=props=>{
    const {userInput}=props
    return(
        <div>
            {/* <Input userInput='a'/> */}
            <h1>Movie System</h1>
            <div className='row'>
                <MoviesList/>
                <div className="col-md-4">
                <MoviesForm/>
                <MoviesStat/>
                </div>
            </div>
            
        </div>
    )
}

export default MoviesContainer