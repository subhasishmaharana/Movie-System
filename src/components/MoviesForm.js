import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../actions/moviesAction";

const MoviesForm=props=>{
    const [name,setName]=useState('')
    const [ranking,setRanking]=useState('')
    const dispatch=useDispatch()
    const movies=useSelector((state)=>{
        return state.movies
    })
    const handleNameChange=e=>{
        setName(e.target.value)
    }
    const handleRankingChange=e=>{
        setRanking(e.target.value)
    }
    const errors={}

    const runValidations=()=>{
        if(name.trim().length===0){
            errors.name='name cannot be blank'
        }
        if(ranking.length===0){
            errors.ranking='email cannot be blank'
        }
        const dupliRankedMovie=movies.find((movie)=>{
            return movie.ranking===ranking
        })
        if(dupliRankedMovie){
            errors.duplicate='movie with same ranking is already present'
        }
    }
    const handleSubmit=e=>{
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length===0){
            const formData={
                id:Number(new Date()),
                name:name,
                ranking:ranking
            }
            dispatch(addMovie(formData))
            setName('')
            setRanking('')
            localStorage.clear()
        }else{
            alert(`The following errors are present: 
            ${errors.hasOwnProperty('name') ? errors.name : ''}
            ${errors.hasOwnProperty('ranking') ? errors.ranking : ''}
            ${errors.hasOwnProperty('duplicate') ? errors.duplicate : ''}`)
        }
    }
    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={handleNameChange} placeholder='Enter Movie name'/><br/>
                <input type='number' value={ranking} onChange={handleRankingChange} placeholder='Enter Movie rank'/><br/>
                <button type='submit' className='btn btn-success'>Add</button>
            </form>
        </div>
    )
}

export default MoviesForm