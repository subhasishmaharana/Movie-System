import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../actions/moviesAction";
import _ from "lodash";
import MovieItem from "./MovieItem";
const MoviesList=props=>{
    const movies=useSelector((state)=>{
        return state.movies
    })
    console.log('localstorage',JSON.parse(localStorage.getItem('store')));
    const dispatch=useDispatch()
    const [search,setSearch]=useState('')
    const [searchedMovies,setSearchedMovies]=useState([])
    const [sorting,setSorting]=useState('')
    useEffect(()=>{
        setSearchedMovies(movies)
    },[movies])
    
    const handleSearchChange=e=>{
        const searchText=e.target.value
        setSearch(searchText)
        const searchResult=movies.filter((movie)=>{
            return movie.name.includes(searchText)
        })
        // console.log(searchResult)
        setSearchedMovies(searchResult)
    }
    const handleRemove=movie=>{
        dispatch(removeMovie(movie))
    }
    const handleNameSort=e=>{
        const newMovies=[...searchedMovies]
        const result=_.sortBy(newMovies, ['name']);
        setSearchedMovies(result)
    }
    const handleRankSort=e=>{
        const newMovies=[...searchedMovies]
        const result=_.sortBy(newMovies, ['ranking']);
        setSearchedMovies(result)
    }
    const handlerNameSort=e=>{
        const newMovies=[...searchedMovies]
        const result=_.sortBy(newMovies, ['name']);
        setSearchedMovies(result.reverse())
    }
    const handlerRankSort=e=>{
        const newMovies=[...searchedMovies]
        const result=_.sortBy(newMovies, ['ranking']);
        setSearchedMovies(result.reverse())
    }
    const handleSelectChange=e=>{
        setSorting(e.target.value)
    }
    // console.log('searchedmovis',searchedMovies)
    return (
        <div className="col-md-8"> 
            <h2>Listing Movies - {movies.length}</h2>
            <input type='text' value={search} placeholder='Search by name' onChange={handleSearchChange}/>
            <select value={sorting} onChange={handleSelectChange}>
                <option value=''>Sort By</option>
                <option value='name' onClick={handleNameSort}>Name -- A-Z</option>
                <option value='ranking' onClick={handleRankSort}>Ranking -- Low - High</option>
                <option value='rname' onClick={handlerNameSort}>Name -- Z-A</option>
                <option value='rranking' onClick={handlerRankSort}>Ranking -- High - Low</option>
            </select>
            {setSearchedMovies.length!==0 &&
                <div className='row'>
                    {searchedMovies.map((movie)=>{
                        return <MovieItem key={movie.id} movie={movie} {...movie} handleRemove={handleRemove}/>
                    })}
                </div>
            }
        </div>
    )
}

export default MoviesList